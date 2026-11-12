"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

const careLetters: {
  letter: string;
  titleKey: MessageKey;
  descKey: MessageKey;
}[] = [
  { letter: "C", titleKey: "care.care", descKey: "care.care.desc" },
  { letter: "A", titleKey: "care.accountability", descKey: "care.accountability.desc" },
  { letter: "R", titleKey: "care.respect", descKey: "care.respect.desc" },
  { letter: "E", titleKey: "care.excellence", descKey: "care.excellence.desc" },
];

export default function AboutOverview() {
  const t = useT();

  return (
    <section className="about-overview-section addmissions-section section-padding position-relative z-1">
      <div className="container">
        {/* Story + visual */}
        <div className="row g-4 g-xl-5 justify-content-between align-items-center mb-xxl-5 mb-4">
          <div className="col-lg-6">
            <div className="sassion-content pe-xxl-3">
              <div className="section-title mb-0">
                <div className="badge-section secondary wow fadeInUp" data-wow-delay=".2s">
                  {t("about.badge")}
                </div>
                <h2 className="black mb-4 visible-slowly-bottom fw-bold d-block">
                  {t("page.about.headline")}
                </h2>
                <p className="border-0 pb-0 mb-3">{t("page.about.p1")}</p>
                <p className="border-0 pb-0 mb-3">{t("page.about.p2")}</p>
                <p className="border-0 pb-0 mb-3">{t("page.about.p3")}</p>
                <p className="border-0 pb-0 mb-0">{t("page.about.p4")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="choose-thumb-wap admission-thumb-wap position-relative me-lg-2">
              <div className="thumb w-100 overflow-hidden">
                <Image
                  src="/assets/img/about/admission-thumb.png"
                  alt="Citigems Bilingual School"
                  width={696}
                  height={463}
                  quality={100}
                  className="overflow-hidden"
                  sizes="(max-width: 991px) 100vw, 582px"
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

        {/* C.A.R.E. — acronym spine: the letters are the layout */}
        <div className="about-care-band mb-4 mb-lg-5">
          <div className="section-title text-center mb-4 mb-lg-5 mx-auto about-care-band__intro">
            <div className="badge-section wow fadeInUp" data-wow-delay=".2s">
              C.A.R.E.
            </div>
            <h3 className="black fw-bold mb-3">{t("why.title")}</h3>
            <p className="border-0 mb-0">{t("page.about.p5")}</p>
          </div>

          <ol className="about-care-spine list-unstyled mb-0">
            {careLetters.map((item, i) => (
              <li
                className="about-care-spine__item wow fadeInUp"
                data-wow-delay={`${0.15 + i * 0.1}s`}
                key={item.letter}
              >
                <span className="about-care-spine__letter" aria-hidden="true">
                  {item.letter}
                </span>
                <div className="about-care-spine__copy">
                  <span className="about-care-spine__word">{t(item.titleKey)}</span>
                  <p className="about-care-spine__desc border-0 mb-0">{t(item.descKey)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Closing — lede + proof + CTA */}
        <div className="about-overview-footer">
          <div className="about-overview-footer__copy">
            <p className="about-overview-footer__lede border-0 mb-0">
              {t("page.about.p6")}
            </p>
          </div>
          <div className="about-overview-footer__proof" aria-label="Key facts">
            <div className="about-overview-metric about-overview-metric--red">
              <span className="about-overview-metric__value">100%</span>
              <span className="about-overview-metric__label">{t("why.stat1")}</span>
            </div>
            <div className="about-overview-metric about-overview-metric--gold">
              <span className="about-overview-metric__value">2014</span>
              <span className="about-overview-metric__label">{t("why.stat2")}</span>
            </div>
          </div>
          <div className="about-overview-footer__cta">
            <Link href="/#contact" className="common_btn text-nowrap">
              {t("page.about.cta")}
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
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
      <Image
        src="/assets/img/element/babol-parasut.png"
        alt=""
        width={162}
        height={194}
        className="about-overview-deco-left updowns"
      />
    </section>
  );
}
