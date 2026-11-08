import Event from "@/components/inner-pages/event/Event";

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Event Citigems Bilingual School",
  description: "Event — Citigems Bilingual School.",
}

export default function EventPage() {
  return (
    <Event />
  )
}
