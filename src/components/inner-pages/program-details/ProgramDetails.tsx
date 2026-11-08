import Breadcrumb from "@/components/common/Breadcrumb";
import ProgramDetailsArea from "@/components/program/ProgramDetailsArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function ProgramDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Program Details" subtitle="Program Details" />
      <ProgramDetailsArea />
      <FooterFour />
    </Wrapper>
  )
}
