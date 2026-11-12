"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";
import type { MessageKey } from "@/i18n";

interface ProgramAreaOneProps {
  style_2?: boolean;
}

const careCards: {
  style: string;
  delay: string;
  icon: string;
  titleKey: MessageKey;
  descKey: MessageKey;
  fill: string;
}[] = [
  {
    style: "style1",
    delay: "0.3s",
    icon: "/assets/img/icon/program-icon1.png",
    titleKey: "care.care",
    descKey: "care.care.desc",
    fill: "#FDECEC",
  },
  {
    style: "style2",
    delay: "0.6s",
    icon: "/assets/img/icon/program-icon2.png",
    titleKey: "care.accountability",
    descKey: "care.accountability.desc",
    fill: "#FFF6C8",
  },
  {
    style: "style3",
    delay: "0.9s",
    icon: "/assets/img/icon/program-icon3.png",
    titleKey: "care.respect",
    descKey: "care.respect.desc",
    fill: "#FFF8EE",
  },
  {
    style: "style4",
    delay: "1s",
    icon: "/assets/img/icon/program-icon4.png",
    titleKey: "care.excellence",
    descKey: "care.excellence.desc",
    fill: "#FFE4E6",
  },
];

export default function ProgramAreaOne({ style_2 }: ProgramAreaOneProps) {
  const t = useT();

  return (
    <>
      <div className={`program-history-section fix  ${style_2 ? "mt-5" : "space-top"} `}>
        <Image
          src="/assets/img/element/histore-left.png"
          alt=""
          width={204}
          height={188}
          className="histore-ele position-absolute top-0 start-0 updowns"
        />
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {careCards.map((card) => (
              <div className="col-12 col-sm-6 col-lg-3 d-flex" key={card.titleKey}>
                <div
                  className={`program-item-wrap ${card.style} wow fadeInUp w-100`}
                  data-wow-delay={card.delay}
                  style={{ backgroundColor: card.fill }}
                >
                  <div className="program-items text-center">
                    <div className="thumb">
                      <Image
                        src={card.icon}
                        alt=""
                        width={88}
                        height={88}
                        quality={100}
                        unoptimized
                      />
                    </div>
                    <div className="cont">
                      <div className="mb-0 preschool-title">{t(card.titleKey)}</div>
                      <p className="mt-2 mb-0">{t(card.descKey)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
