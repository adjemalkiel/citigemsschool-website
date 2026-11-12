import Image from "next/image";
import Link from "next/link";

export default function ServiceAreaThree() {
  return (
    <>

      {/* <!-- Service Program Section Start --> */}
      <section className="service-program-section section-padding fix">
        <div className="container">
          <div className="section-title text-center pb-lg-2 mb-48">
            <div className="sub__text-p1 mb-3 wow fadeInUp" data-wow-delay=".3s">
              My Services
            </div>
            <h2 className="text-dark black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
              Our
              <span className="position-relative text-theme title-ele3">
                Childcare
                <Image src="/assets/img/element/title-ele3.png" alt="Title Ele" width={160} height={17} />
              </span>
              Programs
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="cources-single-items bg1 hover-flip single-items__program03 text-center">
                <Image src="/assets/img/element/ser-p-item-shape1.png" alt="Ser P Item Shape Shape Element" width={306} height={312} className="cources-bg d-xl-block d-none" />
                <div className="">
                  <h3 className="mb-3 lh-1">
                    <Link href="/#programmes" className="black d-block lh-sm visible-slowly-bottom">
                      Infant Care
                    </Link>
                  </h3>
                  <a href="#" className="icon position-relative d-center overflow-hidden mb-3">
                    <Image src="/assets/img/child-logo/service-p1.png" alt="Service P" width={56} height={56} className="object-fit-contain" />
                  </a>
                  <p className="pra-clr mb-3 max-w-258px mx-auto">
                    Gentle, attentive care for newborns and infants, ensuring
                  </p>
                  <Link href="/#programmes" className="read-more-button text-p1 justify-content-center">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="cources-single-items bg2 hover-flip single-items__program03 text-center">
                <Image src="/assets/img/element/ser-p-item-shape2.png" alt="Ser P Item Shape Shape Element" width={306} height={312} className="cources-bg d-xl-block d-none" />
                <div className="">
                  <h3 className="mb-3 lh-1">
                    <Link href="/#programmes" className="black d-block lh-sm visible-slowly-bottom">
                      Homework Assistance
                    </Link>
                  </h3>
                  <a href="#" className="icon position-relative d-center overflow-hidden mb-3">
                    <Image src="/assets/img/child-logo/service-p2.png" alt="Service P" width={56} height={56} className="object-fit-contain" />
                  </a>
                  <p className="pra-clr mb-3 max-w-258px mx-auto">
                    Educational support to help children complete homework
                  </p>
                  <Link href="/#programmes" className="read-more-button text-p1 justify-content-center">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="cources-single-items bg1 hover-flip single-items__program03 text-center">
                <Image src="/assets/img/element/ser-p-item-shape3.png" alt="Ser P Item Shape Shape Element" width={306} height={312} className="cources-bg d-xl-block d-none" />
                <div className="">
                  <h3 className="mb-3 lh-1">
                    <Link href="/#programmes" className="black d-block lh-sm visible-slowly-bottom">
                      Meal Preparation
                    </Link>
                  </h3>
                  <a href="#" className="icon position-relative d-center overflow-hidden mb-3">
                    <Image src="/assets/img/child-logo/service-p1.png" alt="Service P" width={56} height={56} className="object-fit-contain" />
                  </a>
                  <p className="pra-clr mb-3 max-w-258px mx-auto">
                    Nutritious child-friendly meals prepared with care, following any
                  </p>
                  <Link href="/#programmes" className="read-more-button text-p1 justify-content-center">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
              <div className="cources-single-items bg4 hover-flip single-items__program03 text-center">
                <Image src="/assets/img/element/ser-p-item-shape4.png" alt="Ser P Item Shape Shape Element" width={306} height={312} className="cources-bg d-xl-block d-none" />
                <div className="">
                  <h3 className="mb-3 lh-1">
                    <Link href="/#programmes" className="black d-block lh-sm visible-slowly-bottom">
                      Light Housekeeping
                    </Link>
                  </h3>
                  <a href="#" className="icon position-relative d-center overflow-hidden mb-3">
                    <Image src="/assets/img/child-logo/service-p4.png" alt="Service P" width={56} height={56} className="object-fit-contain" />
                  </a>
                  <p className="pra-clr mb-3 max-w-258px mx-auto">
                    Child-related cleaning and organization to keep your home
                  </p>
                  <Link href="/#programmes" className="read-more-button text-p1 justify-content-center">
                    Read More
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/serp-ele1.png" alt="Serp Ele" width={197} height={112} className="ser-ele-left d-lg-block d-none updowns" />
        <Image src="/assets/img/element/serp-ele2.png" alt="Serp Ele" width={229} height={303} className="ser-ele-right d-sm-block d-none updowns" />
      </section>
    </>
  )
}
