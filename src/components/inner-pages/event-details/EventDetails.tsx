import Breadcrumb from "@/components/common/Breadcrumb";
import EventDetailsArea from "@/components/event/EventDetailsArea";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function EventDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Event Details" subtitle="Event Details" />
      <EventDetailsArea />
      <FooterFour />
    </Wrapper>
  )
}
