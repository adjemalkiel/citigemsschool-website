import Image from "next/image";
import MobileMenu from "@/layouts/headers/MobileMenu";
import Link from "next/link";

interface OffCanvasProps {
  offCanvasOpen: boolean;
  setOffCanvasOpen: (open: boolean) => void;
}

export default function Offcanvas({ offCanvasOpen, setOffCanvasOpen }: OffCanvasProps) {
  return (
    <>
      {/* <!-- Offcanvas Area Start --> */}
      <div className="fix-area">
        <div className={`offcanvas__info ${offCanvasOpen ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <Link href="/" className="offcanvas__logo">
                  <Image src="/assets/img/logo/logo-black.png" alt="Citigems Bilingual School" width={157} height={69} />
                </Link>
                <div className="offcanvas__close">
                  <button onClick={() => setOffCanvasOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4 className="fw_600">Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt fs-five"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#" className="fs-eight">C/3227 Agla Agongbomey, Cotonou</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+2290149678853">01 49 67 88 53</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:citigems2014@gmail.com"><span>citigems2014@gmail.com</span></a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 06am -02pm</a>
                    </div>
                  </li>
                  {/* <!-- End info --> */}

                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact"
                    className="common-btn box-style first-box d-inline-flex justify-content-center align-items-center gap-xxl-2 gap-2 fs18 fw-semibold white overflow-hidden p1-bg rounded-2">
                    Get Started Today
                  </Link>
                </div>
                <div
                  className="header-top-social mt-5 d-grid flex-column gap-2 justify-content-start align-items-center">
                  <a href="#" className="sub-font"><i className="fa-brands fa-facebook"></i>
                    Facebook</a>
                  <a href="#" className="sub-font"><i className="fa-brands fa-twitter"></i>
                    Twitter</a>
                  <a href="#" className="sub-font"><i className="fa-brands fa-linkedin"></i>
                    Linkedin</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${offCanvasOpen ? 'overlay-open' : ''}`} onClick={() => setOffCanvasOpen(false)}></div>
    </>
  )
}
