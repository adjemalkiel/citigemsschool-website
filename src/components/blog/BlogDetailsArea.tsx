import Image from "next/image";
import Link from "next/link";

export default function BlogDetailsArea() {
  return (
    <>
      {/* <!-- blog Section Start --> */}
      <section className="blog-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="blog-standard-details">
                <div className="row g-4">
                  <div className="col-12">
                    <div className="blog-standard-item wow fadeInUp" data-wow-delay="0.4s">
                      <Link href="/blog-details" className="thumb d-block mb-4 w-100">
                        <Image src="/assets/img/blog/blog-standard-item1.png" alt="Blog Post Blog Standard Item" width={853} height={400} className="w-100" />
                      </Link>
                      <div
                        className="d-flex justify-content-start mb-3 align-items-center gap-xxl-5 gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                        <span className="dates-icon mb-0 fs-seven fw-bold text-dark">
                          <Image src="/assets/img/blog/user1.png" alt="Blog Post User" width={27} height={27} />
                          <span className="fw-normal">Posted By</span> Annr Peres
                        </span>
                        <span className="dates-icon mb-0 fs-seven fw-bold text-dark">
                          <span className="fw-normal">Posted Datey</span> 25 June, 2026
                        </span>
                      </div>
                      <h2 className="mb-2 fw-medium fs-32px fw-bold">
                        <Link href="/blog-details">
                          Fun Learning Activities for Kindergarten Kids
                        </Link>
                      </h2>
                      <p className="mb-xl-3 mb-2 fw-medium">
                        Fun Learning Activities for Kindergarten Kids combine play and education to
                        engage young minds. Through hands-on games,
                        interactive storytelling, creative arts, and simple experiments, children
                        develop critical thinking, problem-solving,
                        and social skills.
                      </p>
                      <p className="fw-medium">
                        These activities make learning enjoyable, encourage curiosity, and foster
                        confidence, helping each child grow
                        academically, emotionally, and socially in a supportive, playful environment.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-xxl-2 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="fs-24px mb-2 fw-bold">
                        Blog Overview
                      </div>
                      <p className="fw-medium">
                        Fun learning activities help kindergarten children explore new ideas while
                        enjoying play-based education. Through
                        creative and interactive tasks, kids develop curiosity, confidence, and
                        essential early skills.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="quote-box_wrap wow fadeInUp" data-wow-delay="0.6s">
                      <div
                        className="user-thumb-area-grop mb-xl-4 mb-3 d-flex align-items-center gap-xxl-3 gap-2">
                        <div className="user-img">
                          <Image src="/assets/img/testimonial/quotes-thumb-man.png" alt="Quotes Thumb Man" width={56} height={56} />
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name lh-1 text-white mb-1 fs-20px">Nusan Ahamed</div>
                          <span className="designation text-white opacity-75">Toyota Corolla Owner</span>
                        </div>
                      </div>
                      <p className="fs-18px fw-semibold text-white">
                        "Absolutely the best hand wash my car has ever had! They treated my vehicle like
                        a luxury ride, taking extra care with
                        every detail. No scratches, just a deep clean and an amazing shine. Highly
                        recommende who wants professional service and
                        a spotless finish!"
                      </p>
                      <Image src="/assets/img/testimonial/quote-icon.png" alt="Quote Icon Icon" width={100} height={100} className="quote-icon" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-xxl-2 wow fadeInUp" data-wow-delay="0.7s">
                      <div className="fs-24px mb-2 fw-bold">
                        Why Fun Learning Matters
                      </div>
                      <p className="fw-medium">
                        At the kindergarten level, children learn best through play. Activities that
                        combine fun with learning improve focus,
                        problem-solving, and social interaction, while keeping children motivated and
                        happy.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row g-md-4 g-3">
                      <div className="col-md-6">
                        <div className="thumb mb-lg-4 mb-3 w-100">
                          <Image src="/assets/img/testimonial/quite-middle1.png" alt="Quite Middle" width={410} height={269} className="w-100 rounded-3" />
                        </div>
                        <div className="activites-top mb-md-0 mb-2">
                          <h3 className="fs-24px mb-3 fw-bold">
                            Benefits of Fun Learning Activities
                          </h3>
                          <div className="list-of-admission">
                            <div className="row g-2">
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Benefits of Fun Learning Activities
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Improves communication skills
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Builds confidence and independence
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Encourages teamwork and sharing
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="thumb mb-lg-4 mb-3 w-100">
                          <Image src="/assets/img/testimonial/quite-middle2.png" alt="Quite Middle" width={411} height={269} className="w-100 rounded-3" />
                        </div>
                        <div className="activites-top mb-4">
                          <h3 className="fs-24px mb-3 fw-bold">
                            Tips for Parents & Teachers
                          </h3>
                          <div className="list-of-admission">
                            <div className="row g-2">
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Keep activities simple and age-appropriate
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Encourage participation, not perfection
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Mix indoor and outdoor activities
                                </div>
                              </div>
                              <div className="col-sm-12">
                                <div className="d-flex gap-2 align-items-center">
                                  <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                                  Celebrate every child’s effort
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="pb-xxl-2 wow fadeInUp" data-wow-delay="0.5s">
                      <div className="fs-24px mb-2 fw-bold">
                        Conclusion
                      </div>
                      <p className="fw-medium">
                        Fun learning activities make education enjoyable and meaningful for kindergarten
                        kids. When learning feels like play,
                        children develop a lifelong love for discovery and growth.
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div
                      className="d-flex border-top border-bottom py-4 align-items-center gap-3 flex-wrap justify-content-between">
                      <ul className="share-tag d-flex align-items-center gap-3 flex-wrap">
                        <li className="fs-20px fw-bold">
                          Tags:
                        </li>
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
                      </ul>
                      <div
                        className="header-top-social header-top-social-blog  justify-content-center d-flex align-items-center">
                        <a href="#" className="icon sub-font"><i
                          className="fa-brands fa-linkedin"></i></a>
                        <a href="#" className="icon sub-font"><i
                          className="fa-brands fa-twitter"></i> </a>
                        <a href="#" className="icon sub-font"><i
                          className="fa-brands fa-instagram"></i> </a>
                        <a href="#" className="icon sub-font"><i
                          className="fa-brands fa-facebook"></i> </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-lg-3">
                    <div className="fs-32px fw-bold mb-4">
                      02 Comments
                    </div>
                    <div className="replay-area-item mb-4">
                      <div className="thumb">
                        <Image src="/assets/img/testimonial/reply1.png" alt="Reply" width={96} height={96} />
                      </div>
                      <div className="content">
                        <div
                          className="d-flex mb-md-3 mb-2 align-items-start justify-content-between flex-wrap gap-2">
                          <div
                            className="author-info justify-content-start align-items-start text-start flex-column">
                            <span className="designation fw-medium pra-clr">February 10, 2024</span>
                            <div className="name lh-1 text-dark mt-1 fs-20px">Frank Flores</div>
                          </div>
                          <button type="button"
                            className="reply fw-semibold text-white border-0 outline-none">
                            Reply
                          </button>
                        </div>
                        <p className="fw-medium pra-clr">
                          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla sed
                          sit amet finibus eros. Lorem Ipsum is simply dummy
                        </p>
                      </div>
                    </div>
                    <div className="replay-area-item mb-4 middle">
                      <div className="thumb">
                        <Image src="/assets/img/testimonial/reply2.png" alt="Reply" width={96} height={96} />
                      </div>
                      <div className="content">
                        <div
                          className="d-flex mb-md-3 mb-2 align-items-start justify-content-between flex-wrap gap-2">
                          <div
                            className="author-info justify-content-start align-items-start text-start flex-column">
                            <span className="designation fw-medium pra-clr">February 10, 2024</span>
                            <div className="name lh-1 text-dark mt-1 fs-20px">Charlie Tushar</div>
                          </div>
                          <button type="button"
                            className="reply fw-semibold text-white border-0 outline-none">
                            Reply
                          </button>
                        </div>
                        <p className="fw-medium pra-clr">
                          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla
                        </p>
                      </div>
                    </div>
                    <div className="replay-area-item border-bottom pb-4">
                      <div className="thumb">
                        <Image src="/assets/img/testimonial/reply3.png" alt="Reply" width={96} height={96} />
                      </div>
                      <div className="content">
                        <div
                          className="d-flex mb-md-3 mb-2 align-items-start justify-content-between flex-wrap gap-2">
                          <div
                            className="author-info justify-content-start align-items-start text-start flex-column">
                            <span className="designation fw-medium pra-clr">February 10, 2024</span>
                            <div className="name lh-1 text-dark mt-1 fs-20px">Fatma Sariqul</div>
                          </div>
                          <button type="button"
                            className="reply fw-semibold text-white border-0 outline-none">
                            Reply
                          </button>
                        </div>
                        <p className="fw-medium pra-clr">
                          Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                          architecto var sed efficitur turpis gilla sed
                          sit amet finibus eros. Lorem Ipsum is simply dummy
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 pt-4">
                    <div className="fs-32px fw-bold mb-4 pb-4 border-bottom">
                      Leave A Comment
                    </div>
                    <div className="contact-submit-area p-0 bg-transparent leave-comments wow fadeInUp"
                      data-wow-delay=".5s">
                      <div className="row g-4">
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <label htmlFor="name" className="mb-2 fs--18px text-dark">Your Name</label>
                            <input id="name" type="text" placeholder="Enter your name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="cont-grp-info">
                            <label htmlFor="email" className="mb-2 fs--18px text-dark">Your Email</label>
                            <input id="email" type="text" placeholder="Enter your email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="cont-grp-info">
                            <label htmlFor="Message" className="mb-2 fs--18px text-dark">Message</label>
                            <textarea id="Message" rows={4}
                              placeholder="Type your message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12 pt-2">
                          <a href="#" className="common_btn d-inline-flex text-nowrap">
                            SEND MESSAGE
                            <span className="icon_wrapper">
                              <i className="fas fa-long-arrow-alt-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
