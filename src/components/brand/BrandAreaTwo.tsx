import Image from "next/image";


export default function BrandAreaTwo() {
  return (
    <>
      <div className="kids-logo-section pt-5 pb-5 kids-logo-section2 fix">
        <div className="container pb-4">
          <div className="kids-log-wrap pb-5">
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo1.png" alt="School Child Logo" width={193} height={152} />
            </div>
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo2.png" alt="School Child Logo" width={194} height={152} />
            </div>
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo3.png" alt="School Child Logo" width={193} height={152} />
            </div>
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo4.png" alt="School Child Logo" width={193} height={152} />
            </div>
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo5.png" alt="School Child Logo" width={194} height={152} />
            </div>
            <div className="kids-logos bg-transparent">
              <Image src="/assets/img/child-logo/school-child-logo6.png" alt="School Child Logo" width={193} height={152} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
