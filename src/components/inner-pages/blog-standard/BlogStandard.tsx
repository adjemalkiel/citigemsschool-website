import BlogStandardArea from "@/components/blog/BlogStandardArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function BlogStandard() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Blog Standard" subtitle="Blog Standard" />
      <BlogStandardArea />
      <FooterFour />
    </Wrapper>
  )
}
