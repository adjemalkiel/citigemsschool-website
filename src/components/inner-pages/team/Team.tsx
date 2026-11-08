import Breadcrumb from "@/components/common/Breadcrumb";
import TeamArea from "@/components/team/TeamArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function Team() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title=" Our Teachers" subtitle=" Our Teachers" />
      <TeamArea />
      <FooterFour />
    </Wrapper>
  )
}
