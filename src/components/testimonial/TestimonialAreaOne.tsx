"use client";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




export default function TestimonialAreaOne() {
  return (
    <>
      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section position-relative fix space-top">
        <div className="container">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                  Our Testimonials
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  Loved by Parents, Enjoyed by Kids
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
            <div className="testimonial-card testimonial_cart-hover">
              <div className="icon-border">
                <svg width="648" height="310" viewBox="0 0 648 310" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.362 20.9564C140.248 -18.1028 560.943 9.15527 613.423 48.9367C665.903 88.7182 653.339 280.214 587.525 300.227C521.711 320.24 72.0357 299.371 29.9078 263.157C-12.2202 226.942 -7.11261 44.5363 48.362 20.9564Z"
                    stroke="#C7C7CA" strokeWidth="4" strokeMiterlimit="10"
                    strokeDasharray="5.09 5.09" />
                </svg>
              </div>
              <div className="icon-bg">
                <svg width="624" viewBox="0 0 624 301" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.8462 35.3305C120.371 -9.84138 528.803 -10.3211 582.748 26.0373C636.681 62.4068 640.281 254.964 578.36 279.341C516.439 303.729 80.5527 312.509 36.8965 279.029C-6.74711 245.56 -16.786 62.5964 34.8462 35.3305Z"
                    fill="#FFF0E8" />
                </svg>
              </div>
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <Image src="/assets/img/thumbnail/test-clip1.png" alt="Test Clip" width={77} height={77} />
                    <div className="img-border">
                      <svg width="77" height="77" viewBox="0 0 77 77" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M37.8857 0.75C47.9931 0.750132 57.5325 7.86429 64.5928 17.7637C71.6408 27.646 76.0781 40.1197 76.0781 50.4893C76.0781 55.6577 74.9756 59.7818 73.0391 63.0693C71.1031 66.3559 68.3068 68.8516 64.8467 70.7227C57.8972 74.4805 48.3185 75.6943 37.8857 75.6943C17.3828 75.6943 0.75023 58.9241 0.75 38.2227C0.75 17.521 17.3826 0.75 37.8857 0.75Z"
                          stroke="#C7C7CA" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “A wonderful school with caring teachers. The admission process was smooth, and my
                    child feels safe and
                    happy every day.”
                  </p>
                  <div className="author-info">
                    <div className="name">Sarah Thompson</div>
                    <span className="designation">/ Student Mother</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
              <div className="icon-border">
                <svg width="648" height="310" viewBox="0 0 648 310" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.362 20.9564C140.248 -18.1028 560.943 9.15527 613.423 48.9367C665.903 88.7182 653.339 280.214 587.525 300.227C521.711 320.24 72.0357 299.371 29.9078 263.157C-12.2202 226.942 -7.11261 44.5363 48.362 20.9564Z"
                    stroke="#C7C7CA" strokeWidth="4" strokeMiterlimit="10"
                    strokeDasharray="5.09 5.09" />
                </svg>
              </div>
              <div className="icon-bg">
                <svg width="624" height="500" viewBox="0 0 624 301" fill="none">
                  <path
                    d="M34.8462 35.3305C120.371 -9.84138 528.803 -10.3211 582.748 26.0373C636.681 62.4068 640.281 254.964 578.36 279.341C516.439 303.729 80.5527 312.509 36.8965 279.029C-6.74711 245.56 -16.786 62.5964 34.8462 35.3305Z"
                    fill="#FFF0E8" />
                </svg>
              </div>
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <Image src="/assets/img/thumbnail/test-clip2.png" alt="Test Clip" width={77} height={77} />
                    <div className="img-border">
                      <svg width="77" height="77" viewBox="0 0 77 77" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M37.8857 0.75C47.9931 0.750132 57.5325 7.86429 64.5928 17.7637C71.6408 27.646 76.0781 40.1197 76.0781 50.4893C76.0781 55.6577 74.9756 59.7818 73.0391 63.0693C71.1031 66.3559 68.3068 68.8516 64.8467 70.7227C57.8972 74.4805 48.3185 75.6943 37.8857 75.6943C17.3828 75.6943 0.75023 58.9241 0.75 38.2227C0.75 17.521 17.3826 0.75 37.8857 0.75Z"
                          stroke="#C7C7CA" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “Safe, fun, and educational environment. Teachers are patient and understanding.
                    We’re grateful for this school.”
                  </p>
                  <div className="author-info">
                    <div className="name">Rebecca Miller</div>
                    <span className="designation">/ Student Mather</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
              <div className="icon-border">
                <svg width="648" height="310" viewBox="0 0 648 310" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.362 20.9564C140.248 -18.1028 560.943 9.15527 613.423 48.9367C665.903 88.7182 653.339 280.214 587.525 300.227C521.711 320.24 72.0357 299.371 29.9078 263.157C-12.2202 226.942 -7.11261 44.5363 48.362 20.9564Z"
                    stroke="#C7C7CA" strokeWidth="4" strokeMiterlimit="10"
                    strokeDasharray="5.09 5.09" />
                </svg>
              </div>
              <div className="icon-bg">
                <svg width="624" height="301" viewBox="0 0 624 301" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.8462 35.3305C120.371 -9.84138 528.803 -10.3211 582.748 26.0373C636.681 62.4068 640.281 254.964 578.36 279.341C516.439 303.729 80.5527 312.509 36.8965 279.029C-6.74711 245.56 -16.786 62.5964 34.8462 35.3305Z"
                    fill="#FFF0E8" />
                </svg>
              </div>
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <Image src="/assets/img/thumbnail/test-clip3.png" alt="Test Clip" width={77} height={77} />
                    <div className="img-border">
                      <svg width="77" height="77" viewBox="0 0 77 77" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M37.8857 0.75C47.9931 0.750132 57.5325 7.86429 64.5928 17.7637C71.6408 27.646 76.0781 40.1197 76.0781 50.4893C76.0781 55.6577 74.9756 59.7818 73.0391 63.0693C71.1031 66.3559 68.3068 68.8516 64.8467 70.7227C57.8972 74.4805 48.3185 75.6943 37.8857 75.6943C17.3828 75.6943 0.75023 58.9241 0.75 38.2227C0.75 17.521 17.3826 0.75 37.8857 0.75Z"
                          stroke="#C7C7CA" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “Very clear admission steps, friendly staff, and excellent guidance for new parents.
                    Highly recommended!”
                  </p>
                  <div className="author-info">
                    <div className="name">Daniel Johnson</div>
                    <span className="designation">/ Student Mather</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
              <div className="icon-border">
                <svg width="648" height="310" viewBox="0 0 648 310" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M48.362 20.9564C140.248 -18.1028 560.943 9.15527 613.423 48.9367C665.903 88.7182 653.339 280.214 587.525 300.227C521.711 320.24 72.0357 299.371 29.9078 263.157C-12.2202 226.942 -7.11261 44.5363 48.362 20.9564Z"
                    stroke="#C7C7CA" strokeWidth="4" strokeMiterlimit="10"
                    strokeDasharray="5.09 5.09" />
                </svg>
              </div>
              <div className="icon-bg">
                <svg width="624" height="301" viewBox="0 0 624 301" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M34.8462 35.3305C120.371 -9.84138 528.803 -10.3211 582.748 26.0373C636.681 62.4068 640.281 254.964 578.36 279.341C516.439 303.729 80.5527 312.509 36.8965 279.029C-6.74711 245.56 -16.786 62.5964 34.8462 35.3305Z"
                    fill="#FFF0E8" />
                </svg>
              </div>
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <Image src="/assets/img/thumbnail/test-clip1.png" alt="Test Clip" width={77} height={77} />
                    <div className="img-border">
                      <svg width="77" height="77" viewBox="0 0 77 77" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M37.8857 0.75C47.9931 0.750132 57.5325 7.86429 64.5928 17.7637C71.6408 27.646 76.0781 40.1197 76.0781 50.4893C76.0781 55.6577 74.9756 59.7818 73.0391 63.0693C71.1031 66.3559 68.3068 68.8516 64.8467 70.7227C57.8972 74.4805 48.3185 75.6943 37.8857 75.6943C17.3828 75.6943 0.75023 58.9241 0.75 38.2227C0.75 17.521 17.3826 0.75 37.8857 0.75Z"
                          stroke="#C7C7CA" strokeWidth="1.5" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “A wonderful school with caring teachers. The admission process was smooth, and my
                    child feels safe
                    and
                    happy every day.”
                  </p>
                  <div className="author-info">
                    <div className="name">Sarah Thompson</div>
                    <span className="designation">/ Student Mother</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        <Image src="/assets/img/element/vector-effect.png" alt="Vector Effect" width={72} height={80} className="vector-effect cir36 d-sm-block " />
      </section>
    </>
  )
}
