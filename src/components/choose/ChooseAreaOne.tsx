import Image from "next/image";
import Link from "next/link";
import VideoPopup from "../modals/VideoPopup";
import Count from "../common/Count";


export default function ChooseAreaOne() {
  return (
    <>
      {/* <!-- choose Section Start --> */}
      <div className="addmissions-section section-padding position-relative z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="sassion-content ps-xxl-5">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-xl-5 mb-lg-4 mb-md-3 mb-2">
                    <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                      Admissions Made Simple
                    </div>
                    <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                      Making Admissions Easy for Every Parent
                    </h2>
                    <p className="border-0 pb-xl-0 pb-0 mb-4">
                      Our admissions process is designed to be simple, transparent, and supportive, giving
                      every parent confidence and
                      guidance while enrolling their child into a safe and nurturing
                    </p>
                    <div className="pb-lg-2">
                      <div className="list-of-admission pb-4">
                        <div className="row g-xl-3 g-3">
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                              Clear and easy admission steps
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                              Friendly guidance for parents
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                              Quick document submission
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="d-flex gap-2 align-items-center">
                              <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                              Flexible visit and counseling
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom"></div>
                  </div>
                </div>
                <Link href="/contact" className="common_btn text-nowrap">
                  Start Enrollment
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-thumb-wap admission-thumb-wap position-relative me-lg-4">
                <div className="thumb w-100 overflow-hidden">
                  <Image src="/assets/img/about/admission-thumb.png" alt="Admission Thumb" width={696} height={463} className="overflow-hidden" />
                </div>
                <div className="count-box d-center">
                  <Image src="/assets/img/element/count-box.png" alt="Count Box" width={208} height={208} className="count-ele" />
                  <div className="boxes position-absolute pt-1">
                    <div className="count-item justify-content-center mb-xxl-3 mb-1 d-flex align-items-center">
                      <span className="count">
                        <Count number={38} text="+" add_style={true} />
                      </span>                   
                    </div>
                    <p>
                      Your Experience
                    </p>
                  </div>
                </div>
                <div className="video-box d-center d-flex">
                  <Image src="/assets/img/about/admission-video.png" alt="Admission Video" width={172} height={162} className="img" />
                  <VideoPopup>
                    <a style={{cursor: 'pointer'}}
                      className="video_play d-center video-popup position-absolute">
                      <i className="fas fa-play"></i>
                    </a>
                  </VideoPopup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/admission-play.png" alt="Admission Play" width={235} height={178} className="babol-parasut bottom-0 end-0 mb-2 me-4 updowns d-xl-block d-none" />
        <Image src="/assets/img/element/admission-knodlage.png" alt="Admission Knodlage" width={94} height={88} className="babol-quit b-0 pb-5 mb-5 d-lg-block updowns d-none" />
        <Image src="/assets/img/element/start-outline.png" alt="Start Outline" width={75} height={72} className="position-absolute top-0 end-0 mt-4 pt-2 me-5 pe-xl-5 d-lg-block cir36 d-none" />
      </div>
      {/* <!-- End choose --> */}
    </>
  )
}
