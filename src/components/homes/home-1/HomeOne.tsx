import ChooseAreaOne from "@/components/choose/ChooseAreaOne";
import ChooseAreaOne2 from "@/components/choose/ChooseAreaOne2";
import CountDownAreaOne from "@/components/countdown/CountDownAreaOne";
import CoursesAreaOne from "@/components/courses/CoursesAreaOne";
import CtaAreaOne from "@/components/cta/CtaAreaOne";
import HeroAreaOne from "@/components/hero/HeroAreaOne";
import PricingAreaThree from "@/components/pricing/PricingAreaThree";
import ProgramAreaOne from "@/components/program/ProgramAreaOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";


export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroAreaOne />
      <div id="about">
        <ProgramAreaOne />
        <ChooseAreaOne />
        <ChooseAreaOne2 />
      </div>
      <div id="programmes">
        <CoursesAreaOne />
      </div>
      <div id="fees">
        <PricingAreaThree />
      </div>
      <CountDownAreaOne />
      <div id="contact">
        <CtaAreaOne />
      </div>
      <FooterOne />
    </Wrapper>
  );
}
