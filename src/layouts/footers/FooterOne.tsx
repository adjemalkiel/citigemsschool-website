import Image from "next/image";
import Link from "next/link";

export default function FooterOne() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section footer-style1 fix">
        <div className="thumb-shape-top"><Image src="/assets/img/footer/footer-shape-top.png" alt="Footer Shape Top Shape Element" width={1920} height={63} className="w-100 object-fit-cover" /></div>
        <div className="container">
          <div
            className="footer-top-area d-flex justify-content-between flex-md-nowrap flex-wrap gap-3 position-relative">
            <div className="footer-top-left">
              <Link href="/" className="footer-logo d-block mb-2">
                <Image src="/assets/img/logo/logo.png" alt="Citigems Bilingual School" width={157} height={69} />
              </Link>
              <p className="pra white-clr">
                Citigems Bilingual School provides a safe, fun, and nurturing bilingual environment for children to learn, grow, and explore.
              </p>
            </div>
            <div className="social-wrap01 gap-xl-3 gap-2 d-flex align-items-center">
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="#" className="white sub-font">
                <i className="fa-brands fa-vimeo-v"></i>
              </a>
            </div>
          </div>
          <div className="footer-line">
            <Image src="/assets/img/footer/line-f.png" alt="Line F" width={1321} height={9} className="w-100" />
          </div>
          <div className="row g-md-4 g-3 justify-content-between">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Our Location</span>
                <a href="#;" className="text-break">
                  C/3227 Agla Agongbomey, Cotonou
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Email Address</span>
                <a href="#;" className="text-break">
                  citigems2014@gmail.com
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Call for inquiries</span>
                <a href="#;" className="text-break">
                  01 49 67 88 53 / 01 94 83 59 22
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="footer-info-item">
                <span className="l-names">Days Open</span>
                <a href="#;" className="text-break">
                  Sun – Thu , (Closed: Fri & Satu)
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom justify-content-between flex-md-nowrap flex-wrap gap-3">
            <div className="footer-bottom-link d-flex align-items-center flex-wrap">
              <Link href="/">
                Home
              </Link>
              <Link href="/about">
                About Us
              </Link>
              <Link href="/comming-soon">
                Pages
              </Link>
              <Link href="/program">
                Programs
              </Link>
              <Link href="/blog">
                Blog
              </Link>
              <Link href="/contact">
                Contact us
              </Link>
              <a href="https://cs.devopsflows.com/login?redirect-to=/edu-portal">
                Espace parents
              </a>
            </div>
            <p className="text-white wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()} <a href="#" className="text-p1">Citigems.</a> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><Image src="/assets/img/footer/footer-shape-bottom.png" alt="Footer Shape Bottom Shape Element" width={1920} height={197} className="object-fit-cover w-100" /></div>
        <Image src="/assets/img/footer/f-shot.png" alt="F Shot" width={142} height={170} className="footer-shot d-xxl-block d-none" />
        <Image src="/assets/img/footer/footer-shape1.png" alt="Footer Shape Shape Element" width={137} height={121} className="footer-estrue d-xxl-block d-none" />
      </footer>
    </>
  )
}
