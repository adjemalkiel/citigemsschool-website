import Image from "next/image";
import Link from "next/link";


export default function BlogAreaTwo() {
  return (
    <>
      {/* <!-- News Section Start --> */}
      <section className="news-section blog-style2 section-padding fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                Insights & Updates
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                From Our Preschool Blog
              </h2>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xl-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/preschool-bg.png" alt="Preschool Bg" width={644} height={500} className="cources-bg" />
                  <Link href="/blog-details"
                    className="c-image mb-xxl-4 mb-3 px-xl-2 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/blog2-grid1.png" alt="Blog Post Blog Grid" width={596} height={288} className="rounded-5 w-100" />
                    <span className="date-badge position-absolute bottom-0 start-0 m-xxl-4 m-3">
                      Dec 07
                    </span>
                  </Link>
                  <div className="c-content px-xl-4 px-xl-3 pb-lg-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-user-circle text-theme"></i> By Kinez
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-comment-alt text-theme"></i> Comments (04)
                      </span>
                    </div>
                    <h3 className="mb-2 lh-1">
                      <Link href="/blog-details" className="black visible-slowly-bottom">
                        Why Storytelling Matters in Early Learning
                      </Link>
                    </h3>
                    <p className="fs-6 mb-0">
                      Storytelling boosts language skills, sparks imagination, builds focus, and helps
                      children understand
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="cources-single-items">
                  <Image src="/assets/img/element/preschool-bg.png" alt="Preschool Bg" width={644} height={500} className="cources-bg" />
                  <Link href="/blog-details"
                    className="c-image mb-xxl-4 mb-3 px-xl-2 position-relative overflow-hidden">
                    <Image src="/assets/img/blog/blog2-grid2.png" alt="Blog Post Blog Grid" width={596} height={288} className="rounded-5 w-100" />
                    <span className="date-badge position-absolute bottom-0 start-0 m-xxl-4 m-3">
                      Dec 07
                    </span>
                  </Link>
                  <div className="c-content px-xl-4 px-xl-3 pb-lg-1">
                    <div className="d-flex mb-xxl-2 mb-2 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                      <span className="dates-icon mb-0">
                        <i className="far fa-user-circle text-theme"></i> By Kinez
                      </span>
                      <span className="dates-icon mb-0">
                        <i className="far fa-comment-alt text-theme"></i> Comments (04)
                      </span>
                    </div>
                    <h3 className="mb-2 lh-1">
                      <Link href="/blog-details" className="black visible-slowly-bottom">
                        How to Prepare Your Child for Preschool
                      </Link>
                    </h3>
                    <p className="fs-6 mb-0">
                      Simple tips to help parents make the first school experience smooth and joyful.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/ele-bird.png" alt="Ele Bird" width={104} height={74} className="ele-bird updowns" />
        <Image src="/assets/img/element/ele-cake.png" alt="Ele Cake" width={111} height={109} className="ele-cake d-xl-block d-none updowns" />
      </section>
    </>
  )
}
