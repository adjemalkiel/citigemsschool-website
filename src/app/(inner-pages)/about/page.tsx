import About from "@/components/inner-pages/about/About";

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "About Citigems Bilingual School",
  description: "Home One  — Citigems Bilingual School.",
}

export default function AboutPage() {
  return (
    <About />
  )
}
