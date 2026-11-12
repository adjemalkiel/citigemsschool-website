"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";


export default function HeroAreaOne() {
  const t = useT();

  return (
    <>
      <section className="banner-section fix position-relative">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="hero-thumb">
                  <Image
                    src="/assets/img/banner/hero-thumb.png"
                    alt="Citigems Bilingual School"
                    width={852}
                    height={766}
                    className="mimg"
                    quality={100}
                    priority
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                  <Image
                    src="/assets/img/element/hero-circle-ele.png"
                    alt=""
                    width={515}
                    height={515}
                    className="hero-circle zoom-in"
                    unoptimized
                  />
                  <Image
                    src="/assets/img/element/hero-flash.png"
                    alt=""
                    width={244}
                    height={208}
                    className="flash-ele mt-sm-4 zoom-in"
                    unoptimized
                  />
                  <Image
                    src="/assets/img/element/hero-pulp.png"
                    alt=""
                    width={184}
                    height={166}
                    className="bulp-ele"
                    unoptimized
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content px-lg-0 px-sm-4">
                  <span className="hero-badge wow fadeInUp" data-wow-delay="0.6s">
                    {t("hero.badge")}
                  </span>
                  <h1
                    className="white fw_700 mb-xl-4 mb-sm-3 mb-2 visible-slowly-bottom"
                    data-wow-delay="0.7s"
                  >
                    {t("hero.title")}
                  </h1>
                  <p className="white fs-six mb-40 wow fadeInUp" data-wow-delay="0.8s">
                    {t("hero.lede")}
                  </p>
                  <div
                    className="banner-video d-flex flex-sm-nowrap justify-content-center justify-content-lg-start flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <Link href="/#contact" className="common_btn text-nowrap">
                      {t("hero.cta")}
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <Link href="/#fees" className="common_btn common_btn_outline text-nowrap">
                      {t("hero.cta2")}
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/element/heor-shape1.png"
          alt=""
          width={1920}
          height={195}
          className="hero-shape1"
          unoptimized
        />
        <Image
          src="/assets/img/element/hero-dump.png"
          alt=""
          width={474}
          height={392}
          className="hero-dump position-absolute d-lg-block d-none bob-x"
          unoptimized
        />
        <Image
          src="/assets/img/element/hero-pen.png"
          alt=""
          width={134}
          height={200}
          className="hero-pen updowns d-lg-block d-none"
          unoptimized
        />
        <Image
          src="/assets/img/element/hero-car.png"
          alt=""
          width={326}
          height={204}
          className="hero-car bob-x start-0 bottom-0 position-absolute d-lg-block d-none"
          unoptimized
        />
      </section>
    </>
  );
}
