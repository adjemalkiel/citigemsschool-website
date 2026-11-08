import Breadcrumb from "@/components/common/Breadcrumb";
import EventArea from "@/components/event/EventArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function Event() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Event" subtitle="Our Event" />
      <EventArea />
      <FooterFour />
    </Wrapper>
  )
}
