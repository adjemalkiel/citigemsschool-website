import Image from "next/image";
import Link from "next/link";


export default function TeamAreaOne() {
  return (
    <>
      {/* <!-- Team Section Start --> */}
      <section className="team-section space-bottom fix">
        <div className="container">
          <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                Our Teacher
              </div>
              <h2 className="black visible-slowly-bottom fw-bold d-block">
                Meet Our Caring Teachers
              </h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".3s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-1.png" alt="Team Member Team" width={320} height={348} />
                </div>
                <h3>
                  <Link href="/team-details">
                    Sarah Adelia
                  </Link>
                </h3>
                <span>
                  Science Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".6s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-2.png" alt="Team Member Team" width={320} height={348} />
                </div>
                <h3>
                  <Link href="/team-details">
                    Cathrine Wils
                  </Link>
                </h3>
                <span>
                  Art & Culture Teacher
                </span>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="team-items wow fadeInUp" data-wow-delay=".9s">
                <div className="team-thumb">
                  <Image src="/assets/img/team/team-3.png" alt="Team Member Team" width={338} height={348} />
                </div>
                <h3>
                  <Link href="/team-details">
                    Adam Smith
                  </Link>
                </h3>
                <span>
                  Reading Teacher
                </span>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/start-cry.png" alt="Start Cry" width={204} height={188} className="start-cry d-sm-block d-none updowns" />
      </section>
      {/* <!-- End team --> */}
    </>
  )
}
