import BlogArea from "@/components/blog/BlogArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function Blog() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Blog" subtitle="Our Blog" />
      <BlogArea />
      <FooterFour />
    </Wrapper>
  )
}
