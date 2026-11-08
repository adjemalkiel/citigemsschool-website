import Breadcrumb from "@/components/common/Breadcrumb";
import TeamDetailsArea from "@/components/team/TeamDetailsArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";


export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Teacher Details" subtitle="Teacher Details" />
      <TeamDetailsArea />
      <FooterFour />
    </Wrapper>
  )
}
