"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";


export default function NewsletterAreaOne() {
  const t = useT();

  return (
    <>
      <section className="newsletter-section section-padding fix">
        <div className="container">
          <div className="row g-3">
            <div className="col-md-6">
              <div className="section-title">
                <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                  {t("news.badge")}
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  {t("news.title")}
                </h2>
              </div>
            </div>
            <div className="col-md-6 ps-lg-4">
              <form action="#" className="from-style1 wow fadeInDown">
                <input type="email" placeholder={t("news.placeholder")} />
                <button type="button" className="common_btn text-nowrap">
                  {t("news.submit")}
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </button>
              </form>
              <p className="mt-lg-3 mt-2 pra-clr">{t("news.note")}</p>
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/footer/news-shape1.png"
          alt=""
          width={145}
          height={104}
          className="news-estrue1 d-lg-block d-none"
        />
        <Image
          src="/assets/img/footer/news-shape2.png"
          alt=""
          width={186}
          height={132}
          className="news-estrue d-lg-block d-none"
        />
      </section>
    </>
  );
}
