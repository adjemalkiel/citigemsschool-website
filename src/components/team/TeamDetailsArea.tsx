import Image from "next/image";
import Link from "next/link";


export default function TeamDetailsArea() {
  return (
    <>
      {/* <!-- team Section Start --> */}
      <section className="team-main-section pt-5 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="team-details-thumb w-100">
                <Image src="/assets/img/team/team-big.png" alt="Team Member Team Big" width={496} height={512} className="w-100" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="contact-left-get ps-lg-4">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title">
                    <h2 className="black mb-2 visible-slowly-bottom fw-bold d-block">
                      Teacher Details
                    </h2>
                    <p className="fs--18px text-theme mb-3">Early Reading & Literacy Teacher</p>
                    <p className="mb-3">
                      Kindergarten is an early childhood educational environment where most young
                      children, typically aged 4 to 6, engage in
                      foundational learning experiences. The focus is on fostering social, emotional,
                      cognitive, and physical development
                      through a mix of structured activities and play.
                    </p>
                    <div className="d-flex border-bottom pb-4 mb-4 fs--18px align-items-center gap-3">
                      Experience : <strong className="text-dark">16+ Years</strong>
                    </div>
                  </div>
                </div>
                <div className="border rounded-3 d-flex flex-lg-nowrap flex-wrap align-items-center justify-content-between mb-4 wow fadeInUp"
                  data-wow-delay=".4s">
                  <div className="call-info_contact p-3">
                    <div className="icon d-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="cont">
                      <span>Call support center 24/7</span>
                      <a href="#">
                        01 49 67 88 53 / 01 94 83 59 22
                      </a>
                    </div>
                  </div>
                  <div className="line-contact-info"></div>
                  <div className="call-info_contact p-3">
                    <div className="icon d-center">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="cont">
                      <span>Write to us</span>
                      <a href="#">
                        citigems2014@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="call-info_contact call-info_contact-location wow fadeInUp" data-wow-delay=".6s">
                  <div className="icon d-center rounded-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="cont">
                    <span>Location</span>
                    <a href="#">
                      Agla Agongbomey, Cotonou
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-5 pt-lg-5">
              <div className="team-bottom-information border-top pt-5 mt-xxl-3">
                <div className="hed-cont">
                  <h3 className="fs-32px mb-2">About the Teacher</h3>
                  <p className="mb-4 pb-xxl-2">Adam Smith Carter specializes in developing early reading skills
                    through phonics, storytelling, and interactive reading
                    activities. She creates a supportive, fun learning environment that helps children build
                    confidence, vocabulary, and a
                    lifelong love for reading.</p>
                </div>
                <div className="activites-top mb-48 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="list-of-admission mb-4 wow fadeInUp" data-wow-delay="0.6s">
                    <div className="row g-4">
                      <div className="col-sm-6 col-lg-4">
                        <h3 className="fs-24px mb-3">
                          Qualifications
                        </h3>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Bachelor’s Degree in Early Childhood Education
                        </div>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Certified Reading Specialist
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Phonics & Literacy Training Certified
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <h3 className="fs-24px mb-3">
                          Teaching Focus
                        </h3>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Phonics & letter recognition
                        </div>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Phonics & letter recognition
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Reading confidence building
                        </div>
                      </div>
                      <div className="col-sm-6 col-lg-4">
                        <h3 className="fs-24px mb-3">
                          Special Skills
                        </h3>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Phonics & word recognition
                        </div>
                        <div className="mb-2 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Storytelling & reading activities
                        </div>
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Child-friendly teaching approach
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <Link href="/#contact" className="common_btn d-inline-flex text-nowrap">
                    Meet the Teacher
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
