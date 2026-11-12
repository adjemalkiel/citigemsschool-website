"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

const valueKeys: MessageKey[] = [
  "page.about.values.care",
  "page.about.values.accountability",
  "page.about.values.respect",
  "page.about.values.excellence",
];

export default function AboutStoryArea() {
  const t = useT();

  return (
    <section className="addmissions-section section-padding position-relative z-1">
      <div className="container">
        <div className="row g-4 justify-content-between align-items-start">
          <div className="col-lg-6">
            <div className="sassion-content pe-xxl-4">
              <div className="section-title mb-4">
                <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                  {t("about.badge")}
                </div>
                <h2 className="black mb-4 visible-slowly-bottom fw-bold d-block">
                  {t("page.about.headline")}
                </h2>
                <p className="border-0 pb-0 mb-3">{t("page.about.p1")}</p>
                <p className="border-0 pb-0 mb-3">{t("page.about.p2")}</p>
                <p className="border-0 pb-0 mb-3">{t("page.about.p3")}</p>
                <p className="border-0 pb-0 mb-4">{t("page.about.p4")}</p>
                <p className="border-0 pb-0 mb-3 fw-semibold">{t("page.about.values.intro")}</p>
                <ul className="list-unstyled d-flex flex-column gap-2 mb-4">
                  {valueKeys.map((key) => (
                    <li className="d-flex gap-2 align-items-center" key={key}>
                      <Image
                        src="/assets/img/icon/check-badge.png"
                        alt=""
                        width={18}
                        height={18}
                      />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <p className="border-0 pb-0 mb-3">{t("page.about.p5")}</p>
                <p className="border-0 pb-0 mb-4">{t("page.about.p6")}</p>
                <div className="border-bottom mb-4"></div>
              </div>
              <Link href="/#contact" className="common_btn text-nowrap">
                {t("page.about.cta")}
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="choose-thumb-wap admission-thumb-wap position-relative me-lg-4">
              <div className="thumb w-100 overflow-hidden">
                <Image
                  src="/assets/img/about/admission-thumb.png"
                  alt="Citigems Bilingual School"
                  width={696}
                  height={463}
                  quality={100}
                  className="overflow-hidden"
                />
              </div>
              <div className="count-box d-center">
                <Image
                  src="/assets/img/element/count-box.png"
                  alt=""
                  width={208}
                  height={208}
                  className="count-ele"
                />
                <div className="boxes position-absolute pt-1">
                  <div className="count-item justify-content-center mb-xxl-3 mb-1 d-flex align-items-center">
                    <span className="count fw-bold fs-3">100%</span>
                  </div>
                  <p>{t("why.stat1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/assets/img/element/admission-play.png"
        alt=""
        width={235}
        height={178}
        className="babol-parasut bottom-0 end-0 mb-2 me-4 updowns d-xl-block d-none"
      />
      <Image
        src="/assets/img/element/admission-knodlage.png"
        alt=""
        width={188}
        height={176}
        className="admission-knodlage babol-quit b-0 pb-5 mb-5 d-lg-block updowns d-none"
        unoptimized
      />
    </section>
  );
}
