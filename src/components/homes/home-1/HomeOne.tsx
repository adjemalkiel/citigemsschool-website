import BlogAreaOne from "@/components/blog/BlogAreaOne";
import BrandAreaOne from "@/components/brand/BrandAreaOne";
import ChooseAreaOne from "@/components/choose/ChooseAreaOne";
import ChooseAreaOne2 from "@/components/choose/ChooseAreaOne2";
import CountDownAreaOne from "@/components/countdown/CountDownAreaOne";
import CoursesAreaOne from "@/components/courses/CoursesAreaOne";
import CtaAreaOne from "@/components/cta/CtaAreaOne";
import HeroAreaOne from "@/components/hero/HeroAreaOne";
import NewsletterAreaOne from "@/components/Newsletter/NewsletterAreaOne";
import ProgramAreaOne from "@/components/program/ProgramAreaOne";
import TeamAreaOne from "@/components/team/TeamAreaOne";
import TestimonialAreaOne from "@/components/testimonial/TestimonialAreaOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";


export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroAreaOne />
      <ProgramAreaOne />
      <ChooseAreaOne />
      <CoursesAreaOne />
      <ChooseAreaOne2 />
      <TeamAreaOne />
      <CountDownAreaOne />
      <TestimonialAreaOne />
      <BrandAreaOne />
      <CtaAreaOne />
      <BlogAreaOne />
      <NewsletterAreaOne />
      <FooterOne />
    </Wrapper>
  )
}
