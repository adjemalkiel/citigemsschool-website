import Image from "next/image";


export default function BrandAreaOne() {
  return (
    <>
      <div className="kids-logo-section fix mb-4">
        <div className="container">
          <div className="kids-log-wrap">
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon.png" alt="Kids Icon Icon" width={104} height={104} />
            </div>
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon2.png" alt="Kids Icon Icon" width={104} height={104} />
            </div>
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon3.png" alt="Kids Icon Icon" width={104} height={104} />
            </div>
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon4.png" alt="Kids Icon Icon" width={110} height={104} />
            </div>
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon5.png" alt="Kids Icon Icon" width={92} height={104} />
            </div>
            <div className="kids-logos">
              <Image src="/assets/img/icon/kids-icon6.png" alt="Kids Icon Icon" width={96} height={104} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
