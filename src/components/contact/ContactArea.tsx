
export default function ContactArea() {
  return (
    <>
      {/* <!-- contact Section Start --> */}
      <section className="contact-main-section pt-5 section-padding fix">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="contact-left-get">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-48">
                    <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                      Contact Us
                    </div>
                    <h2 className="black mb-xl-3 mb-2 visible-slowly-bottom fw-bold d-block">
                      Get in Touch with Us
                    </h2>
                    <p>
                      We’re here to answer your questions and guide you through our kindergarten programs.
                      Contact us for admissions,
                      inquiries, or to schedule a visit and experience our joyful learning environment.
                    </p>
                  </div>
                </div>
                <div className="call-info-contact-wrap mb-4 wow fadeInUp" data-wow-delay=".4s">
                  <div className="call-info_contact">
                    <div className="icon d-center">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="cont">
                      <span>Call support center 24/7</span>
                      <a href="#">
                        01 49 67 88 53 / 01 94 83 59 22
                      </a>
                    </div>
                  </div>
                  <div className="call-info_contact">
                    <div className="icon d-center">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="cont">
                      <span>Write to us</span>
                      <a href="#">
                        citigems2014@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="call-info_contact call-info_contact-location mb-4 wow fadeInUp"
                  data-wow-delay=".6s">
                  <div className="icon d-center rounded-circle">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="cont">
                    <span>Location</span>
                    <a href="#">
                      C/3227 Agla Agongbomey, Cotonou
                    </a>
                  </div>
                </div>
                <div className="header-top-social d-flex align-items-center wow fadeInUp" data-wow-delay=".7s">
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-submit-area rounded-4 wow fadeInUp" data-wow-delay=".5s">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="cont-grp-info">
                      <label htmlFor="name" className="mb-2 fs--18px text-dark">Your Name</label>
                      <input id="name" type="text" placeholder="Enter your name" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cont-grp-info">
                      <label htmlFor="email" className="mb-2 fs--18px text-dark">Your Email</label>
                      <input id="email" type="text" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="cont-grp-info">
                      <label htmlFor="Message" className="mb-2 fs--18px text-dark">Message</label>
                      <textarea id="Message" rows={4} placeholder="Type your message"></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a href="#"
                      className="common_btn mt-2 w-100 py-3 rounded-pill d-center px-2 text-nowrap">
                      Contact Us Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52816169.558200695!2d-161.49265223136007!3d36.102185713814805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1777097225076!5m2!1sen!2sbd"
          style={{ border: '0' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}
