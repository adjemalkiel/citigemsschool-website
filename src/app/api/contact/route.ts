import { NextResponse } from "next/server";
import { ERP_CONTACT_METHOD, ERP_SITE_URL } from "@/i18n/erp";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const form = new URLSearchParams();
  form.set("name", name);
  form.set("email", email);
  form.set("phone", phone);
  form.set("message", message);

  const url = `${ERP_SITE_URL}/api/method/${ERP_CONTACT_METHOD}`;
  let upstream: Response;
  try {
    upstream = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
        "X-Forwarded-For":
          req.headers.get("x-forwarded-for") ||
          req.headers.get("x-real-ip") ||
          "",
      },
      body: form.toString(),
      cache: "no-store",
    });
  } catch {
    return NextResponse.json({ ok: false, error: "erp_unreachable" }, { status: 502 });
  }

  const text = await upstream.text();
  let data: { message?: unknown; exc?: string; _server_messages?: string } = {};
  try {
    data = JSON.parse(text) as typeof data;
  } catch {
    return NextResponse.json(
      { ok: false, error: "erp_bad_response", detail: text.slice(0, 300) },
      { status: 502 },
    );
  }

  if (!upstream.ok || data.exc) {
    return NextResponse.json(
      {
        ok: false,
        error: "erp_rejected",
        detail: data.message || data.exc || text.slice(0, 300),
      },
      { status: upstream.status >= 400 ? upstream.status : 502 },
    );
  }

  const result = data.message as
    | { ok?: boolean; communication?: string; email_sent?: boolean }
    | undefined;
  return NextResponse.json({
    ok: true,
    communication: result?.communication,
    email_sent: Boolean(result?.email_sent),
  });
}
