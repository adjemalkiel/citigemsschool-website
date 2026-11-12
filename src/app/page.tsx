import HomeOne from "@/components/homes/home-1/HomeOne";
import { Metadata } from "next";
import { SITE_DESC, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} | École bilingue à Cotonou`,
  },
  description: SITE_DESC,
  alternates: { canonical: "https://citigemsschool.com/" },
};

export default function HomePage() {
  return <HomeOne />;
}
