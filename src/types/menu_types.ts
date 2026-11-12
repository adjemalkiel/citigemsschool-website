import { StaticImageData } from "next/image";
import type { MessageKey } from "@/i18n";

export interface MenuItem {
  id: number;
  title: string;
  titleKey?: MessageKey;
  link?: string;
  has_dropdown?: boolean;
  mega_menu?: boolean;
  external?: boolean;
  demo?: StaticImageData;
  sub_menus?: MenuItem[];
}
