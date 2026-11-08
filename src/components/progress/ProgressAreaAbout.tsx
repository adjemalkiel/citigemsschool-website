import Image from "next/image";

export default function ProgressAreaAbout() {
  return (
    <>
      {/* <!-- trust progress Section Start --> */}
      <div className="trust-progress-section space-bottom fix">
        <div className="container">
          <div className="timeline">
            <div className="timeline-inner style1">
              <div className="event">
                <div className="content text-end">
                  <h3>Our Beginning</h3>
                  <p>Our kindergarten was founded with a vision to provide safe, joyful.</p>
                </div>
                <div className="year-box">
                  <span className="year vertical-text">2015</span>
                  <Image src="/assets/img/element/start-top.png" alt="Start Top" width={8} height={108} />
                </div>
              </div>
              <div className="event">
                <div className="content text-end">
                  <h3>Trusted by Families</h3>
                  <p>Recognized as a trusted kindergarten by parents for quality education</p>
                </div>
                <div className="year-box">
                  <span className="year vertical-text">2023</span>
                  <Image src="/assets/img/element/start-top.png" alt="Start Top" width={8} height={108} />
                </div>
              </div>
            </div>
            <div className="thumb-line d-md-block d-none">
              <Image src="/assets/img/element/drived-line.png" alt="Drived Line" width={1320} height={55} />
            </div>
            <div className="timeline-inner style2 ms-auto pe-lg-2">
              <div className="event">
                <div className="content text-end">
                  <h3>Curriculum Enhancement</h3>
                  <p>Introduced creative learning programs, early literacy, and activity</p>
                </div>
                <div className="year-box">
                  <Image src="/assets/img/element/start-bottom.png" alt="Start Bottom" width={8} height={108} />
                  <span className="year vertical-text">2024</span>
                </div>
              </div>
              <div className="event">
                <div className="content text-end">
                  <h3>Continuing Our Journey</h3>
                  <p>Committed to inspiring confident, happy learners through innovative early</p>
                </div>
                <div className="year-box">
                  <Image src="/assets/img/element/start-bottom.png" alt="Start Bottom" width={8} height={108} />
                  <span className="year vertical-text">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/hero-pulp.png" alt="Hero Pulp" width={92} height={83} className="hero-pulp d-sm-block d-none position-absolute bottom-0 end-0 mb-xl-5 mb-4 me-lg-5 zoom-in" />
      </div>
    </>
  )
}
