import Image from "next/image";

import Breadcrumb from '@/components/common/Breadcrumb'
import FooterFour from '@/layouts/footers/FooterFour'
import HeaderFour from '@/layouts/headers/HeaderFour'
import Wrapper from '@/layouts/Wrapper'
import Link from 'next/link'

import { Metadata } from "next"
export const metadata: Metadata = {
    title: "404 Page Citigems Bilingual School",
    description: "404  — Citigems Bilingual School.",
}

export default function NotFound() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title='404 Page' subtitle='404 Page' />
      <section className="error-section pt-5 section-padding fix">
        <div className="container">
          <div className="error-thumb wow fadeInUp" data-wow-delay="0.4s">
            <Image src="/assets/img/thumbnail/error-thumb.png" alt="Error Thumb" width={895} height={700} />
          </div>
          <div className="error-content">
            <h2 className="mb-sm-3 mb-2 wow fadeInUp wow fadeInUp" data-wow-delay="0.5s">
              Oops! Page Not Found
            </h2>
            <p className="mb-48 wow fadeInUp" data-wow-delay="0.6s">
              It looks like the page you’re looking for doesn’t exist. Don’t worry! You can return to the
              homepage, explore our
              programs, or contact us for assistance.
            </p>
            <Link href="/" className="common_btn text-nowrap wow fadeInUp" data-wow-delay="0.7s">
              Go to Homepage
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <FooterFour />
    </Wrapper>
  )
}
