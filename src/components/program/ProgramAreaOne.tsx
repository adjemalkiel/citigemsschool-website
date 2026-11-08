import Image from "next/image";

interface ProgramAreaOneProps { 
  style_2?: boolean
}
export default function ProgramAreaOne({ style_2 }: ProgramAreaOneProps) {
  return (
    <>
      {/* <!-- Program Section Start --> */}
      <div className={`program-history-section fix  ${style_2 ? 'mt-5' : 'space-top'} `}>
        <Image src="/assets/img/element/histore-left.png" alt="Histore Left" width={204} height={188} className="histore-ele position-absolute top-0 start-0 updowns" />
        <div className="container">
          <div className="row g-4">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="program-item-wrap style1 wow fadeInUp" data-wow-delay="0.3s">
                <div className="program-items text-center">
                  <div className="thumb">
                    <Image src="/assets/img/icon/program-icon1.png" alt="Program Icon Icon" width={88} height={88} />
                  </div>
                  <div className="cont">
                    <div className="mb-0 preschool-title">
                      Preschool
                    </div>
                    <span>
                      (02 -03 years)
                    </span>
                    <p className="mt-2">
                      Fun, safe learning environment where children grow, play
                    </p>
                  </div>
                </div>
                <div className="bg-area">
                  <svg viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.7763 38.3958C62.0118 -5.39143 255.682 -2.60657 281.512 33.6348C307.342 69.8686 310.388 259.491 281.198 283.006C252.008 306.521 45.3784 311.686 24.4488 278.367C3.51919 245.056 -2.51318 64.833 21.7763 38.3958Z"
                      fill="#F2E9FF" />
                    <path
                      d="M17.311 34.4906C58.9068 -10.7784 259.122 -7.89404 285.82 29.5645C312.519 67.023 315.673 263.052 285.496 287.364C255.319 311.676 41.7108 317.012 20.0758 282.567C-1.56502 248.129 -7.80203 61.8236 17.311 34.4906Z"
                      stroke="#F2E9FF" strokeWidth="2" strokeMiterlimit="10"
                      strokeDasharray="4.99 4.99" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="program-item-wrap style2 wow fadeInUp" data-wow-delay="0.6s">
                <div className="program-items text-center">
                  <div className="thumb">
                    <Image src="/assets/img/icon/program-icon2.png" alt="Program Icon Icon" width={88} height={88} />
                  </div>
                  <div className="cont">
                    <div className="mb-0 preschool-title">
                      Kindergarten KG-1
                    </div>
                    <span>
                      (05–06 Years )
                    </span>
                    <p className="mt-2">
                      A safe, fun, and nurturing place where young children learn.
                    </p>
                  </div>
                </div>
                <div className="bg-area">
                  <svg viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.7763 38.3958C62.0118 -5.39143 255.682 -2.60657 281.512 33.6348C307.342 69.8686 310.388 259.491 281.198 283.006C252.008 306.521 45.3784 311.686 24.4488 278.367C3.51922 245.056 -2.51314 64.833 21.7763 38.3958Z"
                      fill="#EBFEEA" />
                    <path
                      d="M17.3111 34.4906C58.9068 -10.7784 259.122 -7.89404 285.821 29.5645C312.519 67.023 315.673 263.052 285.496 287.364C255.319 311.676 41.7108 317.012 20.0759 282.567C-1.56499 248.129 -7.80199 61.8236 17.3111 34.4906Z"
                      stroke="#EBFEEA" strokeWidth="2" strokeMiterlimit="10"
                      strokeDasharray="4.99 4.99" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="program-item-wrap style3 wow fadeInUp" data-wow-delay="0.9s">
                <div className="program-items text-center">
                  <div className="thumb">
                    <Image src="/assets/img/icon/program-icon3.png" alt="Program Icon Icon" width={88} height={88} />
                  </div>
                  <div className="cont">
                    <div className="mb-0 preschool-title">
                      Toddler
                    </div>
                    <span>
                      (02 -03 years)
                    </span>
                    <p className="mt-2">
                      Caring environment helping toddlers learn, play
                    </p>
                  </div>
                </div>
                <div className="bg-area">
                  <svg viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.7763 38.3958C62.0119 -5.39143 255.682 -2.60657 281.512 33.6348C307.342 69.8686 310.388 259.491 281.198 283.006C252.008 306.521 45.3784 311.686 24.4488 278.367C3.51922 245.056 -2.51315 64.833 21.7763 38.3958Z"
                      fill="#DBFFF9" />
                    <path
                      d="M17.3111 34.4906C58.9068 -10.7784 259.122 -7.89404 285.821 29.5645C312.519 67.023 315.673 263.052 285.496 287.364C255.319 311.676 41.7108 317.012 20.0759 282.567C-1.56499 248.129 -7.80199 61.8236 17.3111 34.4906Z"
                      stroke="#DBFFF9" strokeWidth="2" strokeMiterlimit="10"
                      strokeDasharray="4.99 4.99" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="program-item-wrap style4 wow fadeInUp" data-wow-delay="1s">
                <div className="program-items text-center">
                  <div className="thumb">
                    <Image src="/assets/img/icon/program-icon4.png" alt="Program Icon Icon" width={88} height={88} />
                  </div>
                  <div className="cont">
                    <div className="mb-0 preschool-title">
                      Pre-K Program
                    </div>
                    <span>
                      (04 -05 years)
                    </span>
                    <p className="mt-2">
                      Our Pre-K program builds early learning skills through
                    </p>
                  </div>
                </div>
                <div className="bg-area">
                  <svg viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.7763 38.3958C62.0119 -5.39143 255.682 -2.60657 281.512 33.6348C307.342 69.8686 310.388 259.491 281.198 283.006C252.008 306.521 45.3784 311.686 24.4488 278.367C3.51922 245.056 -2.51315 64.833 21.7763 38.3958Z"
                      fill="#FFE3EC" />
                    <path
                      d="M17.3111 34.4906C58.9068 -10.7784 259.122 -7.89404 285.821 29.5645C312.519 67.023 315.673 263.052 285.496 287.364C255.319 311.676 41.7108 317.012 20.0759 282.567C-1.56499 248.129 -7.80199 61.8236 17.3111 34.4906Z"
                      stroke="#FFE3EC" strokeWidth="2" strokeMiterlimit="10"
                      strokeDasharray="4.99 4.99" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End program --> */}
    </>
  )
}
