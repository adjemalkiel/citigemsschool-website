import Breadcrumb from "@/components/common/Breadcrumb";
import ProgramArea from "@/components/program/ProgramArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function Program() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Programs" subtitle="Our Programs" />
      <ProgramArea />
      <FooterFour />
    </Wrapper>
  )
}
