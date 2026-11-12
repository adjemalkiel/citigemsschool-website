import HomeHashRedirect from "@/components/common/HomeHashRedirect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Citigems Bilingual School — école bilingue de la maternelle au CM2 à Agla Agongbomey, Cotonou. Histoire, valeurs C.A.R.E. et 100 % de réussite au CEP.",
  alternates: { canonical: "https://citigemsschool.com/about" },
  openGraph: {
    title: "À propos | Citigems Bilingual School",
    description:
      "École bilingue FR + EN à Agla Agongbomey, Cotonou — maternelle et primaire.",
    url: "https://citigemsschool.com/about",
  },
};

export default function AboutPage() {
  return <HomeHashRedirect hash="about" />;
}
