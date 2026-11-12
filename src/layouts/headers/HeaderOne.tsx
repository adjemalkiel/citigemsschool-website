"use client";
import Image from "next/image";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "@/components/common/Offcanvas";
import { useState } from "react";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";
import { useT } from "@/i18n/LocaleProvider";
import { ERP_LOGIN_URL } from "@/i18n/erp";

export default function HeaderOne() {
  const { sticky } = UseSticky();
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const t = useT();

  return (
    <>
      <div className="header-top-section header-top-home1">
        <div className="container">
          <div className="header-top-wrapper header-top-home1__row">
            <ul className="contact-list header-top-home1__contact">
              <li>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <a href="tel:+2290149678853" className="link">
                  {t("header.phone")}
                </a>
              </li>
              <li className="line" aria-hidden="true"></li>
              <li>
                <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                <a href="mailto:citigems2014@gmail.com" className="link">
                  {t("header.email")}
                </a>
              </li>
              <li className="line d-none d-xl-inline-block" aria-hidden="true"></li>
              <li className="d-none d-xl-inline-flex">
                <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                <span>{t("header.location")}</span>
              </li>
            </ul>

            <div className="header-top-social header-top-home1__social d-flex align-items-center">
              <span className="header-top-home1__follow d-none d-lg-inline">
                {t("brand.follow")}
              </span>
              <a href="#" className="icon sub-font" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon sub-font" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#" className="icon sub-font" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <LanguageSwitcher className="header-lang header-lang--on-gold" />
            </div>
          </div>
        </div>
      </div>

      <header
        id="header-sticky"
        className={`header-section header-style1 header-style1--brand ${sticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="header-logo header-logo--plate">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="Citigems Bilingual School"
                  width={786}
                  height={344}
                  quality={100}
                  priority
                  sizes="(max-width: 1399px) 168px, 210px"
                  className="header-logo__img"
                />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu" aria-label="Primary">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <a
                  href={ERP_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="common_btn text-nowrap"
                >
                  {t("nav.portal")}
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </a>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div
                    className="sidebar__toggle"
                    onClick={() => setOffCanvasOpen(true)}
                  >
                    <Image
                      src="/assets/img/icon/menu.png"
                      alt="Menu"
                      width={36}
                      height={36}
                      className="filter-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas
        offCanvasOpen={offCanvasOpen}
        setOffCanvasOpen={setOffCanvasOpen}
      />
    </>
  );
}
