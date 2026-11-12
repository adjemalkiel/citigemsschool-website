import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const ogAlt = SITE_NAME;
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function asset(rel: string) {
  const buf = await readFile(join(process.cwd(), "public", rel));
  return `data:image/png;base64,${buf.toString("base64")}`;
}

/** Kids + circle/flash/pulp + favicon mark — WhatsApp / social preview. */
export async function renderOgPreview() {
  const [thumb, circle, flash, pulp, mark] = await Promise.all([
    asset("assets/img/banner/hero-thumb.png"),
    asset("assets/img/element/hero-circle-ele.png"),
    asset("assets/img/element/hero-flash.png"),
    asset("assets/img/element/hero-pulp.png"),
    asset("assets/img/logo/icon-mark.png"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(135deg, #ED1C24 0%, #B01018 60%, #8B0C12 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Kids stage (left) */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            bottom: 0,
            width: 640,
            height: 630,
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <img
            src={circle}
            width={460}
            height={460}
            style={{
              position: "absolute",
              left: 90,
              bottom: 40,
              opacity: 0.95,
            }}
          />
          <img
            src={thumb}
            width={560}
            height={504}
            style={{
              position: "absolute",
              left: 20,
              bottom: -20,
              objectFit: "contain",
            }}
          />
          <img
            src={flash}
            width={150}
            height={128}
            style={{ position: "absolute", left: 420, top: 70 }}
          />
          <img
            src={pulp}
            width={110}
            height={99}
            style={{ position: "absolute", left: 40, top: 90 }}
          />
        </div>

        {/* Copy (right) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 620,
            paddingRight: 56,
            gap: 22,
            color: "#fff",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "#fff",
              color: "#ED1C24",
              fontSize: 22,
              fontWeight: 800,
              borderRadius: 18,
              padding: "10px 18px 10px 10px",
              alignSelf: "flex-start",
            }}
          >
            <img
              src={mark}
              width={52}
              height={52}
              style={{ borderRadius: 12 }}
            />
            <span style={{ display: "flex" }}>CITIGEMS SCHOOLS</span>
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 800, lineHeight: 1.1, maxWidth: 500 }}>
            École bilingue à Cotonou
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "rgba(255,255,255,0.92)", maxWidth: 480 }}>
            Maternelle & primaire · FR + EN
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 12,
            }}
          >
            <div
              style={{
                display: "flex",
                background: "#FCDA1E",
                color: "#1a1a1a",
                fontSize: 20,
                fontWeight: 700,
                borderRadius: 999,
                padding: "10px 20px",
              }}
            >
              Agla Agongbomey
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "rgba(255,255,255,0.85)" }}>
              citigemsschool.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
