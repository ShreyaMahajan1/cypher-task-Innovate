import React from 'react';

export default function Contact() {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Contact</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Contact</li>
            </ol>
          </nav>
        </div>
        {/* End Page Title */}
        <section className="section contact">
          <div className="row gy-4">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-geo-alt" />
                    <h3>Address</h3>
                    <p>
                      20/23 Ganga Road,
                      <br />
                     Jalandhar cantt,144005
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-telephone" />
                    <h3>Call Us</h3>
                    <p>
                      +91 8727828878
                      <br />
                     +91 8196975501
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-envelope" />
                    <h3>Email Us</h3>
                    <p>
                      mahajanshreya792@gmail.com
                      <br />
                      shreyamahajan3456@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="info-box card">
                    <i className="bi bi-clock" />
                    <h3>Open Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card p-4">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* End #main */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </>
  )
}