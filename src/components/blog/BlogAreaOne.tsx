import Image from "next/image";
import Link from "next/link";


export default function BlogAreaOne() {
  return (
    <>
      {/* <!-- News Section Start --> */}
      <section className="news-section space-top fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                Our Blog & News
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                Read Our Latest News
              </h2>
            </div>
          </div>
          <div className="news-wrapper">
            <div className="row justify-content-center g-4">
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="news-single-items">
                  <Image src="/assets/img/blog/blog-bg.png" alt="Blog Post Blog Bg" width={419} height={437} className="blog-bg" />
                  <div className="news-thumb-area">
                    <div className="user-cont">
                      <Image src="/assets/img/blog/user1.png" alt="User" width={27} height={27} className="user-icon" />
                      <span className="tags-single">Learning</span>
                      <span className="tags-single">06 Min Read</span>
                    </div>
                    <Link href="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/news1.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news1.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news1.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/blog-details" className="black visible-slowly-bottom">
                        Fun Ways to Introduce Your Child to School
                      </Link>
                    </div>
                    <Link href="/blog-details" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="news-single-items">
                  <Image src="/assets/img/blog/blog-bg.png" alt="Blog Post Blog Bg" width={419} height={437} className="blog-bg" />
                  <div className="news-thumb-area">
                    <div className="user-cont">
                      <Image src="/assets/img/blog/user2.png" alt="User" width={28} height={28} className="user-icon" />
                      <span className="tags-single">Learning</span>
                      <span className="tags-single">06 Min Read</span>
                    </div>
                    <Link href="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/news2.png" alt="Blog Post News" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news2.png" alt="Blog Post News" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news2.png" alt="Blog Post News" width={326} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/blog-details" className="black visible-slowly-bottom">
                        Parent’s Guide to Kindergarten Enrollment
                      </Link>
                    </div>
                    <Link href="/blog-details" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                <div className="news-single-items">
                  <Image src="/assets/img/blog/blog-bg.png" alt="Blog Post Blog Bg" width={419} height={437} className="blog-bg" />
                  <div className="news-thumb-area">
                    <div className="user-cont">
                      <Image src="/assets/img/blog/user3.png" alt="User" width={28} height={28} className="user-icon" />
                      <span className="tags-single">Learning</span>
                      <span className="tags-single">06 Min Read</span>
                    </div>
                    <Link href="/blog-details"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/news3.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news3.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/news3.png" alt="Blog Post News" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/blog-details" className="black visible-slowly-bottom">
                        How to Enroll Your Child Easily in Our Kindergarten
                      </Link>
                    </div>
                    <Link href="/blog-details" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/book.png" alt="Book" width={134} height={108} className="book-ele-news updowns d-md-block d-none" />
      </section>
    </>
  )
}
