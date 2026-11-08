import Breadcrumb from "@/components/common/Breadcrumb";
import ContactArea from "@/components/contact/ContactArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";


export default function Contact() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactArea />
      <FooterFour />
    </Wrapper>
  )
}
