"use client";
import Image from "next/image";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";
import SearchArea from "@/components/common/SearchArea";


export default function HeaderTwo() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section top-0 header-style1 header-style2 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="header-logo">
                <Image src="/assets/img/logo/logo.png" alt="Citigems Bilingual School" width={157} height={69} />
              </Link>
              <div className="mean__menu-wrapper">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <Navmenu />
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <button type="button" onClick={() => setSearchOpen(true)} className="search-trigger d-center rounded-circle search-icon border-0 p-0" aria-label="Search">
                  <i className="fa-solid fa-magnifying-glass fs-6 text-white"></i>
                </button>
                <Link href="/#contact" className="common_btn d-sm-flex d-none text-nowrap">
                  start learning
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <div className="header__hamburger d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <Image src="/assets/img/icon/menu.png" alt="Menu" width={512} height={512} className="filter-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/header-bg2.png" alt="Header Bg" width={1920} height={107} className="header-bg" />
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
                  <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      

    </>
  )
}
