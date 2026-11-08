import Image from "next/image";

export default function GalleryAreaTwo() {
  return (
    <>
      {/* <!-- actives Section Start --> */}
      <section className="activites-section pb-xxl-5 pb-4 fix">
        <div className="container position-relative z-1">
          <div className="active-election-box text-center">
            <div className="section-title-area justify-content-center">
              <div className="section-title text-center">
                <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                  Our Preschool Gallery
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                  Kids Activities Gallery
                </h2>
              </div>
            </div>
          </div>
          <div className="active-thumb">
            <Image src="/assets/img/element/actives-shape.png" alt="Actives Shape Shape Element" width={1320} height={601} className="w-100" />
          </div>
        </div>
        <Image src="/assets/img/element/ab-pens.png" alt="Ab Pens" width={92} height={92} className="ab-pens updowns d-xxl-block d-none" />
      </section>
    </>
  )
}
