import Breadcrumb from "@/components/common/Breadcrumb";
import PricingAreaThree from "@/components/pricing/PricingAreaThree";
import TestimonialArea from "@/components/testimonial/TestimonialArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";



export default function Testimonial() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Testimonial" subtitle="Testimonial" />
      <TestimonialArea />
       <PricingAreaThree style_2={true} />
      <FooterFour />
    </Wrapper>
  )
}
