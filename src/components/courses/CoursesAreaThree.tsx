"use client";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";



export default function CoursesAreaThree() {
  return (
    <>
      {/* <!-- Courses Section Start --> */}
      <section className="courses-section4 section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="sub__warning  mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Our Classes
                </div>
                <h2 className="text-white black fw-bold d-block">
                  Our
                  <span className="position-relative text-theme03 title-ele3">
                    Childcare
                    <Image src="/assets/img/element/title-ele3.png" alt="Title Ele" width={160} height={17} />
                  </span>
                  Programs
                </h2>
              </div>
            </div>
            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
              <button className="array-prev position-relative w-auto h-auto p-0 bg-transparent border-0">
                <span className="array-bg d-center">
                  <i className="fa-solid fa-angle-left"></i>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M56 36.986C56 52.45 42.8658 56 27.6147 56C12.3635 56 0 43.464 0 28C0 12.536 12.3635 0 27.6147 0C42.8658 0 56 21.5221 56 36.986Z"
                      fill="#F4F4F4" />
                  </svg>
                </span>
              </button>
              <button className="array-next w-auto h-auto p-0 bg-transparent border-0">
                <span className="array-bg d-center active">
                  <i className="fa-solid fa-angle-right"></i>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M56 36.986C56 52.45 42.8658 56 27.6147 56C12.3635 56 0 43.464 0 28C0 12.536 12.3635 0 27.6147 0C42.8658 0 56 21.5221 56 36.986Z"
                      fill="#F4F4F4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
          <Swiper 
          loop={true}
            speed={1500}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".dot",
              clickable: true,
            }}
            navigation={{
              nextEl: ".array-prev",
              prevEl: ".array-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              1199: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              },
            }}
          className="swiper testimonial-slider space-bottom">
           
              <SwiperSlide className="swiper-slide">
                <div className="cources-single-items class-program_items4">
                  <Image src="/assets/img/element/class-bg4.png" alt="Class Bg" width={419} height={478} className="cources-bg" />
                  <Link href="/program-details"
                    className="c-image mb-3 position-relative overflow-hidden rounded">
                    <Image src="/assets/img/blog/class-program1.png" alt="Blog Post Class Program" width={371} height={224} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <h3 className="mb-1 lh-1">
                      <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                        Infant Care
                      </Link>
                    </h3>
                    <p className="mb-3">
                      Gentle, attentive care focused on comfort, bonding, sensory play.
                    </p>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="time-management mt-4 d-flex align-items-center justify-content-between gap-xxl-4 gap-xl-3 gap-2">
                      <div className="box_in bg1 text-center w-100">
                        <h4>
                          Age <br />
                          <small>(0–2) Years</small>
                        </h4>
                      </div>
                      <div className="box_in bg2 text-center w-100">
                        <h4>
                          Weekly <br />
                          <small>5 Days</small>
                        </h4>
                      </div>
                      <div className="box_in bg3 text-center w-100">
                        <h4>
                          Time <br />
                          <small>4:30 Hors</small>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="cources-single-items class-program_items4">
                  <Image src="/assets/img/element/class-bg4.png" alt="Class Bg" width={419} height={478} className="cources-bg" />
                  <Link href="/program-details"
                    className="c-image mb-3 position-relative overflow-hidden rounded">
                    <Image src="/assets/img/blog/class-program2.png" alt="Blog Post Class Program" width={371} height={224} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <h3 className="mb-1 lh-1">
                      <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                        Toddler Care
                      </Link>
                    </h3>
                    <p className="mb-3">
                      Engaging play-based activities that build early learning, communication.
                    </p>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="time-management mt-4 d-flex align-items-center justify-content-between gap-xxl-4 gap-xl-3 gap-2">
                      <div className="box_in bg1 text-center w-100">
                        <h4>
                          Age <br />
                          <small>(0–3) Years</small>
                        </h4>
                      </div>
                      <div className="box_in bg2 text-center w-100">
                        <h4>
                          Weekly <br />
                          <small>4 Days</small>
                        </h4>
                      </div>
                      <div className="box_in bg3 text-center w-100">
                        <h4>
                          Time <br />
                          <small>4:30 Hors</small>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="cources-single-items class-program_items4">
                  <Image src="/assets/img/element/class-bg4.png" alt="Class Bg" width={419} height={478} className="cources-bg" />
                  <Link href="/program-details"
                    className="c-image mb-3 position-relative overflow-hidden rounded">
                    <Image src="/assets/img/blog/class-program3.png" alt="Blog Post Class Program" width={371} height={224} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <h3 className="mb-1 lh-1">
                      <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                        Preschool Preparation
                      </Link>
                    </h3>
                    <p className="mb-3">
                      Early literacy, numbers, creativity, structured learning to prepare.
                    </p>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="time-management mt-4 d-flex align-items-center justify-content-between gap-xxl-4 gap-xl-3 gap-2">
                      <div className="box_in bg1 text-center w-100">
                        <h4>
                          Age <br />
                          <small>(02) Years</small>
                        </h4>
                      </div>
                      <div className="box_in bg2 text-center w-100">
                        <h4>
                          Weekly <br />
                          <small>05 Days</small>
                        </h4>
                      </div>
                      <div className="box_in bg3 text-center w-100">
                        <h4>
                          Time <br />
                          <small>4:30 Hors</small>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
  
          </Swiper>
        </div>
      </section>
    </>
  )
}
