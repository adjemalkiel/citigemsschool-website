"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

const programmes: {
  delay: string;
  image: string;
  titleKey: MessageKey;
  metaKey: MessageKey;
  descKey: MessageKey;
}[] = [
  {
    delay: "0.3s",
    image: "/assets/img/blog/course-2.png",
    titleKey: "prog.nursery.title",
    metaKey: "prog.nursery.meta",
    descKey: "prog.nursery.desc",
  },
  {
    delay: "0.6s",
    image: "/assets/img/blog/course-1.png",
    titleKey: "prog.primary.title",
    metaKey: "prog.primary.meta",
    descKey: "prog.primary.desc",
  },
  {
    delay: "0.9s",
    image: "/assets/img/blog/course-3.png",
    titleKey: "prog.bilingual.title",
    metaKey: "prog.bilingual.meta",
    descKey: "prog.bilingual.desc",
  },
];

export default function CoursesAreaOne() {
  const t = useT();

  return (
    <>
      <section className="courses-section section-padding fix">
        <div className="container">
          <div className="section-title-area courses-title-area align-items-end justify-content-center position-relative">
            <Image
              src="/assets/img/element/quick-rainbow.png"
              alt=""
              width={168}
              height={148}
              className="courses-title-rainbow rots d-md-block d-none"
            />
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                {t("prog.badge")}
              </div>
              <h2 className="text-white visible-slowly-bottom fw-bold d-block">
                {t("prog.title")}
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {programmes.map((item) => (
              <div
                className="col-12 col-lg-4 wow fadeInUp"
                data-wow-delay={item.delay}
                key={item.titleKey}
              >
                <div className="cources-single-items">
                  <Link
                    href="/#programmes"
                    className="c-image mb-3 position-relative overflow-hidden"
                  >
                    <Image
                      src={item.image}
                      alt=""
                      width={742}
                      height={480}
                      quality={100}
                      sizes="(max-width: 768px) 100vw, 378px"
                      className="rounded-3"
                    />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-0 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> {t(item.metaKey)}
                      </span>
                    </div>
                    <h3 className="mb-2">
                      <Link href="/#programmes" className="black visible-slowly-bottom">
                        {t(item.titleKey)}
                      </Link>
                    </h3>
                    <p className="mb-3">{t(item.descKey)}</p>
                    <div className="border-bottom-deshed"></div>
                    <div className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link
                        href="/#contact"
                        className="common_btn common_btn_outline text-nowrap"
                      >
                        {t("prog.join")}
                        <span className="icon_wrapper">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/assets/img/element/course-bg.png"
          alt=""
          width={1920}
          height={858}
          quality={100}
          unoptimized
          className="course-bg"
        />
        <Image
          src="/assets/img/element/course-ele.png"
          alt=""
          width={314}
          height={283}
          className="course-ele cir36"
        />
        <Image
          src="/assets/img/element/course-sun.png"
          alt=""
          width={204}
          height={195}
          className="course-sun bob-x d-sm-block d-none"
        />
      </section>
    </>
  );
}
