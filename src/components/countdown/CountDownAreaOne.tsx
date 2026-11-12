"use client";

import Image from "next/image";
import { useT } from "@/i18n/LocaleProvider";


export default function CountDownAreaOne() {
  const t = useT();

  return (
    <>
      <div className="counter-section-one fxi position-relative">
        <div className="counter-wrapper-one z-1">
          <div className="container">
            <div className="counter-grid">
              <div className="counter__items text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="mb-4 mx-auto icon">
                  <Image
                    src="/assets/img/icon/c-icon1.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-auto"
                  />
                </div>
                <div className="content-count">
                  <div className="count-item">
                    <span className="count">2014</span>
                  </div>
                  <p>{t("stats.founded")}</p>
                </div>
              </div>
              <div className="counter__items text-center wow fadeInUp" data-wow-delay=".5s">
                <div className="mb-4 mx-auto icon">
                  <Image
                    src="/assets/img/icon/c-icon2.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-auto"
                  />
                </div>
                <div className="content-count">
                  <div className="count-item">
                    <span className="count">100</span>
                    <span>%</span>
                  </div>
                  <p>{t("stats.cep")}</p>
                </div>
              </div>
              <div className="counter__items text-center wow fadeInUp" data-wow-delay=".7s">
                <div className="mb-4 mx-auto icon">
                  <Image
                    src="/assets/img/icon/c-icon3.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-auto"
                  />
                </div>
                <div className="content-count">
                  <div className="count-item">
                    <span className="count">{t("stats.levels.value")}</span>
                  </div>
                  <p>{t("stats.levels")}</p>
                </div>
              </div>
              <div className="counter__items text-center wow fadeInUp" data-wow-delay=".9s">
                <div className="mb-4 mx-auto icon">
                  <Image
                    src="/assets/img/icon/c-icon4.png"
                    alt=""
                    width={64}
                    height={64}
                    className="w-auto"
                  />
                </div>
                <div className="content-count">
                  <div className="count-item">
                    <span className="count">{t("stats.city.value")}</span>
                  </div>
                  <p>{t("stats.city")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/assets/img/element/count-bg.png"
          alt=""
          width={1920}
          height={336}
          className="count-bg"
        />
        <Image
          src="/assets/img/element/quit.png"
          alt=""
          width={257}
          height={224}
          className="counter-quit updowns"
        />
        <Image
          src="/assets/img/element/rock-ele.png"
          alt=""
          width={125}
          height={231}
          className="rock-ele updowns"
        />
      </div>
    </>
  );
}
