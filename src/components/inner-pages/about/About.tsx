import BlogAreaThree from "@/components/blog/BlogAreaThree";
import ChooseAreaOne from "@/components/choose/ChooseAreaOne";
import Breadcrumb from "@/components/common/Breadcrumb";
import LearningAreaThree from "@/components/learning/LearningAreaThree";
import PricingAreaThree from "@/components/pricing/PricingAreaThree";
import ProgramAreaOne from "@/components/program/ProgramAreaOne";
import ProgressAreaAbout from "@/components/progress/ProgressAreaAbout";
import TestimonialAreaThree from "@/components/testimonial/TestimonialAreaThree";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function About() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <ProgramAreaOne style_2={true} />
      <ChooseAreaOne />
      <ProgressAreaAbout />
      <PricingAreaThree />
      <TestimonialAreaThree />
      <BlogAreaThree />
      <LearningAreaThree />
      <FooterFour />
    </Wrapper>
  )
}
