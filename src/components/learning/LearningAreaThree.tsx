import Image from "next/image";
import Link from "next/link";


export default function LearningAreaThree() {
  return (
    <>
      {/* <!-- learning Section Start --> */}
      <section className="learning-section-02 fix">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-lg-12">
              <div className="learning-box-skill position-relative z-1">
                <div className="thumb1">
                  <Image src="/assets/img/thumbnail/skill-thumbs1.png" alt="Skill Thumbs" width={299} height={383} />
                </div>
                <div className="section-title section-title-white text-center">
                  <div className="sub__warning mb-3 wow fadeInUp" data-wow-delay=".3s">
                    Get your Quality
                  </div>
                  <h2 className="mb-sm-4 mb-3 pb-lg-3 pb-md-1 black visible-slowly-bottom fw-bold d-block">
                    Certified Skills Recognized by Kinez
                  </h2>
                  <div
                    className="d-flex justify-content-center align-items-center flex-wrap gap-xxl-4 gap-xl-3 gap-2">
                    <Link href="/contact" className="common_btn text-nowrap">
                      Apply nOW
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="thumb2">
                  <Image src="/assets/img/thumbnail/skill-thumbs2.png" alt="Skill Thumbs" width={352} height={323} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/assets/img/element/skill-shape-right.png" alt="Skill Shape Right Shape Element" width={217} height={436} className="skill-shape-right d-xl-block d-none position-absolute end-0 bottom-0 updowns" />
        <Image src="/assets/img/element/skill-shpae-left.png" alt="Skill Shpae Left" width={147} height={184} className="skill-shape-left d-xl-block d-none position-absolute start-0 bottom-0 updowns" />
        <Image src="/assets/img/element/skill-plo.png" alt="Skill Plo" width={116} height={83} className="skill-plo" />
        <Image src="/assets/img/element/skill-follower.png" alt="Skill Follower" width={66} height={79} className="skill-flowwer cir36" />
      </section>
    </>
  )
}
