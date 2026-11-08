"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




export default function TestimonialAreaThree() {
  return (
    <>
      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section testimonial-section3 position-relative fix space-top">
        <div className="container">
          <div className="step-wise-counter-wrap">
            <div className="counter__items text-center wow fadeInUp" data-wow-delay=".3s">
              <div className="mb-4 mx-auto icon">
                <Image src="/assets/img/child-logo/count-user1.png" alt="Count User" width={64} height={64} />
              </div>
              <div className="content-count">
                <div className="count-item text-dark">
                  <span className="count text-dark">27</span>
                  <span className="text-dark">+</span>
                </div>
                <p className="text-dark fw-medium">
                  Year Of Experience
                </p>
              </div>
            </div>
            <div className="border-in"></div>
            <div className="counter__items text-center wow fadeInUp" data-wow-delay=".5s">
              <div className="mb-4 mx-auto icon">
                <Image src="/assets/img/child-logo/count-user2.png" alt="Count User" width={64} height={64} />
              </div>
              <div className="content-count">
                <div className="count-item text-dark">
                  <span className="count text-dark">6500</span>
                  <span className="text-dark">+</span>
                </div>
                <p className="text-dark fw-medium">
                  ClassclassName Completed
                </p>
              </div>
            </div>
            <div className="border-in"></div>
            <div className="counter__items text-center wow fadeInUp" data-wow-delay=".7s">
              <div className="mb-4 mx-auto icon">
                <Image src="/assets/img/child-logo/count-user3.png" alt="Count User" width={64} height={64} />
              </div>
              <div className="content-count">
                <div className="count-item text-dark">
                  <span className="count text-dark">100</span>
                  <span className="text-dark">+</span>
                </div>
                <p className="text-dark fw-medium">
                  Experts Instructors
                </p>
              </div>
            </div>
            <div className="border-in"></div>
            <div className="counter__items text-center wow fadeInUp" data-wow-delay=".9s">
              <div className="mb-4 mx-auto icon">
                <Image src="/assets/img/child-logo/count-user4.png" alt="Count User" width={64} height={64} />
              </div>
              <div className="content-count">
                <div className="count-item text-dark">
                  <span className="count text-dark">6549</span>
                  <span className="text-dark">+</span>
                </div>
                <p className="text-dark fw-medium">
                  Students Enroll
                </p>
              </div>
            </div>
          </div>
          <div className="section-title text-center mb-48">
            <div className="sub__text-p1 mb-3 wow fadeInUp" data-wow-delay=".3s">
              Our Testimonials
            </div>
            <h2 className="text-dark black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
              Hear From
              <span className="position-relative text-theme title-ele3">
                Happy
                <Image src="/assets/img/element/title-ele3.png" alt="Title Ele" width={160} height={17} />
              </span>
              Families
            </h2>
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
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative pt-4 p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <Image src="/assets/img/element/testimonial-items-bg.png" alt="Testimonial Items Bg" width={419} height={278} />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “Professional and loving care. Our nanny treats Chloe like family and keeps us
                        updated throughout the day.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Emily Johnson</div>
                        <span className="designation">/Mother of Ava</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <Image src="/assets/img/thumbnail/testimonial-small-happy1.png" alt="Testimonial Small Happy" width={48} height={48} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative pt-4 p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <Image src="/assets/img/element/testimonial-items-bg.png" alt="Testimonial Items Bg" width={419} height={278} />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “Professional and loving care. Our nanny treats Chloe like family and keeps us
                        updated throughout the day.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Emily Johnson</div>
                        <span className="designation">/Mother of Ava</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <Image src="/assets/img/thumbnail/testimonial-small-happy1.png" alt="Testimonial Small Happy" width={48} height={48} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative pt-4 p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <Image src="/assets/img/element/testimonial-items-bg.png" alt="Testimonial Items Bg" width={419} height={278} />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “Professional and loving care. Our nanny treats Chloe like family and keeps us
                        updated throughout the day.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Emily Johnson</div>
                        <span className="designation">/Mother of Ava</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <Image src="/assets/img/thumbnail/testimonial-small-happy1.png" alt="Testimonial Small Happy" width={48} height={48} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
       
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card bg-transparent testimonial-card3 position-relative pt-4 p-0">
                  <div className="box-shape position-absolute z-n1 d-xxl-block d-none">
                    <Image src="/assets/img/element/testimonial-items-bg.png" alt="Testimonial Items Bg" width={419} height={278} />
                  </div>
                  <div className="testimonial-single-item">
                    <div className="content p-0">
                      <p className="mb-3">
                        “Professional and loving care. Our nanny treats Chloe like family and keeps us
                        updated throughout the day.”
                      </p>
                      <div className="author-info mb-48">
                        <div className="name">Emily Johnson</div>
                        <span className="designation">/Mother of Ava</span>
                      </div>
                      <div className="text-center">
                        <div className="user-img">
                          <Image src="/assets/img/thumbnail/testimonial-small-happy1.png" alt="Testimonial Small Happy" width={48} height={48} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
         
          </Swiper>
        </div>
        <Image src="/assets/img/element/testimonila-rocket-ele.png" alt="Testimonila Rocket Ele" width={169} height={383} className="position-absolute end-0 bottom-0 me-4 d-sm-block d-none updowns d-sm-block" />
        <Image src="/assets/img/element/quick-rainbow.png" alt="Quick Rainbow" width={208} height={184} className="updowns d-xl-block d-none ranbow-testimonial" />
      </section>
    </>
  )
}
