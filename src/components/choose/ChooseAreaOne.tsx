"use client";

import Image from "next/image";
import Link from "next/link";
import Count from "../common/Count";
import { useT } from "@/i18n/LocaleProvider";


export default function ChooseAreaOne() {
  const t = useT();

  return (
    <>
      <div className="addmissions-section section-padding position-relative z-1">
        <div className="container">
          <div className="row g-4 g-xl-5 align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="sassion-content">
                <div className="section-title mb-4 mb-lg-0">
                  <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                    {t("about.badge")}
                  </div>
                  <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                    {t("about.title")}
                  </h2>
                  <p className="border-0 pb-0 mb-3">{t("about.lede")}</p>
                  <p className="border-0 pb-0 mb-3">{t("about.lede2")}</p>
                  <p className="border-0 pb-0 mb-4">{t("about.lede3")}</p>
                  <div className="list-of-admission pb-4">
                    <div className="row g-3">
                      {(
                        [
                          "about.point1",
                          "about.point2",
                          "about.point3",
                          "about.point4",
                        ] as const
                      ).map((key) => (
                        <div className="col-sm-6" key={key}>
                          <div className="d-flex gap-2 align-items-start">
                            <Image
                              src="/assets/img/icon/check-badge.png"
                              alt=""
                              width={18}
                              height={18}
                              className="flex-shrink-0 mt-1"
                            />
                            <span>{t(key)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-bottom mb-4"></div>
                  <Link href="/#fees" className="common_btn text-nowrap">
                    {t("about.cta")}
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-thumb-wap admission-thumb-wap position-relative mx-auto">
                <div className="thumb w-100 overflow-hidden">
                  <Image
                    src="/assets/img/about/admission-thumb.png"
                    alt="Citigems"
                    width={696}
                    height={463}
                    quality={100}
                    className="overflow-hidden w-100 h-auto"
                    sizes="(max-width: 991px) 100vw, 540px"
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
                      <span className="count">
                        <Count number={25} text="+" add_style={true} />
                      </span>
                    </div>
                    <p>{t("about.exp")}</p>
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
          className="babol-parasut bottom-0 end-0 mb-2 me-4 updowns d-sm-block d-none"
        />
        <Image
          src="/assets/img/element/admission-knodlage.png"
          alt=""
          width={94}
          height={88}
          className="admission-knodlage babol-quit b-0 pb-5 mb-5 d-sm-block updowns d-none"
          unoptimized
        />
        <Image
          src="/assets/img/element/start-outline.png"
          alt=""
          width={75}
          height={72}
          className="position-absolute top-0 end-0 mt-4 pt-2 me-5 pe-xl-5 d-md-block cir36 d-none"
        />
      </div>
    </>
  );
}
