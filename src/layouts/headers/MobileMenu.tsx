"use client";
import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function MobileMenu() {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };



  return (
    <>
      <div className="mean-bar">
        <a href="#nav" className="meanmenu-reveal">
          <span>
            <span>
              <span></span>
            </span>
          </span>
        </a>
        <nav className="mean-nav">
          <ul>
            {menu_data.map((item, i) => (
              <li key={i} className={`${item.mega_menu && 'has-dropdown active menu-thumb'} ${item.has_dropdown && 'has-dropdown'}`}>
                <Link href={item?.link || '#'}>
                  {item.title}
                </Link>
                {item.mega_menu &&
                  <ul className="submenu has-homemenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    <li>
                      <div className="homemenu-items">
                        {item.sub_menus?.map((sub_item, index) => (
                          <div className="homemenu" key={index}>
                            <Link href={sub_item?.link || '#'} className="homemenu-thumb d-center px-2">
                              {sub_item?.demo && (
                                <Image src={sub_item.demo} width={258} height={258} alt={`${sub_item.title || "Home"} demo preview`} />
                              )}
                              <span className="demo-button d-center py-2 px-3 p1-bg">
                                <span className="white">{sub_item?.title}</span>
                              </span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </li>
                  </ul>
                }
                {item.has_dropdown &&
                  <ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                    {item.sub_menus?.map((sub_item, index) => (
                      <li key={index}>
                        <Link href={sub_item?.link || '#'}>
                          {sub_item?.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                }
                {item.mega_menu && (
                  <button type="button" className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} onClick={() => openMobileMenu(item.title)} style={{ border: 'none', background: 'transparent' }} aria-label="Expand submenu">
                    <i className="far fa-plus"></i>
                  </button>
                )}
                {item.has_dropdown && (
                  <button type="button" className={`mean-expand ${navTitle === item.title ? "mean-clicked" : ""}`} onClick={() => openMobileMenu(item.title)} style={{ border: 'none', background: 'transparent' }} aria-label="Expand submenu">
                    <i className="far fa-plus"></i>
                  </button>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
