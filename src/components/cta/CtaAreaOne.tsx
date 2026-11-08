import Image from "next/image";


export default function CtaAreaOne() {
  return (
    <>
      {/* <!-- GetinTouch Section Start --> */}
      <div className="getin-touch-section fix position-relative z-1 section-padding">
        <Image src="/assets/img/element/quick-rainbow.png" alt="Quick Rainbow" width={208} height={184} className="quick-rainbow rots d-lg-block d-none" />
        <Image src="/assets/img/element/quick-line.png" alt="Quick Line" width={104} height={86} className="quick-line updowns" />
        <Image src="/assets/img/element/quick-dool.png" alt="Quick Dool" width={152} height={168} className="quick-dool rots d-lg-block d-none" />
        <div className="container position-relative">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                Need Help? Contact Now
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                Quick Contact for Parents
              </h2>
            </div>
          </div>
          <div className="getin-touch-wrap position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="getin-touch pe-xl-5">
                  <p className="get-pra wow fadeInUp" data-wow-delay="0.3s">
                    “A wonderful school with caring teachers. The admission process was smooth, and my child
                    feels safe and happy every
                    day.”
                  </p>
                  <div className="sara_box sara_box-with-border wow fadeInUp" data-wow-delay="0.4s">
                    <div className="icon">
                      <Image src="/assets/img/thumbnail/sarah.png" alt="Sarah" width={56} height={56} />
                    </div>
                    <div>
                      <div className="title-texts">Sarah Thompson</div>
                      <span className="subtext">School Director</span>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-xl-4 gap-3">
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.5s">
                      <div className="icon">
                        <Image src="/assets/img/icon/call-icon.png" alt="Call Icon Icon" width={56} height={56} />
                      </div>
                      <div>
                        <div className="sub-texts">Call for inquiries: ((Available: 9 AM – 5 PM)</div>
                        <a href="#" className="black sub-title">01 49 67 88 53 / 01 94 83 59 22</a>
                      </div>
                    </div>
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.6s">
                      <div className="icon">
                        <Image src="/assets/img/icon/envelop-icon.png" alt="Envelop Icon Icon" width={56} height={56} />
                      </div>
                      <div>
                        <div className="sub-texts">Email Address:</div>
                        <a href="#"
                          className="black sub-title text-break">citigems2014@gmail.com</a>
                      </div>
                    </div>
                    <div className="getin-touch_box wow fadeInUp" data-wow-delay="0.7s">
                      <div className="icon">
                        <Image src="/assets/img/icon/location-icon.png" alt="Location Icon Icon" width={56} height={56} />
                      </div>
                      <div>
                        <div className="sub-texts">School Address:</div>
                        <a href="#" className="black sub-title">C/3227 Agla Agongbomey, Cotonou</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 get-in-touch">
                <h3 className="mb-4 fw-semibold">We’re Here to Help!</h3>
                <div className="row g-xxl-4 g-3">
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                    <input type="text" placeholder="Your Number" />
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.6s">
                    <textarea name="get-intouch" rows={3} placeholder="Your Message"></textarea>
                  </div>
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.7s">
                    <button type="button" className="common_btn text-nowrap">
                      SUBSCRIBE NOW
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Element --> */}
            <Image src="/assets/img/element/quick-bg.png" alt="Quick Bg" width={1320} height={666} className="quick-bg" />
          </div>
          <div className="sassion-section space-top position-relative z-1">
            <div className="row g-4 justify-content-between">
              <div className="col-lg-7 col-md-7">
                <div className="sassion-content pe-xl-5">
                  <div className="section-title-area align-items-end justify-content-center">
                    <div className="section-title section-title-white mb-48">
                      <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                        Our Session Times
                      </div>
                      <h2 className="black visible-slowly-bottom fw-bold d-block">
                        Flexible Sessions for Every Child
                      </h2>
                      <p>
                        Our kindergarten provides flexible session options to accommodate every family’s
                        needs. Children can enjoy engaging
                        learning activities, creative play, social interaction, and rest, all within a
                        safe, nurturing.
                      </p>
                    </div>
                  </div>
                  <button type="button" className="common_btn text-nowrap">
                    SUBSCRIBE NOW
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </button>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="morning-sassion">
                  <div className="sassion-item">
                    <div className="black title fw-bold mb-0">Morning Sassion</div>
                    <span className="pra fs-seven">Time: 8:00 AM – 11:00 AM</span>
                  </div>
                  <div className="sassion-item">
                    <div className="black title fw-bold mb-0">Mid-Day Session</div>
                    <span className="pra fs-seven">Time: 11:30 AM – 2:30 PM</span>
                  </div>
                  <div className="sassion-item">
                    <div className="black title fw-bold mb-0">Afternoon Session</div>
                    <span className="pra fs-seven">Time: 2:30 PM – 5:30 PM</span>
                  </div>
                  <div className="sassion-item">
                    <div className="black title fw-bold mb-0">Full-Day Program</div>
                    <span className="pra fs-seven">Time: 10:00 AM – 12:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/sassion-bg.png" alt="Sassion Bg" width={1920} height={897} className="sassion-bg" />
        <Image src="/assets/img/element/rain-icon.png" alt="Rain Icon Icon" width={95} height={98} className="rain-icon updowns d-xxl-block d-none" />
        <Image src="/assets/img/element/rain-box.png" alt="Rain Box" width={120} height={148} className="rain-box updowns" />
      </div>

    </>
  )
}
