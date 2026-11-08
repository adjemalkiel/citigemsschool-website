import Image from "next/image";

export default function TeamArea() {
  return (
    <>
      {/* <!-- team Section Start --> */}
      <section className="team-main-section pt-5 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".3s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-1.png" alt="Team Member Team" width={320} height={348} />
                </div>
                <h2 className="fs-24px fw-bold">
                  <a href="#">
                    Sarah Adelia
                  </a>
                </h2>
                <span>
                  Science Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".4s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-2.png" alt="Team Member Team" width={320} height={348} />
                </div>
                <h3>
                  <a href="#">
                    Cathrine Wils
                  </a>
                </h3>
                <span>
                  Art & Culture Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".5s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-3.png" alt="Team Member Team" width={338} height={348} />
                </div>
                <h3>
                  <a href="#">
                    Adam Smith
                  </a>
                </h3>
                <span>
                  Reading Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".6s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-4.png" alt="Team Member Team" width={320} height={348} />
                </div>
                <h3>
                  <a href="#">
                    Sarah Adelia
                  </a>
                </h3>
                <span>
                  Science Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".7s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-5.png" alt="Team Member Team" width={320} height={349} />
                </div>
                <h3>
                  <a href="#">
                    Cathrine Wils
                  </a>
                </h3>
                <span>
                  Art & Culture Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".8s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-6.png" alt="Team Member Team" width={338} height={348} />
                </div>
                <h3>
                  <a href="#">
                    Adam Smith
                  </a>
                </h3>
                <span>
                  Reading Teacher
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
