import Image from "next/image";
import Link from "next/link";
import VideoPopup from "../modals/VideoPopup";


export default function ProgramAreaTwo() {
  return (
    <>
      {/* <!-- program play Section Start --> */}
      <section className="program-play-section fix section-padding">
        <div className="container">
          <div className="section-title mb-xxl-5 mb-4 pb-lg-3 pb-0 text-center section-title-white">
            <div className="sub__warning mb-2 wow fadeInUp" data-wow-delay=".3s">
              Our Programs
            </div>
            <h2 className="black visible-slowly-bottom fw-bold d-block">
              Fun & Engaging Preschool Learning
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/program-shpae-bg003.png" alt="Program Shpae Bg" width={419} height={433} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/program-thumb-box1.png" alt="Blog Post Program Thumb Box" width={371} height={221} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                      Early Learning Basics
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Foundational lessons in colors, shapes, letters, and numbers through playful.
                  </p>
                  <Link href="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/program-shpae-bg003.png" alt="Program Shpae Bg" width={419} height={433} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/program-thumb-box2.png" alt="Blog Post Program Thumb Box" width={370} height={221} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                      Storytime & Language Skills
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Daily storytelling, rhymes, and conversations to boost early literacy
                  </p>
                  <Link href="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="cources-single-items">
                <Image src="/assets/img/element/program-shpae-bg003.png" alt="Program Shpae Bg" width={419} height={433} className="cources-bg" />
                <Link href="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <Image src="/assets/img/blog/program-thumb-box3.png" alt="Blog Post Program Thumb Box" width={371} height={221} className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link href="/program-details" className="black lh-1 visible-slowly-bottom">
                      Movement & Outdoor Play
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Physical activities, games, and outdoor exploration to improve .
                  </p>
                  <Link href="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-top">
            <div className="video-wrapper-playground d-center">
              <Image src="/assets/img/thumbnail/play-bideo-ground.png" alt="Play Bideo Ground" width={1320} height={581} className="play-ground w-100" />
              <div className="play-grps">
                PLAY
                <VideoPopup>
                    <a style={{cursor: "pointer"}}
                      className="video-style rounded-circle d-center video-popup">
                      <i className="fa-solid fa-play fs-six"></i>
                    </a>
                </VideoPopup>
                VIDEO
              </div>
            </div>
            <Image src="/assets/img/element/ball-pro.png" alt="Ball Pro" width={181} height={172} className="ball-ele cir36 d-xl-block d-none" />
          </div>
        </div>
        <Image src="/assets/img/element/program-shape-bg3.png" alt="Program Shape Bg Shape Element" width={1920} height={1138} className="program-bg-shape" />
        <Image src="/assets/img/element/pro-cir-golobal.png" alt="Pro Cir Golobal" width={182} height={127} className="program-global d-md-block d-none" />
        <Image src="/assets/img/element/pro-graduation.png" alt="Pro Graduation" width={145} height={107} className="program-education" />
        <Image src="/assets/img/element/pro-star.png" alt="Pro Star" width={140} height={137} className="program-star d-xl-block d-none cir36" />
      </section>

    </>
  )
}
