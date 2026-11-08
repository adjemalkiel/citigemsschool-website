"use client"
import Image from "next/image";
import Link from "next/link";
import Navmenu from "./Navmenu";
import UseSticky from "@/hooks/UseSticky";
import { useState } from "react";
import Offcanvas from "@/components/common/Offcanvas";
import SearchArea from "@/components/common/SearchArea";

export default function HeaderFour() {
  const { sticky } = UseSticky()
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      {/* <!-- Header Top Section Start --> */}
      <div className="header-top-section header-top-section4">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="fas fa-phone p2-clr"></i>
                01 49 67 88 53
              </li>
              <li className="line"></li>
              <li>
                <i className="fa-solid fa-envelope p2-clr"></i>
                <a href="#" className="link">citigems2014@gmail.com</a>
              </li>
            </ul>
            <p className="d-xl-block d-none">
              A Safe, Joyful Place for Early Childhood kinez – <a href="#">Learn More</a>
            </p>
            <div className="header-top-social d-flex align-items-center">
              <a href="#" className="fw-semibold text-white">
                Follow On:
              </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i> </a>
              <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i> </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Header Section Start --> */}
      <header id="header-sticky" className={`header-section header-section-style4 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <Link href="/" className="header-logo">
                <Image src="/assets/img/logo/logo-black.png" alt="Citigems Bilingual School" width={157} height={69} />
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
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <Link href="/contact" className="common_btn d-sm-flex d-none text-nowrap">
                  start learning
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <div className="header__hamburger d-xl-none d-block my-auto">
                  <div className="sidebar__toggle" onClick={() => setOffCanvasOpen(true)}>
                    <Image src="/assets/img/icon/menu.png" alt="Menu" width={512} height={512} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas offCanvasOpen={offCanvasOpen} setOffCanvasOpen={setOffCanvasOpen} />
      <SearchArea setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      

    </>
  )
}
