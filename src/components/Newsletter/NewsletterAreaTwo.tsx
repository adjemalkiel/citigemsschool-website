import Image from "next/image";


export default function NewsletterAreaTwo() {
  return (
    <>
      {/* <!-- Newsletter Section Start --> */}
      <section className="newsletter-section newsletter-style2 space-bottom fix">
        <div className="container">
          <div className="row g-3">
            <div className="col-12">
              <div className="newsletter-style__wrap position-relative z-1">
                <div className="section-title mb-4 pb-3 text-center section-title-white">
                  <div className="sub__warning mb-2 wow fadeInUp" data-wow-delay=".3s">
                    Newsletter
                  </div>
                  <h2 className="black visible-slowly-bottom fw-bold d-block">
                    Subscribe to our newsletter for daily updates
                  </h2>
                </div>
                <form action="#" className="from-style1 wow fadeInDown">
                  <input type="email" placeholder="Enter your email..." />
                  <button type="button" className="common_btn text-nowrap">
                    SUBSCRIBE NOW
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </button>
                </form>
                <p className="mt-lg-3 mt-2 text-white opacity-75 text-center">We respect your privacy — no spam,
                  only helpful updates.</p>
                <Image src="/assets/img/footer/newsletter-snow.png" alt="Newsletter Snow" width={186} height={156} className="newsletter-snow d-md-block d-none" />
                <Image src="/assets/img/footer/newsletter-pen.png" alt="Newsletter Pen" width={102} height={102} className="newsletter-pen" />
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/footer/newletter-girls.png" alt="Newletter Girls" width={273} height={247} className="news-estrue01 d-xxl-block d-none" />
        <Image src="/assets/img/footer/newsletter-dot.png" alt="Newsletter Dot" width={113} height={104} className="news-estrue02 d-xxl-block d-none" />
        <Image src="/assets/img/footer/newsletter-covid.png" alt="Newsletter Covid" width={95} height={89} className="news-covid cir36 d-lg-block d-none" />
      </section>
    </>
  )
}
