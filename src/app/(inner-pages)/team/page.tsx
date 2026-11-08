import Team from "@/components/inner-pages/team/Team";

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Team Citigems Bilingual School",
  description: "Team — Citigems Bilingual School.",
}

export default function TeamPage() {
  return (
    <Team />
  )
}
