import Image from "next/image";
import Link from "next/link";

export default function ProgramArea() {
  return (
    <>
      {/* <!-- program Section Start --> */}
      <section className="program-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="mb-48">
            <div className="row g-4">
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-1.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h2 className="mb-3 fs-24px fw-bold">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Skill Development Class
                      </Link>
                    </h2>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-2.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Music & Movement Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-3.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-3 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Math & Number Skills Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-4.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Reading & Phonics Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-5.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        STEM & Discovery Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-6.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Outdoor Learning Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-7.png" alt="Blog Post Course" width={370} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Sensory Play Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-8.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Early Literacy Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/program-main-item-shape.png" alt="Program Main Item Shape Shape Element" width={419} height={470} className="cources-bg" />
                  <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/course-9.png" alt="Blog Post Course" width={371} height={240} className="rounded-3 w-100" />
                  </Link>
                  <div className="c-content px-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 1 hr 30 min
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-clock text-p1"></i> 2464 Royal Ln. Mesa
                      </span>
                    </div>
                    <h3 className="mb-3">
                      <Link href="/program-details" className="black visible-slowly-bottom">
                        Writing & Pre-Writing Class
                      </Link>
                    </h3>
                    <div className="border-bottom-deshed"></div>
                    <div
                      className="btn-grp-ele d-flex align-items-center justify-content-between gap-2 flex-wrap">
                      <Link href="/program-details" className="common_btn common_btn_outline text-nowrap">
                        Join Now
                        <span className="icon_wrapper w-36 h-36 min-w-36">
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
          <div className="pagination-wrap flex-wrap justify-content-center">
            <div className="pagination-arrow">
              <i className="fa-solid fa-arrow-left"></i>
              Prev
            </div>
            <div className="pagination">
              <a href="#" className="active">
                01
              </a>
              <a href="#">
                02
              </a>
              <a href="#">
                03
              </a>
              <a href="#">
                ...
              </a>
              <a href="#">
                12
              </a>
            </div>
            <div className="pagination-arrow active">
              Next
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
