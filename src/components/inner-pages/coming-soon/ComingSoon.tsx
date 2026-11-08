"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import HeaderFour from "@/layouts/headers/HeaderFour";
import Wrapper from "@/layouts/Wrapper";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // 7 days from now
    const targetDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <Wrapper>
      <HeaderFour />

      <section className="comming-soon-section section-padding fix h-100 d-center">
        <div className="container">
          <div className="col-lg-12">
            <div className="comming-soon-wrap">
              <div className="evento-info p-0">
                <div
                  className="text-center wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <Image src="/assets/img/logo/logo-black.png" alt="Citigems Bilingual School" width={157} height={69} />
                </div>

                <div
                  className="fs-24px mb-4 wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  OUR WEBSITE IS UNDER CONSTRUCTION
                </div>

                <h2
                  className="mb-xl-5 mb-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  COMING <span className="text-theme">SOON!</span>
                </h2>

                <div className="countdown-container mb-48">
                  <div className="time-box d-center">
                    <div className="box">
                      <span>{formatTime(timeLeft.days)}</span>
                      <p>Days</p>
                    </div>
                  </div>

                  <div className="separator"></div>

                  <div className="time-box d-center">
                    <div className="box">
                      <span>{formatTime(timeLeft.hours)}</span>
                      <p>Hours</p>
                    </div>
                  </div>

                  <div className="separator"></div>

                  <div className="time-box d-center">
                    <div className="box">
                      <span>{formatTime(timeLeft.minutes)}</span>
                      <p>Minutes</p>
                    </div>
                  </div>

                  <div className="separator"></div>

                  <div className="time-box d-center">
                    <div className="box">
                      <span>{formatTime(timeLeft.seconds)}</span>
                      <p>Seconds</p>
                    </div>
                  </div>
                </div>

                <form
                  action="#"
                  className="from-style1 mb-4 wow fadeInDown"
                >
                  <input
                    type="email"
                    placeholder="Enter your email..."
                  />

                  <button
                    type="button"
                    className="common_btn text-nowrap"
                  >
                    SUBSCRIBE NOW

                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </button>
                </form>

                <div className="header-top-social justify-content-center d-flex align-items-center">
                  <a href="#" className="fw-semibold text-dark">
                    Follow On:
                  </a>

                  <a href="#" className="icon sub-font">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>

                  <a href="#" className="icon sub-font">
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a href="#" className="icon sub-font">
                    <i className="fa-brands fa-instagram"></i>
                  </a>

                  <a href="#" className="icon sub-font">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}