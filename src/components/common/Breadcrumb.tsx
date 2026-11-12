"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";

interface BreadcrumbProps {
  title: string;
  subtitle: string;
}

export default function Breadcrumb({ title, subtitle }: BreadcrumbProps) {
  const t = useT();

  return (
    <section className="banner-breadcrumb-section fix position-relative">
      <div className="container">
        <div className="breadcrumb-content">
          <h1 className="text-center">{title}</h1>
          <ul className="bread-link">
            <li>
              <Link href="/">{t("nav.home")}</Link>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>{subtitle}</li>
          </ul>
        </div>
      </div>
      <Image
        src="/assets/img/breadcrumb/bread-ele5.png"
        alt=""
        width={122}
        height={104}
        className="bread-ele5 d-lg-block d-none zoom-in"
      />
      <Image
        src="/assets/img/breadcrumb/bread-ele4.png"
        alt=""
        width={97}
        height={73}
        className="bread-ele4 d-xl-block d-none zoom-in"
      />
      <Image
        src="/assets/img/breadcrumb/bread-ele3.png"
        alt=""
        width={91}
        height={84}
        className="bread-ele3 d-md-block d-none zoom-in"
      />
      <Image
        src="/assets/img/breadcrumb/bread-ele2.png"
        alt=""
        width={86}
        height={81}
        className="bread-ele2 d-xxl-block d-none updowns"
      />
      <Image
        src="/assets/img/breadcrumb/bread-ele1.png"
        alt=""
        width={132}
        height={168}
        className="bread-ele1 updowns"
      />
      <Image
        src="/assets/img/element/break-shape.png"
        alt=""
        width={1920}
        height={231}
        className="bread-shape"
      />
    </section>
  );
}
