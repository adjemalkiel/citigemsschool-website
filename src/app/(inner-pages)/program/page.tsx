import HomeHashRedirect from "@/components/common/HomeHashRedirect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Programmes Citigems : maternelle / Nursery, primaire / Primary et parcours bilingue FR + EN à Cotonou.",
  alternates: { canonical: "https://citigemsschool.com/program" },
  openGraph: {
    title: "Programmes | Citigems Bilingual School",
    description:
      "Maternelle, primaire et bilingue français-anglais à Agla Agongbomey, Cotonou.",
    url: "https://citigemsschool.com/program",
  },
};

export default function ProgramPage() {
  return <HomeHashRedirect hash="programmes" />;
}
