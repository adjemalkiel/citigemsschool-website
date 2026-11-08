import BlogDetailsArea from "@/components/blog/BlogDetailsArea";
import Breadcrumb from "@/components/common/Breadcrumb";
import FooterFour from "@/layouts/footers/FooterFour";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

export default function BlogDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterFour />
    </Wrapper>
  )
}
