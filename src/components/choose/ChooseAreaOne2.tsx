"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";

export default function ChooseAreaOne2() {
  const t = useT();

  return (
    <>
      <div className="choose-new-section section-padding position-relative z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="choose-thumb-wap me-lg-4">
                <div className="thumb w-100 overflow-hidden">
                  <Image
                    src="/assets/img/about/choose-exprience.png"
                    alt="Citigems"
                    width={584}
                    height={476}
                    quality={100}
                    sizes="(max-width: 991px) 100vw, 584px"
                    className="overflow-hidden w-100 h-auto"
                  />
                </div>
                <Image
                  src="/assets/img/element/rainday.png"
                  alt=""
                  width={64}
                  height={56}
                  className="quick-randay cir36"
                />
                <Image
                  src="/assets/img/element/ba-ele.png"
                  alt=""
                  width={119}
                  height={138}
                  className="quick-ba updowns"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sassion-content ps-xxl-5">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-xl-5 mb-lg-4 mb-md-3 mb-2">
                    <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                      {t("why.badge")}
                    </div>
                    <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                      {t("why.title")}
                    </h2>
                    <p className="border-0 pb-xl-2 pb-0 mb-4">{t("why.lede")}</p>
                    <div className="progress-theme-wrap">
                      <div
                        className="progress-theme-items why-stat--cep"
                        role="img"
                        aria-label={`${t("why.stat1")} 100%`}
                      >
                        <div className="p-title text-white">{t("why.stat1")}</div>
                        <div className="p-count text-white">100%</div>
                      </div>
                      <div className="progress-theme-items style2">
                        <div className="p-title">{t("why.stat2")}</div>
                        <div className="p-count">2014</div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/#contact" className="common_btn text-nowrap">
                  {t("why.cta")}
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
