import AboutAreaTwo from "@/components/about/AboutAreaTwo";
import AboutAreaTwo2 from "@/components/about/AboutAreaTwo2";
import BlogAreaTwo from "@/components/blog/BlogAreaTwo";
import BrandAreaTwo from "@/components/brand/BrandAreaTwo";
import GalleryAreaTwo from "@/components/gallery/GalleryAreaTwo";
import HeroAreaTwo from "@/components/hero/HeroAreaTwo";
import LearningAreaTwo from "@/components/learning/LearningAreaTwo";
import NewsletterAreaTwo from "@/components/Newsletter/NewsletterAreaTwo";
import PricingAreaTwo from "@/components/pricing/PricingAreaTwo";
import ProgramAreaTwo from "@/components/program/ProgramAreaTwo";
import TestimonialAreaTwo from "@/components/testimonial/TestimonialAreaTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import Wrapper from "@/layouts/Wrapper";


export default function HomeTwo() {
  return (
    <Wrapper>
      <HeaderTwo />
      <HeroAreaTwo />
      <AboutAreaTwo />
      <AboutAreaTwo2 />
      <ProgramAreaTwo />
      <PricingAreaTwo />
      <BrandAreaTwo />
      <TestimonialAreaTwo />
      <GalleryAreaTwo />
      <LearningAreaTwo />
      <BlogAreaTwo />
      <NewsletterAreaTwo />
      <FooterTwo />    
    </Wrapper>
  )
}
