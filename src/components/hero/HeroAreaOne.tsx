import Image from "next/image";
import Link from "next/link";
import VideoPopup from "../modals/VideoPopup";


export default function HeroAreaOne() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section fix position-relative">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="hero-thumb">
                  <Image src="/assets/img/banner/hero-thumb.png" alt="Hero Banner Illustration Hero Thumb" width={852} height={766} className="mimg" />
                  {/* <!--- element ---> */}
                  <Image src="/assets/img/element/hero-circle-ele.png" alt="Hero Circle Ele" width={515} height={515} className="hero-circle zoom-in" />
                  <Image src="/assets/img/element/hero-flash.png" alt="Hero Flash" width={122} height={104} className="flash-ele mt-sm-4 zoom-in" />
                  <Image src="/assets/img/element/hero-pulp.png" alt="Hero Pulp" width={92} height={83} className="bulp-ele" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-content px-lg-0 px-sm-4">
                  <span className="hero-badge wow fadeInUp" data-wow-delay="0.6s">
                    Enroll Your Child Today
                  </span>
                  <h1 className="white fw_700 mb-xl-4 mb-sm-3 mb-2 visible-slowly-bottom" data-wow-delay="0.7s">
                    Give Your Child the Best Start in Life – Enroll Today!
                  </h1>
                  <p className="white fs-six mb-40 wow fadeInUp" data-wow-delay="0.8s">
                    Give your child a nurturing environment where curiosity blossoms, creativity thrives,
                    and learning is fun. Enroll today
                    to secure a joyful, safe,
                  </p>
                  <div className="banner-video d-flex flex-sm-nowrap justify-content-center justify-content-lg-start flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 mb-60 position-relative wow fadeInUp"
                    data-wow-delay="0.9s">
                    <Link href="/contact" className="common_btn text-nowrap">
                      Online Admission
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <div className="d-flex align-items-center gap-lg-3 gap-2">
                      <VideoPopup>
                        <a style={{cursor: "pointer"}}
                          className="video-style rounded-circle d-center video-popup">
                          <i className="fa-solid fa-play fs-six"></i>
                        </a>
                      </VideoPopup>
                      <span className="white fw_600 sub-font">Play inter video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/heor-shape1.png" alt="Heor Shape Shape Element" width={1920} height={195} className="hero-shape1" />
        <Image src="/assets/img/element/hero-dump.png" alt="Hero Dump" width={237} height={196} className="hero-dump position-absolute bottom-0 end-0 mb-5 d-lg-block d-none pb-xl-5 bob-x" />
        <Image src="/assets/img/element/hero-pen.png" alt="Hero Pen" width={67} height={100} className="hero-pen updowns" />
        <Image src="/assets/img/element/hero-car.png" alt="Hero Car" width={163} height={102} className="hero-car bob-x start-0 ms-5 ps-5 bottom-0 position-absolute z-1 box-x" />
      </section>
      {/* <!-- Banner Section Start -->    */}
    </>
  )
}
