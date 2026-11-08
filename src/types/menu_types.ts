import { StaticImageData } from "next/image";

export interface MenuItem {
  id: number;
  title: string;
  link?: string;
  has_dropdown?: boolean;
  mega_menu?: boolean;
  demo?: StaticImageData;
  sub_menus?: MenuItem[];
}