"use client";
import menu_data from "@/data/menu-data";
import { useT } from "@/i18n/LocaleProvider";
import Link from "next/link";
import { useState } from "react";


export default function MobileMenu() {
  const t = useT();
  const [navTitle, setNavTitle] = useState("");

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
            {menu_data.map((item, i) => {
              const label = item.titleKey ? t(item.titleKey) : item.title;
              const isExternal = item.external || item.link?.startsWith("http");

              return (
                <li key={i} className={`${item.has_dropdown ? "has-dropdown" : ""}`}>
                  {isExternal ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {label}
                    </a>
                  ) : (
                    <Link href={item?.link || "#"}>{label}</Link>
                  )}
                  {item.has_dropdown && (
                    <ul
                      className="submenu"
                      style={{ display: navTitle === label ? "block" : "none" }}
                    >
                      {item.sub_menus?.map((sub_item, index) => (
                        <li key={index}>
                          <Link href={sub_item?.link || "#"}>
                            {sub_item.titleKey ? t(sub_item.titleKey) : sub_item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.has_dropdown && (
                    <button
                      type="button"
                      className={`mean-expand ${navTitle === label ? "mean-clicked" : ""}`}
                      onClick={() => openMobileMenu(label)}
                      style={{ border: "none", background: "transparent" }}
                      aria-label="Expand submenu"
                    >
                      <i className="far fa-plus"></i>
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
