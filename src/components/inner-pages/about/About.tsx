"use client";

import AboutOverview from "@/components/about/AboutOverview";
import Breadcrumb from "@/components/common/Breadcrumb";
import CtaAreaOne from "@/components/cta/CtaAreaOne";
import PricingAreaThree from "@/components/pricing/PricingAreaThree";
import { useT } from "@/i18n/LocaleProvider";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";

export default function About() {
  const t = useT();

  return (
    <Wrapper>
      <HeaderOne />
      <Breadcrumb title={t("page.about.crumb")} subtitle={t("page.about.crumb")} />
      <div id="about">
        <AboutOverview />
      </div>
      <div id="fees">
        <PricingAreaThree />
      </div>
      <div id="contact">
        <CtaAreaOne />
      </div>
      <FooterOne />
    </Wrapper>
  );
}
