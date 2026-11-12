"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useT } from "@/i18n/LocaleProvider";


export default function CtaAreaOne() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (!res.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <div className="getin-touch-section position-relative z-1 section-padding">
        <div className="container position-relative">
          <Image
            src="/assets/img/element/quick-rainbow.png"
            alt=""
            width={168}
            height={148}
            className="quick-rainbow rots d-lg-block d-none"
          />
          <Image
            src="/assets/img/element/quick-line.png"
            alt=""
            width={104}
            height={86}
            className="quick-line updowns d-md-block d-none"
          />

          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-40 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                {t("cta.badge")}
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                {t("cta.title")}
              </h2>
            </div>
          </div>

          <div className="getin-touch-wrap position-relative">
            <div className="row g-4 align-items-center position-relative z-1">
              <div className="col-lg-6">
                <div className="getin-touch pe-xl-5">
                  <p className="get-pra wow fadeInUp" data-wow-delay="0.3s">
                    “{t("cta.quote")}”
                  </p>
                  <div className="d-flex flex-column gap-xl-4 gap-3">
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.5s">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/call-icon.png"
                          alt=""
                          width={56}
                          height={56}
                        />
                      </div>
                      <div>
                        <div className="sub-texts">{t("cta.phone.label")}</div>
                        <a href="tel:+2290149678853" className="black sub-title">
                          01 49 67 88 53 / 01 94 83 59 22
                        </a>
                      </div>
                    </div>
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.6s">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/envelop-icon.png"
                          alt=""
                          width={56}
                          height={56}
                        />
                      </div>
                      <div>
                        <div className="sub-texts">{t("cta.email.label")}</div>
                        <a
                          href="mailto:citigems2014@gmail.com"
                          className="black sub-title text-break"
                        >
                          citigems2014@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.7s">
                      <div className="icon">
                        <Image
                          src="/assets/img/icon/location-icon.png"
                          alt=""
                          width={56}
                          height={56}
                        />
                      </div>
                      <div>
                        <div className="sub-texts">{t("cta.address.label")}</div>
                        <span className="black sub-title">
                          Agla Agongbomey, Cotonou
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 get-in-touch">
                <h3 className="mb-4 fw-semibold">{t("cta.form.title")}</h3>
                <form className="row g-xxl-4 g-3" onSubmit={onSubmit}>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <input
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t("cta.form.name")}
                    />
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <input
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("cta.form.email")}
                    />
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                    <input
                      type="text"
                      name="phone"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("cta.form.phone")}
                    />
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                    <textarea
                      name="message"
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("cta.form.message")}
                    ></textarea>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.7s">
                    <button
                      type="submit"
                      className="common_btn text-nowrap"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? t("cta.form.sending") : t("cta.form.submit")}
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </button>
                    {status === "ok" ? (
                      <p className="mt-3 mb-0 text-success">{t("cta.form.success")}</p>
                    ) : null}
                    {status === "error" ? (
                      <p className="mt-3 mb-0 text-danger">{t("cta.form.error")}</p>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
            <Image
              src="/assets/img/element/quick-bg.png"
              alt=""
              width={1320}
              height={666}
              className="quick-bg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
