import Image from "next/image";
import Link from "next/link";


export default function ProgramDetailsArea() {
  return (
    <>

      {/* <!-- event Section Start --> */}
      <section className="our-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="thumb w-100 wow fadeInUp mb-4" data-wow-delay="0.4s">
            <Image src="/assets/img/blog/program-details-big.png" alt="Blog Post Program Details Big" width={1320} height={622} className="w-100" />
          </div>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="program-details-left-content">
                <div className="event-details-head-box">
                  <div
                    className="d-flex justify-content-start mb-3 align-items-center gap-xl-4 gap-lg-3 gap-2 flex-wrap">
                    <span className="date-badge fw-semibold rounded-pill">
                      Kindergarten
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="fa-solid fa-circle-user text-theme"></i>
                      By Kinez
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="fa-solid fa-circle-play text-theme"></i>
                      30 Classes
                    </span>
                    <span className="dates-icon mb-0">
                      <i className="fa-solid fa-star ratting"></i>
                      3.4 (36 Review)
                    </span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-delay="0.5s">
                    End-of-Year Picnic – Last Day of
                    School Celebration
                  </h2>
                  <p className="mb-xxl-4 mb-lg-3 mb-3 wow fadeInUp" data-wow-delay="0.6s">
                    Celebrate the end of a wonderful school year with our fun-filled End-of-Year Picnic!
                    Children enjoy games, outdoor
                    activities, group play, and tasty treats, creating joyful memories. This special day
                    honors achievements, friendships,
                    and growth, while giving kids a safe, happy environment to celebrate their
                    accomplishments and look forward to the year
                    ahead.
                  </p>
                </div>
                <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.4s">
                  <h3 className="fs-24px fw-bold mb-2">
                    Program Overview
                  </h3>
                  <p className="fw-medium">
                    Mark the end of the school year with a joyful picnic celebration! Children, teachers,
                    and parents come together for a
                    day of fun, games, and memories. This event honors the achievements, friendships, and
                    growth of every child.
                  </p>
                </div>
                <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.4s">
                  <h3 className="fs-24px mb-3 fw-bold">
                    Program Schedule
                  </h3>
                  <div className="list-of-admission">
                    <div className="row g-2">
                      <div className="col-sm-12">
                        <div className="mb-1 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Welcome & Opening Ceremony
                        </div>
                        <p className="fw-medium">
                          Warm welcome by teachers with cheerful music and group greetings.
                        </p>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-1 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Outdoor Games & Sports
                        </div>
                        <p className="fw-medium">
                          Simple races, ball games, parachute play, and team fun activities.
                        </p>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-1 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Awards & Appreciation
                        </div>
                        <p className="fw-medium">
                          Certificates, small gifts, and appreciation moments for students and
                          teachers.
                        </p>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-1 d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Photo & Memory Session
                        </div>
                        <p className="fw-medium">
                          Group photos, fun snapshots, and memory-making moments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.4s">
                  <h3 className="fs-24px mb-3 fw-bold">
                    Learning & Social Benefits
                  </h3>
                  <div className="list-of-admission">
                    <div className="row g-2">
                      <div className="col-sm-6">
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Encourages teamwork and cooperation
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Celebrates achievements in a safe environment
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Boosts confidence and self-expression
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex gap-2 align-items-center">
                          <Image src="/assets/img/icon/check-badge.png" alt="Check Badge" width={18} height={18} />
                          Strengthens friendships and social bonds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="evento-info mb-4">
                <Image src="/assets/img/element/event-info-shape.png" alt="Event Info Shape Shape Element" width={419} height={556} className="even-ele" />
                <h3 className="border-bottom pb-xxl-4 pb-3 mb-xxl-4 mb-3">Program Details</h3>
                <ul className="liting d-flex flex-column gap-xxl-3 gap-2 mb-4 pb-xxl-2">
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Date :</span>
                    <span className="ending">November 08, 2026</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Start Time
                      :</span>
                    <span className="ending">10:00 AM – 1:00 PM</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Location :</span>
                    <span className="ending">School Garden & Picnic</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Age Group :</span>
                    <span className="ending">Preschool Students</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Students :</span>
                    <span className="ending text-break">60</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Lessons :</span>
                    <span className="ending">15</span>
                  </li>
                </ul>
                <div className="text-center">
                  <Link href="/contact"
                    className="common_btn mb-3 w-100 justify-content-between text-center common_btn_outline text-nowrap">
                    <span className="text-center">
                      THE COURSE FREE $69.00
                    </span>
                    <span className="icon_wrapper w-36 min-w-36 h-36">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                  <Link href="/contact"
                    className="common_btn w-100 justify-content-between text-center text-nowrap">
                    Get tickets now
                    <span className="icon_wrapper w-36 min-w-36 h-36">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </Link>
                </div>
                <div className="header-top-social mt-4 justify-content-center d-flex align-items-center">
                  <a href="#" className="fw-semibold text-dark">
                    Follow On:
                  </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
              <div className="thumb pt-xl-2 w-100 wow fadeInDown" data-wow-delay="0.6s">
                <Image src="/assets/img/blog/program-right-details.png" alt="Blog Post Program Right Details" width={419} height={403} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
