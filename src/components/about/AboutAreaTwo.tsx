import Image from "next/image";
import Link from "next/link";


export default function AboutAreaTwo() {
  return (
    <>
      {/* <!-- About child Section Start --> */}
      <div className="about-child-information space-top fix">
        <div className="container">
          <h2 className="d-none">.</h2>
          <div className="row g-4">
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-auto wow fadeInUp" data-wow-delay=".3s">
              <div className="cources-single-items hover-flip p-0">
                <Link href="/blog-details"
                  className="c-image w-100px icon h-100px mx-auto mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/child-logo/about-abc1.png" alt="About Abc" width={100} height={100} className="rounded-3 h-100 object-fit-contain w-100" />
                </Link>
                <div className="c-content px-0 text-center">
                  <h3 className="mb-2 lh-1 fs-24px fw-bold">
                    Active Learning
                  </h3>
                  <p className="mb-0 lh-base">
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-auto wow fadeInUp" data-wow-delay=".4s">
              <div className="cources-single-items hover-flip p-0">
                <Link href="/blog-details"
                  className="c-image w-100px icon h-100px mx-auto mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/child-logo/about-abc2.png" alt="About Abc" width={100} height={100} className="rounded-3 h-100 object-fit-contain w-100" />
                </Link>
                <div className="c-content px-0 text-center">
                  <h3 className="mb-2 lh-1 fs-24px fw-bold">
                    Expert Teachers
                  </h3>
                  <p className="mb-0 lh-base">
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-auto wow fadeInUp" data-wow-delay=".5s">
              <div className="cources-single-items hover-flip p-0">
                <Link href="/blog-details"
                  className="c-image w-100px icon h-100px mx-auto mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/child-logo/about-abc3.png" alt="About Abc" width={100} height={100} className="rounded-3 h-100 object-fit-contain w-100 " />
                </Link>
                <div className="c-content px-0 text-center">
                  <h3 className="mb-2 lh-1 fs-24px fw-bold">
                    E-Learning Media
                  </h3>
                  <p className="mb-0 lh-base">
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-auto wow fadeInUp" data-wow-delay=".6s">
              <div className="cources-single-items hover-flip p-0">
                <Link href="/blog-details"
                  className="c-image w-100px icon h-100px mx-auto mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/child-logo/about-abc4.png" alt="About Abc" width={100} height={100} className="rounded-3 h-100 object-fit-contain w-100" />
                </Link>
                <div className="c-content px-0 text-center">
                  <h3 className="mb-1 lh-1">
                    <a href="#0" className="black lh-1 visible-slowly-bottom">
                      Full Day Programs
                    </a>
                  </h3>
                  <p className="mb-0 lh-base">
                    In a free hour, when our power of choice is untrammeled and
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
