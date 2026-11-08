import Image from "next/image";
import Link from "next/link";


export default function LearningAreaTwo() {
  return (
    <>
      {/* <!-- learning Section Start --> */}
      <section className="learning-section fix">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-lg-6">
              <div className="learning-box-left position-relative z-1">
                <div className="section-title mb-lg-4 pb-lg-3 section-title-white">
                  <div className="sub__warning mb-2 wow fadeInUp" data-wow-delay=".3s">
                    Start Learning
                  </div>
                  <h2 className="mb-sm-4 mb-3 pb-lg-3 pb-md-1 black visible-slowly-bottom fw-bold d-block">
                    Where Every Little Step Leads to Big Discoveries
                  </h2>
                  <div className="d-flex align-items-center flex-wrap gap-xxl-4 gap-xl-3 gap-2">
                    <Link href="/testimonial" className="common_btn text-nowrap">
                      Read More Reviews
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <Link href="/contact"
                      className="common_btn ps-1 pe-3 common_btn_outline common_btn__outline-white text-nowrap">
                      <span className="icon_wrapper ms-0 me-2">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                      +065 345 939 -3909
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="learning-thumb reveal-left">
                <Image src="/assets/img/about/learning-thumb.png" alt="Learning Thumb" width={721} height={569} className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/learn-bg.png" alt="Learn Bg" width={1287} height={303} className="position-absolute bottom-0 start-0 w-100 learning-bg" />
        <Image src="/assets/img/element/learning-shape.png" alt="Learning Shape Shape Element" width={1920} height={123} className="position-absolute bottom-0 start-0 w-100" />
        <Image src="/assets/img/element/learn-multiple-pen.png" alt="Learn Multiple Pen" width={174} height={171} className="position-absolute bottom-0 start-0 z-n1 mb-5 d-xxl-block d-none" />
        <Image src="/assets/img/element/learn-pen.png" alt="Learn Pen" width={140} height={121} className="position-absolute z-n1 learn-pen updowns d-md-block d-none" />
        <Image src="/assets/img/element/learn-flower.png" alt="Learn Flower" width={172} height={239} className="position-absolute z-n1 learn-flower bob-x d-xxl-block d-none" />
      </section>
    </>
  )
}
