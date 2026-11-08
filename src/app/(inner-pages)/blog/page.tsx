import Blog from "@/components/inner-pages/blog/Blog";

import { Metadata } from "next"
export const metadata: Metadata = {
  title: "Blog Citigems Bilingual School",
  description: "Blog — Citigems Bilingual School.",
}

export default function Blogpage() {
  return (
    <Blog />
  )
}
