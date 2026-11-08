import Image from "next/image";
import Link from "next/link";

export default function FooterThree() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section space-top footer-style3 fix">
        <div className="container z-1 position-relative">
          <div className="row g-4">
            <div className="col-lg-5 col-sm-6">
              <div className="footer-top-left wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/" className="footer-logo d-block mb-2 pb-1">
                  <Image src="/assets/img/logo/logo-black.png" alt="Citigems Bilingual School" width={157} height={69} />
                </Link>
                <p className="pra fw-medium mb-4">
                  Offering dedicated, compassionate, and personalized nanny services that ensure your child
                  grows in a safe, loving, and
                  engaging environment every day.
                </p>
                <form action="#" className="from-style1 border wow fadeInDown mb-xl-5 mb-4">
                  <input type="email" placeholder="Enter your email..." />
                  <button type="button" className="common_btn text-nowrap">
                    SUBSCRIBE NOW
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </button>
                </form>
                <div className="social-area">
                  <div className="d-flex line-area text-dark">
                    Join Social:
                  </div>
                  <div className="social-icon d-flex gap-xxl-3 gap-xl-2 gap-1 align-items-center">
                    <a href="#" className="icon sub-font"><i
                      className="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" className="icon sub-font"><i
                      className="fa-brands fa-instagram"></i> </a>
                    <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="mb-xxl-4 mb-3 text-dark fw-bold">Our Services</h3>
                <ul className="footer-widget-link footer-widget-link-black">
                  <li>
                    <Link href="/contact">
                      <i className="fas fa-angle-double-right"></i> Infant Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fas fa-angle-double-right"></i> Toddler Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/event">
                      <i className="fas fa-angle-double-right"></i> After-School Care
                    </Link>
                  </li>
                  <li>
                    <Link href="/event">
                      <i className="fas fa-angle-double-right"></i> Part-Time Nanny
                    </Link>
                  </li>
                  <li>
                    <Link href="/event">
                      <i className="fas fa-angle-double-right"></i> Learning Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.6s">
                <h3 className="mb-xxl-4 mb-3 text-dark fw-bold">Quick Links</h3>
                <ul className="footer-widget-link footer-widget-link-black">
                  <li>
                    <Link href="/about">
                      <i className="fas fa-angle-double-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/event">
                      <i className="fas fa-angle-double-right"></i> Our Event
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fas fa-angle-double-right"></i> Pricing Plans
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <i className="fas fa-angle-double-right"></i> Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="fas fa-angle-double-right"></i> Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="mb-xxl-4 mb-3 text-dark fw-bold">Recent Posts</h3>
                <div className="recent-blogstyle-item mb-xxl-4 mb-3">
                  <div className="thumb">
                    <Image src="/assets/img/blog/footer-recent1.png" alt="Blog Post Footer Recent" width={80} height={72} />
                  </div>
                  <div className="cont">
                    <div
                      className="d-flex align-items-center gap-2 heading-font fw-medium mb-1 fs-eight text-theme">
                      <i className="fa-solid fa-calendar-days"></i>
                      Jun 26, 2024
                    </div>
                    <h4>
                      <Link href="/blog-details">
                        That jerk Form Finance
                        really threw me
                      </Link>
                    </h4>
                  </div>
                </div>
                <div className="recent-blogstyle-item">
                  <div className="thumb">
                    <Image src="/assets/img/blog/footer-recent2.png" alt="Blog Post Footer Recent" width={80} height={72} />
                  </div>
                  <div className="cont">
                    <div
                      className="d-flex align-items-center gap-2 heading-font fw-medium mb-1 fs-eight text-theme">
                      <i className="fa-solid fa-calendar-days"></i>
                      Jun 26, 2024
                    </div>
                    <h4>
                      <Link href="/blog-details">
                        That jerk Form Finance
                        really threw me
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom justify-content-between d-flex flex-md-nowrap flex-wrap gap-3">
            <p className="text-dark fw-medium wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; All Copyright {new Date().getFullYear()} by <a href="#" className="text-theme fw-semibold">Citigems.</a>
            </p>
            <div className="footer-bottom-link gap-4 d-flex align-items-center flex-wrap">
              <Link href="/contact" className="fw-medium text-dark">
                Terms & Condition
              </Link>
              <Link href="/contact" className="fw-medium text-dark">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><Image src="/assets/img/footer/footer-bottom-shape.png" alt="Footer Bottom Shape Shape Element" width={1920} height={281} className="object-fit-cover w-100" /></div>
        <Image src="/assets/img/element/footer-bench.png" alt="Footer Bench" width={187} height={243} className="footer-bench updowns" />
        <Image src="/assets/img/element/footer-doll.png" alt="Footer Doll" width={164} height={181} className="footer-doll updowns" />
        <Image src="/assets/img/element/footer-bubol.png" alt="Footer Bubol" width={139} height={158} className="footer-babol" />
        <Image src="/assets/img/element/footer-atta.png" alt="Footer Atta" width={148} height={134} className="footer-attatch d-xxl-block d-none" />
      </footer>
    </>
  )
}
