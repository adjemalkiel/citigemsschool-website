import Image from "next/image";
import Link from "next/link";

export default function HeroAreaThree() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section banner-section03 fix position-relative">
        <div className="container">
          <div className="banner-content3">
            <div className="section-title mx-auto mb-48">
              <div className="sub__text-p1 mb-3 wow fadeInUp" data-wow-delay=".3s">
                Trusted Care for Your Little Ones
              </div>
              <h1 className="text-dark mb-3 black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
                Professional
                <span className="position-relative text-theme title-ele3">
                  Nanny
                  <Image src="/assets/img/element/title-ele3.png" alt="Title Ele" width={160} height={17} />
                </span> <br />
                Services for Your Child
              </h1>
              <p className="border-0 mb-0">
                Our experienced and caring nannies provide personalized attention, nurturing support, and a safe
                environment
                to ensure
                your child thrives emotionally, socially, and educationally.
              </p>
            </div>
            <div className="d-flex justify-content-center flex-sm-nowrap flex-wrap align-items-center gap-md-4 gap-3">
              <Link href="/#contact" className="common_btn text-nowrap">
                Hire a Nanny Today
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
              <Link href="/#about" className="common_btn common_btn__outline-theme3 text-nowrap">
                About Our Services
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-thumb-left">
          <Image src="/assets/img/banner/hero-thumb-left4.png" alt="Hero Banner Illustration Hero Thumb Left" width={464} height={634} />
        </div>
        <div className="hero-thumb-right">
          <Image src="/assets/img/banner/heros_thumb3.png" alt="Hero Banner Illustration Heros Thumb" width={578} height={624} />
        </div>
        <Image src="/assets/img/banner/rounded-shape-hero.png" alt="Hero Banner Illustration Rounded Shape Hero" width={1920} height={50} className="round-hero-shape" />
        <Image src="/assets/img/banner/hero-shop4.png" alt="Hero Banner Illustration Hero Shop" width={220} height={259} className="shot-4 d-lg-block d-none updowns" />
        <Image src="/assets/img/banner/plen.png" alt="Hero Banner Illustration Plen" width={197} height={112} className="shot-plen d-md-block d-none updowns" />
        <Image src="/assets/img/banner/hero-shot3.png" alt="Hero Banner Illustration Hero Shot" width={82} height={135} className="shot-3 d-lg-block d-none updowns" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
