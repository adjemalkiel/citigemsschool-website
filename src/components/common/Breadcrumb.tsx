import Image from "next/image";
import Link from "next/link";

interface BreadcrumbProps { 
  title: string
  subtitle: string
}

export default function Breadcrumb({ title, subtitle }: BreadcrumbProps) {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-breadcrumb-section fix position-relative">
        <div className="container">
          <div className="breadcrumb-content">
            <h1 className="text-center">
              {title}
            </h1>
            <ul className="bread-link">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                {subtitle}
              </li>
            </ul>
          </div>
        </div>
        <Image src="/assets/img/breadcrumb/bread-ele5.png" alt="Bread Ele" width={122} height={104} className="bread-ele5 d-lg-block d-none zoom-in" />
        <Image src="/assets/img/breadcrumb/bread-ele4.png" alt="Bread Ele" width={97} height={73} className="bread-ele4 d-xl-block d-none zoom-in" />
        <Image src="/assets/img/breadcrumb/bread-ele3.png" alt="Bread Ele" width={91} height={84} className="bread-ele3 d-md-block d-none zoom-in" />
        <Image src="/assets/img/breadcrumb/bread-ele2.png" alt="Bread Ele" width={86} height={81} className="bread-ele2 d-xxl-block d-none updowns" />
        <Image src="/assets/img/breadcrumb/bread-ele1.png" alt="Bread Ele" width={132} height={168} className="bread-ele1 updowns" />
        <Image src="/assets/img/element/break-shape.png" alt="Break Shape Shape Element" width={1920} height={231} className="bread-shape" />
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
