import AboutAreaThree from "@/components/about/AboutAreaThree";
import BlogAreaThree from "@/components/blog/BlogAreaThree";
import CoursesAreaThree from "@/components/courses/CoursesAreaThree";
import EventAreaThree from "@/components/event/EventAreaThree";
import HeroAreaThree from "@/components/hero/HeroAreaThree";
import LearningAreaThree from "@/components/learning/LearningAreaThree";
import PricingAreaThree from "@/components/pricing/PricingAreaThree";
import ServiceAreaThree from "@/components/service/ServiceAreaThree";
import TestimonialAreaThree from "@/components/testimonial/TestimonialAreaThree";
import FooterThree from "@/layouts/footers/FooterThree";
import HeaderThree from "@/layouts/headers/HeaderThree";
import Wrapper from "@/layouts/Wrapper";

export default function HomeThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <HeroAreaThree />
      <AboutAreaThree />
      <CoursesAreaThree />
      <ServiceAreaThree />
      <EventAreaThree />
      <PricingAreaThree />
      <TestimonialAreaThree />
      <BlogAreaThree />
      <LearningAreaThree />
      <FooterThree />
    </Wrapper>
  )
}
