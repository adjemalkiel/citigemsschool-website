import { MenuItem } from "@/types/menu_types";

import demo_img_1 from "../../public/assets/img/banner/hero-demo1.png";
import demo_img_2 from "../../public/assets/img/banner/hero-demo2.png";
import demo_img_3 from "../../public/assets/img/banner/hero-demo3.png";


const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    mega_menu: true,
    sub_menus: [
      {
        id: 11,
        title: "Home 01",
        link: "/",
        demo: demo_img_1,
      },
      {
        id: 12,
        title: "Home 02",
        link: "/home-2",
        demo: demo_img_2,
      },
      {
        id: 13,
        title: "Home 03",
        link: "/home-3",
        demo: demo_img_3,
      },
    ],
  },

  {
    id: 2,
    title: "About Us",
    has_dropdown: false,
    link: "/about",
  },

  {
    id: 3,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        id: 31,
        title: "About",
        link: "/about",
      },
      {
        id: 32,
        title: "Team",
        link: "/team",
      },
      {
        id: 33,
        title: "Team Details",
        link: "/team-details",
      },
      {
        id: 34,
        title: "Testimonial",
        link: "/testimonial",
      },
      {
        id: 35,
        title: "Error 404",
        link: "/error",
      },
      {
        id: 36,
        title: "Coming Soon",
        link: "/coming-soon",
      },
    ],
  },

  {
    id: 4,
    title: "Programs",
     link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        id: 41,
        title: "Programs",
        link: "/program",
      },
      {
        id: 42,
        title: "Programs Details",
        link: "/program-details",
      },
      {
        id: 43,
        title: "Event",
        link: "/event",
      },
      {
        id: 44,
        title: "Event Details",
        link: "/event-details",
      },
    ],
  },

  {
    id: 5,
    title: "Blog",
     link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        id: 51,
        title: "Blog",
        link: "/blog",
      },
      {
        id: 52,
        title: "Blog Standard",
        link: "/blog-standard",
      },
      {
        id: 53,
        title: "Blog Details",
        link: "/blog-details",
      },
    ],
  },

  {
    id: 6,
    title: "Contact Us",
    has_dropdown: false,
    link: "/contact",
  },

  {
    id: 7,
    title: "Espace parents",
    has_dropdown: false,
    link: "https://cs.devopsflows.com/login?redirect-to=/edu-portal",
  },
];

export default menu_data;