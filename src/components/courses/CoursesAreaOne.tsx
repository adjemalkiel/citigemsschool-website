import Image from "next/image";
import Link from "next/link";


export default function CoursesAreaOne() {
  return (
    <>
      {/* <!-- Courses Section Start --> */}
      <section className="courses-section section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                Our Classes
              </div>
              <h2 className="text-white visible-slowly-bottom fw-bold d-block">
                Discover Our Learning Programs
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/cources-bg-ele.png" alt="Cources Bg Ele" width={419} height={470} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/course-1.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1">
                  <div className="d-flex mb-xxl-0 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 1 hr 30 min
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                    </span>
                  </div>
                  <h3 className="mb-2">
                    <Link href="/program-details" className="black visible-slowly-bottom">
                      Skill Development Class
                    </Link>
                  </h3>
                  <div className="border-bottom-deshed"></div>
                  <div className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                      Join Now
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <div className="ratting-area">
                      <span>(10 Review)</span>
                      <div className="d-flex gap-1 mt-1">
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star pra-clr opacity-75"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/cources-bg-ele.png" alt="Cources Bg Ele" width={419} height={470} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/course-2.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1">
                  <div className="d-flex mb-xxl-0 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 1 hr 30 min
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                    </span>
                  </div>
                  <h3 className="mb-2">
                    <Link href="/program-details" className="black visible-slowly-bottom">
                      Music & Movement Class
                    </Link>
                  </h3>
                  <div className="border-bottom-deshed"></div>
                  <div className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                      Join Now
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <div className="ratting-area">
                      <span>(10 Review)</span>
                      <div className="d-flex gap-1 mt-1">
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star pra-clr opacity-75"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".9s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/cources-bg-ele.png" alt="Cources Bg Ele" width={419} height={470} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/course-3.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1">
                  <div className="d-flex mb-xxl-0 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 1 hr 30 min
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                    </span>
                  </div>
                  <h3 className="mb-2">
                    <Link href="/program-details" className="black visible-slowly-bottom">
                      Math & Number Skills Class
                    </Link>
                  </h3>
                  <div className="border-bottom-deshed"></div>
                  <div className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                    <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                      Join Now
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <div className="ratting-area">
                      <span>(10 Review)</span>
                      <div className="d-flex gap-1 mt-1">
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star ratting"></i>
                        <i className="fas fa-star pra-clr opacity-75"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/course-bg.png" alt="Course Bg" width={1920} height={858} className="course-bg" />
        {/* <!---ele--> */}
        <Image src="/assets/img/element/course-ele.png" alt="Course Ele" width={314} height={283} className="course-ele d-sm-block d-none cir36" />
        <Image src="/assets/img/element/course-sun.png" alt="Course Sun" width={204} height={195} className="course-sun bob-x d-md-block d-none" />
      </section>
      {/* <!-- End course --> */}
    </>
  )
}
