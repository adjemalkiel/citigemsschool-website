import Image from "next/image";


export default function PricingAreaTwo() {
  return (
    <>
      {/* <!-- Pricing Section Start --> */}
      <section className="pricing-plan-section section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                PRICING PLANS
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                Preschool Pricing Plans
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style1 wow fadeInUp" data-wow-delay="0.3s">
                <Image src="/assets/img/element/pricing-shpae2-shape1.png" alt="Pricing Shpae Shape Shape Element" width={419} height={480} className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head text-center">
                    <h3>Morning Session</h3>
                    <span className="fs-6">Time: 8:00 AM – 11:00 AM</span>
                  </div>
                  <div className="unit-price">
                    <Image src="/assets/img/element/unit-price.png" alt="Unit Price" width={160} height={81} />
                    <h4>
                      $150
                      <span className="fw-normal lh-sm d-block">/ month</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Play-based learning activities
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Storytime and creative arts
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Small group attention
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="common_btn common_btn_outline text-nowrap">
                      Choose Your Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style2 wow fadeInUp" data-wow-delay="0.5s">
                <Image src="/assets/img/element/pricing-shpae2-shape2.png" alt="Pricing Shpae Shape Shape Element" width={418} height={480} className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head text-center">
                    <h3>Mid-Day Session</h3>
                    <span className="fs-6">Time: 11:30 AM – 2:30 PM</span>
                  </div>
                  <div className="unit-price">
                    <Image src="/assets/img/element/unit-price.png" alt="Unit Price" width={160} height={81} />
                    <h4>
                      $180
                      <span className="fw-normal lh-sm d-block">/ month</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Balanced learning and rest
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Outdoor play & games
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Social & emotional skill building
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="common_btn common_btn_outline text-nowrap">
                      Choose Your Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="pricing-pln__items style3 wow fadeInUp" data-wow-delay="0.9s">
                <Image src="/assets/img/element/pricing-shpae2-shape3.png" alt="Pricing Shpae Shape Shape Element" width={419} height={480} className="w-100 d-xl-block d-none h-100" />
                <div className="boxes">
                  <div className="head text-center">
                    <h3>Full-Day Program</h3>
                    <span className="fs-6">Time: 8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="unit-price">
                    <Image src="/assets/img/element/unit-price.png" alt="Unit Price" width={160} height={81} />
                    <h4>
                      $299
                      <span className="fw-normal lh-sm d-block">/ month</span>
                    </h4>
                  </div>
                  <div className="d-flex flex-column gap-3 mb-4 pb-2">
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Full day of structured learning
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Meals & nap time included
                    </div>
                    <div className="d-flex align-items-center gap-2 fs-5 fw-medium">
                      <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                      Comprehensive early skill
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="button" className="common_btn common_btn_outline text-nowrap">
                      Choose Your Plan
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/pricing-shot.png" alt="Pricing Shot" width={68} height={94} className="pricing-shape1 d-sm-block d-none updowns" />
        <Image src="/assets/img/element/pricing-abc.png" alt="Pricing Abc" width={163} height={130} className="pricing-shape2 bob-x" />
      </section>
    </>
  )
}
