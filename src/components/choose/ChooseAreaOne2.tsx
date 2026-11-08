import Image from "next/image";
import Link from "next/link";

export default function ChooseAreaOne2() {
  return (
    <>
      {/* <!-- choose Section Start --> */}
      <div className="choose-new-section section-padding position-relative z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="choose-thumb-wap me-lg-4">
                <div className="thumb w-100 overflow-hidden">
                  <Image src="/assets/img/about/choose-exprience.png" alt="Choose Exprience" width={584} height={476} className="overflow-hidden" />
                </div>
                <Image src="/assets/img/element/quick-rainbow.png" alt="Quick Rainbow" width={208} height={184} className="quick-rainbow rots d-sm-block d-none" />
                <Image src="/assets/img/element/rainday.png" alt="Rainday" width={64} height={56} className="quick-randay cir36 d-sm-block d-none" />
                <Image src="/assets/img/element/ba-ele.png" alt="Ba Ele" width={119} height={138} className="quick-ba updowns d-sm-block d-none" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sassion-content ps-xxl-5">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-xl-5 mb-lg-4 mb-md-3 mb-2">
                    <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                      Why Choose Us
                    </div>
                    <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                      Why Our Kindergarten Stands Out
                    </h2>
                    <p className="border-0 pb-xl-2 pb-0 mb-4">
                      Our admissions process is designed to be simple, transparent, and supportive, giving
                      every parent confidence
                    </p>
                    <div className="progress-theme-wrap">
                      <div className="progress-theme-items">
                        <div className="p-title text-white">Creativity</div>
                        <div className="p-count text-white">90%</div>
                      </div>
                      <div className="progress-theme-items style2">
                        <div className="p-title text-dark">Experiences</div>
                        <div className="p-count text-dark">70%</div>
                      </div>
                    </div>
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
          </div>
        </div>
        <Image src="/assets/img/element/babol-parasut.png" alt="Babol Parasut" width={162} height={194} className="babol-parasut updowns d-xl-block d-none" />
        <Image src="/assets/img/element/quit.png" alt="Quit" width={257} height={224} className="babol-quit d-lg-block updowns d-none" />
      </div>

    </>
  )
}
