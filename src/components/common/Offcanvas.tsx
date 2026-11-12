"use client";

import Image from "next/image";
import MobileMenu from "@/layouts/headers/MobileMenu";
import Link from "next/link";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { useT } from "@/i18n/LocaleProvider";
import { ERP_LOGIN_URL } from "@/i18n/erp";

interface OffCanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}

export default function Offcanvas({
  offCanvasOpen,
  setOffCanvasOpen,
}: OffCanvasProps) {
  const t = useT();

  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${offCanvasOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <Link href="/" className="offcanvas__logo">
                  <Image
                    src="/assets/img/logo/logo-black.png"
                    alt="Citigems Bilingual School"
                    width={157}
                    height={69}
                  />
                </Link>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvasOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <LanguageSwitcher />
              </div>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4 className="fw_600">{t("footer.contactInfo")}</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt fs-five"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" className="fs-eight">
                        Agla Agongbomey, Cotonou
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+2290149678853">01 49 67 88 53</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:citigems2014@gmail.com">
                        <span>citigems2014@gmail.com</span>
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <a
                    href={ERP_LOGIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-2 fs18 fw-semibold overflow-hidden rounded-2"
                  >
                    {t("nav.portal")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`offcanvas__overlay ${offCanvasOpen ? "overlay-open" : ""}`}
        onClick={() => setOffCanvasOpen(false)}
      ></div>
    </>
  );
}
