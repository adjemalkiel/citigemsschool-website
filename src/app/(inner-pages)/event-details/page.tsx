import EventDetails from "@/components/inner-pages/event-details/EventDetails";


import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Event Details Citigems Bilingual School",
  description: "Event Details — Citigems Bilingual School.",
}

export default function EventDetailsPage() {
  return (
    <EventDetails />
  )
}
