import HomeOne from "@/components/homes/home-1/HomeOne"
import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Citigems Bilingual School",
  description: "Home One  — Citigems Bilingual School.",
}

export default function HomePage() {
  return (
    <HomeOne />
  )
}
