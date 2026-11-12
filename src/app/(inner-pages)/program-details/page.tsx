import HomeHashRedirect from "@/components/common/HomeHashRedirect";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programmes — Citigems Bilingual School",
  description: "Programmes — Citigems Bilingual School.",
};

export default function ProgramDetailsPage() {
  return <HomeHashRedirect hash="programmes" />;
}
