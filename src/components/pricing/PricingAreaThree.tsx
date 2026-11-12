"use client";

import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

interface PricingAreaThreeProps {
  style_2?: boolean;
}

const plans: {
  delay: string;
  titleKey: MessageKey;
  priceKey: MessageKey;
  fromKey?: MessageKey;
  featureKeys: MessageKey[];
}[] = [
  {
    delay: "0.3s",
    titleKey: "fees.pre.title",
    priceKey: "fees.pre.price",
    featureKeys: ["fees.pre.f1", "fees.pre.f2", "fees.pre.f3"],
  },
  {
    delay: "0.5s",
    titleKey: "fees.nur.title",
    priceKey: "fees.nur.price",
    featureKeys: ["fees.nur.f1", "fees.nur.f2", "fees.nur.f3"],
  },
  {
    delay: "0.7s",
    titleKey: "fees.pri.title",
    priceKey: "fees.pri.price",
    fromKey: "fees.pri.from",
    featureKeys: ["fees.pri.f1", "fees.pri.f2", "fees.pri.f3"],
  },
];

export default function PricingAreaThree({ style_2 }: PricingAreaThreeProps) {
  const t = useT();

  return (
    <section
      className={`pricing-plan-section3 section-padding fix ${style_2 ? "bg-similar-testi" : ""}`}
    >
      <div className="container pb-lg-2 pb-4">
        <div className="section-title-area align-items-end mb-48">
          <div className="section-title-areas">
            <div className="section-title">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                {t("fees.badge")}
              </div>
              <h2 className="black fw-bold d-block">{t("fees.title")}</h2>
            </div>
          </div>
          <div>
            <Link href="/#contact" className="common_btn text-nowrap">
              {t("fees.cta")}
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>
        <div className="row g-4 align-items-stretch">
          {plans.map((plan) => (
            <div className="col-sm-6 col-lg-4 d-flex" key={plan.titleKey}>
              <div
                className="pricing-pln__items style1 wow fadeInUp"
                data-wow-delay={plan.delay}
              >
                <div className="boxes">
                  <div className="head text-center">
                    <h3>{t(plan.titleKey)}</h3>
                  </div>
                  <div className="unit-prices">
                    <p className={`fees-from${plan.fromKey ? "" : " is-empty"}`}>
                      {plan.fromKey ? t(plan.fromKey) : "\u00a0"}
                    </p>
                    <div className="fees-price">
                      <span className="fees-price__value">{t(plan.priceKey)}</span>
                      <span className="fees-price__meta">
                        {t("fees.currency")}
                        <small>{t("fees.period")}</small>
                      </span>
                    </div>
                  </div>
                  <div className="pricing-pln__features">
                    {plan.featureKeys.map((key) => (
                      <div className="fees-feature" key={key}>
                        <Image
                          src="/assets/img/icon/check-badge.png"
                          alt=""
                          width={16}
                          height={16}
                        />
                        <span>{t(key)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="fees-cta">
                    <Link
                      href="/#contact"
                      className="common_btn common_btn_outline text-nowrap"
                    >
                      {t("fees.choose")}
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
