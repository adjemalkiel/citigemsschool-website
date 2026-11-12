"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import { ERP_LOGIN_URL } from "@/i18n/erp";

export default function FooterOne() {
  const t = useT();

  return (
    <>
      <footer className="footer-section footer-style1 fix">
        <Image
          src="/assets/img/element/babol-parasut.png"
          alt=""
          width={162}
          height={194}
          className="footer-parasut updowns"
        />
        <div className="thumb-shape-top">
          <Image
            src="/assets/img/footer/footer-shape-top.png"
            alt="Footer Shape Top Shape Element"
            width={1920}
            height={63}
            className="w-100 object-fit-cover"
          />
        </div>
        <div className="container">
          <div className="footer-top-area d-flex justify-content-between flex-md-nowrap flex-wrap gap-3 position-relative">
            <div className="footer-top-left">
              <Link href="/" className="footer-logo d-block mb-2">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="Citigems Bilingual School"
                  width={157}
                  height={69}
                />
              </Link>
              <p className="pra white-clr">{t("footer.about")}</p>
            </div>
            <div className="social-wrap01 gap-xl-3 gap-2 d-flex align-items-center">
              <a href="#" className="white sub-font" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="white sub-font" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="white sub-font" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer-line">
            <Image
              src="/assets/img/footer/line-f.png"
              alt="Line F"
              width={1321}
              height={9}
              className="w-100"
            />
          </div>
          <div className="row g-md-4 g-3 justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">{t("footer.location")}</span>
                <a href="/#contact" className="text-break">
                  Agla Agongbomey, Cotonou
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">{t("footer.email")}</span>
                <a href="mailto:citigems2014@gmail.com" className="text-break">
                  citigems2014@gmail.com
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">{t("footer.phone")}</span>
                <a href="tel:+2290149678853" className="text-break">
                  01 49 67 88 53 / 01 94 83 59 22
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">{t("footer.hours")}</span>
                <span className="text-break text-white">
                  {t("footer.hours.value")}
                </span>
              </div>
            </div>
          </div>
          <div className="footer-bottom justify-content-between flex-md-nowrap flex-wrap gap-3">
            <div className="footer-bottom-link d-flex align-items-center flex-wrap">
              <Link href="/">{t("nav.home")}</Link>
              <Link href="/#about">{t("nav.about")}</Link>
              <Link href="/#programmes">{t("nav.programmes")}</Link>
              <Link href="/#fees">{t("nav.fees")}</Link>
              <Link href="/#contact">{t("nav.contact")}</Link>
              <a
                href={ERP_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("nav.portal")}
              </a>
            </div>
            <p className="text-white wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()}{" "}
              <a href="/" className="text-p1">
                Citigems.
              </a>{" "}
              {t("footer.rights")}
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100">
          <Image
            src="/assets/img/footer/footer-shape-bottom.png"
            alt="Footer Shape Bottom Shape Element"
            width={1920}
            height={197}
            className="object-fit-cover w-100"
          />
        </div>
      </footer>
    </>
  );
}
