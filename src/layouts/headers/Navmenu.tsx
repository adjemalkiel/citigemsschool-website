"use client";

import menu_data from "@/data/menu-data";
import { useT } from "@/i18n/LocaleProvider";
import Link from "next/link";


export default function Navmenu() {
  const t = useT();

  return (
    <>
      <ul className="d-none d-xl-block">
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
                <ul className="submenu">
                  {item.sub_menus?.map((sub_item, index) => (
                    <li key={index}>
                      <Link href={sub_item?.link || "#"}>
                        {sub_item.titleKey ? t(sub_item.titleKey) : sub_item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
