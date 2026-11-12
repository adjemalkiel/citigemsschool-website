import { MenuItem } from "@/types/menu_types";

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Accueil",
    titleKey: "nav.home",
    has_dropdown: false,
    link: "/",
  },
  {
    id: 2,
    title: "À propos",
    titleKey: "nav.about",
    has_dropdown: false,
    link: "/#about",
  },
  {
    id: 3,
    title: "Programmes",
    titleKey: "nav.programmes",
    has_dropdown: false,
    link: "/#programmes",
  },
  {
    id: 4,
    title: "Tarifs",
    titleKey: "nav.fees",
    has_dropdown: false,
    link: "/#fees",
  },
  {
    id: 5,
    title: "Contact",
    titleKey: "nav.contact",
    has_dropdown: false,
    link: "/#contact",
  },
];

export default menu_data;
