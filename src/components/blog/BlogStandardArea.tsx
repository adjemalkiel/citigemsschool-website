import Image from "next/image";
import Link from "next/link";

export default function BlogStandardArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-standard-details border-bottom pb-5 mb-5">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="blog-standard-item">
                      <Link href="/blog-details" className="thumb d-block mb-4 w-100 wow fadeInUp"
                        data-wow-delay="0.4s">
                        <Image src="/assets/img/blog/blog-standard-item1.png" alt="Blog Post Blog Standard Item" width={853} height={400} className="w-100" />
                      </Link>
                      <div
                        className="d-flex justify-content-start mb-3 align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                        <span className="dates-icon mb-0 fs-seven fw-bold text-dark">
                          <Image src="/assets/img/blog/user1.png" alt="Blog Post User" width={27} height={27} />
                          Annr Peres
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-calendar text-theme"></i>
                          11 March 2026
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-comment text-theme"></i>
                          0 Comments
                        </span>
                      </div>
                      <h2 className="wow mb-2 fw-medium fs-32px fw-bold fadeInUp" data-wow-delay="0.5s">
                        <Link href="/blog-details">
                          Fun Learning Activities for Kindergarten Kids
                        </Link>
                      </h2>
                      <p className="mb-xl-4 mb-3 pb-xxl-2 wow fadeInUp" data-wow-delay="0.6s">
                        Fun learning activities combine play, movement, and creativity to build early
                        literacy, numeracy, social skills, and
                        curiosity in a joyful kindergarten environment.
                      </p>
                      <Link href="/blog-details" className="common_btn d-inline-flex text-nowrap">
                        Blog DETAILS
                        <span className="icon_wrapper w-36 h-36 min-w-36">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-standard-item">
                      <Link href="/blog-details" className="thumb d-block mb-4 w-100 wow fadeInUp"
                        data-wow-delay="0.4s">
                        <Image src="/assets/img/blog/blog-standard-item2.png" alt="Blog Post Blog Standard Item" width={853} height={400} className="w-100" />
                      </Link>
                      <div
                        className="d-flex justify-content-start mb-3 align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                        <span className="dates-icon mb-0 fs-seven fw-bold text-dark">
                          <Image src="/assets/img/blog/user1.png" alt="Blog Post User" width={27} height={27} />
                          Annr Peres
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-calendar text-theme"></i>
                          11 March 2026
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-comment text-theme"></i>
                          0 Comments
                        </span>
                      </div>
                      <h2 className="wow mb-2 fw-medium fs-32px fw-bold fadeInUp" data-wow-delay="0.5s">
                        <Link href="/blog-details">
                          Creative Art Ideas for Young Learners
                        </Link>
                      </h2>
                      <p className="mb-xl-4 mb-3 pb-xxl-2 wow fadeInUp" data-wow-delay="0.6s">
                        Fun art activities inspire creativity, build fine motor skills, boost
                        imagination, and help young learners express ideas
                        confidently through colorful, hands-on creative experiences.
                      </p>
                      <Link href="/blog-details" className="common_btn d-inline-flex text-nowrap">
                        Blog DETAILS
                        <span className="icon_wrapper w-36 h-36 min-w-36">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="blog-standard-item">
                      <Link href="/blog-details" className="thumb d-block mb-4 w-100 wow fadeInUp"
                        data-wow-delay="0.4s">
                        <Image src="/assets/img/blog/blog-standard-item3.png" alt="Blog Post Blog Standard Item" width={853} height={400} className="w-100" />
                      </Link>
                      <div
                        className="d-flex justify-content-start mb-3 align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                        <span className="dates-icon mb-0 fs-seven fw-bold text-dark">
                          <Image src="/assets/img/blog/user1.png" alt="Blog Post User" width={27} height={27} />
                          Annr Peres
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-calendar text-theme"></i>
                          11 March 2026
                        </span>
                        <span className="dates-icon fw-medium mb-0">
                          <i className="fa-solid fa-comment text-theme"></i>
                          0 Comments
                        </span>
                      </div>
                      <h2 className="wow mb-2 fw-medium fs-32px fw-bold fadeInUp" data-wow-delay="0.5s">
                        <Link href="/blog-details">
                          Healthy Habits for Kindergarten Children
                        </Link>
                      </h2>
                      <p className="mb-xl-4 mb-3 pb-xxl-2 wow fadeInUp" data-wow-delay="0.6s">
                        Healthy habits help children develop strong routines, including balanced eating,
                        physical activity, good hygiene, and
                        positive behaviors that support lifelong wellness and growth.
                      </p>
                      <Link href="/blog-details" className="common_btn d-inline-flex text-nowrap">
                        Blog DETAILS
                        <span className="icon_wrapper w-36 h-36 min-w-36">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                      </Link>
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
            <div className="col-lg-4">
              <div className="blog-right-area">
                <div className="search-in wow fadeInUp" data-wow-delay="0.4s">
                  <form action="#">
                    <input type="text" placeholder="Search Blog" />
                    <button type="button">
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.5s">
                  <div className="fs-32px border-bottom pb-3 mb-4 fw-bold">Cetegories</div>
                  <ul className="blog-category">
                    <li>
                      <a href="#">
                        <span>
                          Early Education
                        </span>
                        <span>
                          (08)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Creative Learning
                        </span>
                        <span>
                          (02)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Child Development
                        </span>
                        <span>
                          (05)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Parenting Tips
                        </span>
                        <span>
                          (08)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          School Life
                        </span>
                        <span>
                          (02)
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          Health & Wellness
                        </span>
                        <span>
                          (04)
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.6s">
                  <div className="fs-32px border-bottom pb-3 mb-4 fw-bold">Recent Post</div>
                  <div className="d-flex flex-column gap-4">
                    <div className="recent-right-item">
                      <Link href="/blog-details" className="thumb w-100 mb-3 d-block">
                        <Image src="/assets/img/blog/recent-side1.png" alt="Blog Post Recent Side" width={355} height={148} className="w-100 rounded-4" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fas fa-calendar"></i>
                          April 12, 2026
                        </div>
                        <Link href="/blog-details" className="fs-20px">
                          Fun & Interactive Learning Activities for Kindergarten Kids
                        </Link>
                      </div>
                    </div>
                    <div className="recent-right-item">
                      <Link href="/blog-details" className="thumb w-100 mb-3 d-block">
                        <Image src="/assets/img/blog/recent-side2.png" alt="Blog Post Recent Side" width={355} height={148} className="w-100 rounded-4" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fas fa-calendar"></i>
                          April 12, 2026
                        </div>
                        <Link href="/blog-details" className="fs-20px">
                          Why Play-Based Learning Is Essential for Early Education
                        </Link>
                      </div>
                    </div>
                    <div className="recent-right-item">
                      <Link href="/blog-details" className="thumb w-100 mb-3 d-block">
                        <Image src="/assets/img/blog/recent-side3.png" alt="Blog Post Recent Side" width={355} height={148} className="w-100 rounded-4" />
                      </Link>
                      <div className="cont">
                        <div className="d-flex mb-1 fs-seven text-theme fw-medium align-items-center gap-2">
                          <i className="fas fa-calendar"></i>
                          April 12, 2026
                        </div>
                        <Link href="/blog-details" className="fs-20px">
                          Healthy Daily Habits Every Kindergarten Child Should Learn
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="search-in wow fadeInUp" data-wow-delay="0.7s">
                  <div className="fs-32px border-bottom pb-3 mb-4 fw-bold">Tags</div>
                  <ul className="blog-tags">
                    <li>
                      <a href="#">
                        Child Safety
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Teacher Tips
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kids Events
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Child Safety
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Kids
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
