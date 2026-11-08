import Image from "next/image";
import Link from "next/link";


export default function BlogAreaThree() {
  return (
    <>
      {/* <!-- News Section Start --> */}
      <section className="blog-style2 blog-section-style3 section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Insights & Updates
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  Latest Articles & Parenting Tips
                </h2>
              </div>
            </div>
            <div className="">
              <Link href="/blog" className="common_btn text-nowrap">
                View All Events
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items bg-white-xl">
                  <Image src="/assets/img/element/blog-grid-shape3.png" alt="Blog Grid Shape Shape Element" width={644} height={582} className="cources-bg d-xl-block d-none" />
                  <Link href="/blog-details"
                    className="c-image mb-xxl-4 mb-3 px-xl-2 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/blog-gridv3-s1.png" alt="Blog Post Blog Gridv S" width={580} height={275} className="rounded-5 w-100" />
                  </Link>
                  <div className="c-content px-xl-4 px-xl-3 pb-lg-1">
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="date-badge fw-semibold rounded-pill">
                        Environment
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> July 12, 2026
                      </span>
                    </div>
                    <h3 className="border-bottom pb-4 mb-4 lh-1">
                      <Link href="/blog-details" className="black d-block lh-sm visible-slowly-bottom">
                        Fun & Educational Activities to Keep Kids Engaged at Home
                      </Link>
                    </h3>
                    <Link href="/blog-details" className="common_btn text-nowrap">
                      VIEW BOLG
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pt-lg-3 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items mb-lg-4 mb-3 style__unique-grid">
                  <Image src="/assets/img/element/blog-gridv3-s4.png" alt="Blog Gridv S" width={644} height={275} className="cources-bg d-xl-block d-none" />
                  <Link href="/blog-details" className="c-image mb-0 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/blog-gridv3-s2.png" alt="Blog Post Blog Gridv S" width={230} height={211} className="rounded-5 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="date-badge fw-semibold rounded-pill">
                        Environment
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> July 12, 2026
                      </span>
                    </div>
                    <h3 className="border-bottom pb-xxl-4 mb-3 mb-xxl-4 pb-3 lh-1">
                      <Link href="/blog-details" className="black d-block lh-sm visible-slowly-bottom">
                        Fun Learning Activities to Do at Home
                      </Link>
                    </h3>
                    <Link href="/blog-details" className="common_btn text-nowrap">
                      VIEW BOLG
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="cources-single-items style__unique-grid">
                  <Image src="/assets/img/element/blog-gridv3-s4.png" alt="Blog Gridv S" width={644} height={275} className="cources-bg d-xl-block d-none" />
                  <Link href="/blog-details" className="c-image mb-0 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/blog-gridv3-s3.png" alt="Blog Post Blog Gridv S" width={230} height={211} className="rounded-5 w-100" />
                  </Link>
                  <div className="c-content p-0">
                    <div
                      className="d-flex justify-content-between mb-3 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="date-badge fw-semibold rounded-pill">
                        Environment
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="fa-solid fa-calendar-days text-theme"></i> July 12, 2026
                      </span>
                    </div>
                    <h3 className="border-bottom pb-xxl-4 mb-3 mb-xxl-4 pb-3 lh-1">
                      <Link href="/blog-details" className="black d-block lh-sm visible-slowly-bottom">
                        Building Strong Bonds Between Nanny and Child
                      </Link>
                    </h3>
                    <Link href="/blog-details" className="common_btn text-nowrap">
                      VIEW BOLG
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/about-book.png" alt="About Book" width={100} height={100} className="book-bird updowns" />
        <Image src="/assets/img/element/blog-spring.png" alt="Blog Spring" width={95} height={102} className="ele-cake d-xl-block d-none updowns" />
      </section>
    </>
  )
}
