import Image from "next/image";
import Link from "next/link";


export default function HeroAreaTwo() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section banner-section02 fix position-relative">
        <div className="container">
          <div className="container z-1 position-relative">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-6">
                <div className="banner-content px-lg-0 px-sm-4">
                  <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                    Start Learning With Joy
                  </div>
                  <h1 className="title-clr fw_700 mb-xl-4 mb-sm-3 mb-2 wow fadeInUp" data-wow-delay="0.7s">
                    Where Learning Meets Joyful Play
                  </h1>
                  <p className="pra-clr fs-six mb-40 wow fadeInUp" data-wow-delay="0.8s">
                    Our preschool offers a safe, nurturing environment where young children explore, learn,
                    and develop essential skills
                    through play
                  </p>
                  <div className="banner-video d-flex flex-sm-nowrap justify-content-center justify-content-lg-start flex-wrap align-items-center gap-xl-4 gap-lg-3 gap-2 space-bottom mb-lg-2 position-relative wow fadeInUp"
                    data-wow-delay="0.9s">
                    <Link href="/contact" className="common_btn text-nowrap">
                      Apply Today
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="social-area">
                    <div className="d-flex line-area">
                      Join Social: <Image src="/assets/img/element/line-social.png" alt="Line Social" width={99} height={6} className="d-lg-block d-none" />
                    </div>
                    <div className="social-icon d-flex gap-xxl-3 gap-xl-2 gap-1 align-items-center">
                      <a href="#" className="icon sub-font"><i
                        className="fa-brands fa-linkedin"></i></a>
                      <a href="#" className="icon sub-font"><i
                        className="fa-brands fa-twitter"></i> </a>
                      <a href="#" className="icon sub-font"><i
                        className="fa-brands fa-instagram"></i> </a>
                      <a href="#" className="icon sub-font"><i
                        className="fa-brands fa-facebook"></i> </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-lg-0 order-1">
                <div className="hero-thumb">
                  <Image src="/assets/img/banner/hero-thumb02.png" alt="Hero Banner Illustration Hero Thumb" width={760} height={745} className="mimg" />
                  {/* <!--- element ---> */}
                  <Image src="/assets/img/banner/bg-shape-circle.png" alt="Hero Banner Illustration Bg Shape Circle" width={1170} height={1170} className="hero-circle2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/hero-main-shape2.png" alt="Hero Main Shape Shape Element" width={1920} height={123} className="hero-shape1" />
        <Image src="/assets/img/element/hero-single-book.png" alt="Hero Single Book" width={96} height={96} className="hero-single-book updowns" />
        <Image src="/assets/img/element/hero-line-single.png" alt="Hero Line Single" width={240} height={234} className="hero-single-line updowns" />
        <Image src="/assets/img/element/count-book.png" alt="Count Book" width={236} height={233} className="hero-count-book updowns" />
        <Image src="/assets/img/element/pricing-shot.png" alt="Pricing Shot" width={68} height={94} className="hero-shot updowns" />
        <Image src="/assets/img/element/quick-rainbow.png" alt="Quick Rainbow" width={208} height={184} className="hero-snows" />
        <Image src="/assets/img/element/pen-sun.png" alt="Pen Sun" width={80} height={80} className="hero-pens" />
        <Image src="/assets/img/element/sun-fun.png" alt="Sun Fun" width={140} height={140} className="hero-sun-fun cir36" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
