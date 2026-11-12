import HomeHashRedirect from "@/components/common/HomeHashRedirect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Citigems Bilingual School à Agla Agongbomey, Cotonou — admissions, scolarité, visite de l’école. Tél. 01 49 67 88 53.",
  alternates: { canonical: "https://citigemsschool.com/contact" },
  openGraph: {
    title: "Contact | Citigems Bilingual School",
    description:
      "Admissions et contact — école bilingue à Agla Agongbomey, Cotonou.",
    url: "https://citigemsschool.com/contact",
  },
};

export default function ContactPage() {
  return <HomeHashRedirect hash="contact" />;
}
