import menu_data from "@/data/menu-data";
import Image from "next/image";
import Link from "next/link";


export default function Navmenu() {
  return (
    <>
      <ul className="d-none d-xl-block">
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.mega_menu && 'has-dropdown active menu-thumb'} ${item.has_dropdown && 'has-dropdown'}`}>
            <Link href={item?.link || '#'}>
              {item.title} {' '}
              {item.mega_menu && <i className="fas fa-angle-down"></i>}
              {item.has_dropdown && <i className="fas fa-angle-down"></i>}
            </Link>
            {item.mega_menu &&
              <ul className="submenu has-homemenu">
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
              <ul className="submenu">
                {item.sub_menus && item.sub_menus.map((sub_item, index) => (
                  <li key={index}>
                    <Link href={sub_item?.link || '#'}>{sub_item.title}</Link>
                  </li>
                ))}
                </ul>
            }
          </li>
        ))}
      </ul>
    </>
  )
}
