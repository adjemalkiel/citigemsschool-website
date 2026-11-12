import Image from "next/image";
import Link from "next/link";

export default function FooterTwo() {
  return (
    <>
      {/* <!--<< Footer Section Start >>--> */}
      <footer className="footer-section space-top footer-style2 fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-5 col-sm-6">
              <div className="footer-top-left wow fadeInUp" data-wow-delay="0.3s">
                <Link href="/" className="footer-logo d-block mb-2 pb-1">
                  <Image src="/assets/img/logo/logo.png" alt="Citigems Bilingual School" width={157} height={69} />
                </Link>
                <p className="pra white-clr opacity-75">
                  BrightPath Preschool provides a caring, creative, and safe learning environment where
                  children grow through play,
                  exploration, and early education.
                </p>
                <div className="text-social">
                  <a href="#">
                    Facebook
                  </a>
                  <a href="#">
                    twitter
                  </a>
                  <a href="#">
                    linkedin
                  </a>
                  <a href="#">
                    youtube
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer-widget ps-xxl-5 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="mb-xxl-4 mb-3">Our Programs</h3>
                <ul className="footer-widget-link">
                  <li>
                    <Link href="/#programmes">
                      <i className="fas fa-angle-double-right"></i> Preschool Program
                    </Link>
                  </li>
                  <li>
                    <Link href="/#programmes">
                      <i className="fas fa-angle-double-right"></i> Kindergarten Readiness
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fas fa-angle-double-right"></i> Creative Arts
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fas fa-angle-double-right"></i> Language & Literacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <i className="fas fa-angle-double-right"></i> Outdoor Activities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="footer-widget wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="mb-xxl-4 mb-3">Contact Information</h3>
                <ul className="footer-widget-info">
                  <li>
                    Address:
                    <a href="#">
                      Agla Agongbomey, Cotonou
                    </a>
                  </li>
                  <li>
                    Phone:
                    <a href="#">
                      01 49 67 88 53 / 01 94 83 59 22
                    </a>
                  </li>
                  <li>
                    Send Message:
                    <a href="#">
                      citigems2014@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom text-center space-top">
            <p className="text-white wow fadeInLeft body-font" data-wow-delay=".3s">
              &copy; {new Date().getFullYear()} <a href="#" className="text-p1">Citigems.</a> All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="thumb-shape1 w-100"><Image src="/assets/img/footer/footer-shape2.png" alt="Footer Shape Shape Element" width={1920} height={243} className="object-fit-cover w-100" /></div>
        <Image src="/assets/img/footer/footer-horse.png" alt="Footer Horse" width={175} height={193} className="footer-shot bob-x d-lg-block d-none" />
        <Image src="/assets/img/footer/footer-shot2.png" alt="Footer Shot" width={133} height={221} className="footer-estrue updowns d-sm-block d-none" />
        <Image src="/assets/img/footer/footer-plan.png" alt="Footer Plan" width={225} height={117} className="footer-plan bob-x d-lg-block d-none" />
      </footer>

    </>
  )
}
