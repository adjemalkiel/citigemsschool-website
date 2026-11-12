import Image from "next/image";
import Link from "next/link";

export default function BlogArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="news-wrapper mb-48">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Fun Ways to Introduce Your Child to School
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Parent’s Guide to Kindergarten Enrollment
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u1.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        How to Enroll Your Child Easily in Our Kindergarten
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="news-single-items">
                  <Image src="/assets/img/blog/blog-bg.png" alt="Blog Post Blog Bg" width={419} height={437} className="blog-bg" />
                  <div className="news-thumb-area">
                    <div className="user-cont">
                      <Image src="/assets/img/blog/user1.png" alt="User" width={27} height={27} className="user-icon" />
                      <span className="tags-single">Learning</span>
                      <span className="tags-single">06 Min Read</span>
                    </div>
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u4.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u4.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u4.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Creative Ways to Teach Numbers and Letters
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u5.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u5.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u5.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Teaching Colors, Shapes Numbers Through Play
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u6.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u6.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u6.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Teaching Manners and Respect to Young Children
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="news-single-items">
                  <Image src="/assets/img/blog/blog-bg.png" alt="Blog Post Blog Bg" width={419} height={437} className="blog-bg" />
                  <div className="news-thumb-area">
                    <div className="user-cont">
                      <Image src="/assets/img/blog/user1.png" alt="User" width={27} height={27} className="user-icon" />
                      <span className="tags-single">Learning</span>
                      <span className="tags-single">06 Min Read</span>
                    </div>
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u7.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u7.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u7.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Safe Learning Environments for Young Children
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u8.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u8.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u8.png" alt="Blog Post Blog Grid U" width={326} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Encouraging Creativity at Home and School
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
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
                    <Link href="/"
                      className="news-image image-box-effect position-relative overflow-hidden">
                      <Image src="/assets/img/blog/blog-grid-u9.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u9.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100 img" />
                      <Image src="/assets/img/blog/blog-grid-u9.png" alt="Blog Post Blog Grid U" width={327} height={231} className="rounded-3 w-100" />
                    </Link>
                  </div>
                  <div className="news-content">
                    <span className="dates-icon">
                      <i className="far fa-clock text-p1"></i> 09 Comment
                    </span>
                    <div className="new-cont-title">
                      <Link href="/" className="black visible-slowly-bottom">
                        Outdoor Play Ideas for Active Young Learners
                      </Link>
                    </div>
                    <Link href="/" className="read-more d-flex align-items-center gap-2">
                      VIEW DETAILS <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
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
      </section>
    </>
  )
}
