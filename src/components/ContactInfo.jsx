import { useEffect } from 'react';

const ContactInfo = () => {
  useEffect(() => {
    // Initialize nice select for contact form
    if (window.jQuery && window.jQuery().niceSelect) {
      window.jQuery('.select').niceSelect();
    }
  }, []);

  return (
    <section className="contact pt-160 pb-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact__inner">
              <div className="row">
                <div className="col-12">
                  <div className="section__header text-center mb-60 fade-up">
                    <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Contact Us</span>
                    <h2 className="title-animation fw-6 mt-16">Turn Ideas Into Reality</h2>
                  </div>
                </div>
              </div>
              <div className="row gutter-40">
                <div className="col-12 col-xl-6">
                  <div className="contact__info">
                    <div className="contact__info-single fade-up">
                      <div className="thumb">
                        <i className="ph-thin ph-phone-call"></i>
                      </div>
                      <div className="content">
                        <h5>Phone</h5>
                        <p>
                          <a href="tel:239-555-0108-0977">(239) 555-0108-0977</a>
                        </p>
                      </div>
                    </div>
                    <div className="contact__info-single mt-30 fade-up">
                      <div className="thumb">
                        <i className="ph-thin ph-chats"></i>
                      </div>
                      <div className="content">
                        <h5>Email</h5>
                        <p>
                          <a href="mailto:jennings@example.com">jennings@example.com</a>
                        </p>
                      </div>
                    </div>
                    <div className="contact__info-single mt-30 fade-up">
                      <div className="thumb">
                        <i className="ph-thin ph-map-pin"></i>
                      </div>
                      <div className="content">
                        <h5>Address</h5>
                        <p>
                          <a
                            href="https://maps.app.goo.gl/N9tAtWwQPijVxgr58"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            6391 Elgin St. Celina, Delaware 10299
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="contact__form fade-left">
                    <form action="#" method="post">
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="text"
                            name="contact-firstname"
                            id="contactFirstName"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="input-single">
                          <input
                            type="text"
                            name="contact-lastname"
                            id="contactLastName"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                      </div>
                      <div className="input-group">
                        <div className="input-single">
                          <input
                            type="email"
                            name="contact-email"
                            id="contactEmail"
                            placeholder="Email Address"
                            required
                          />
                        </div>
                        <div className="input-single">
                          <input
                            type="number"
                            name="contact-number"
                            id="contactNumber"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                      </div>
                      <div className="input-single">
                        <select name="service" className="service-select select">
                          <option data-display="Choose Service">Choose Service</option>
                          <option value="design">Design</option>
                          <option value="develop">Development</option>
                          <option value="marketing">Marketing</option>
                          <option value="security">Security</option>
                        </select>
                      </div>
                      <div className="input-single">
                        <textarea
                          name="contact-message"
                          id="contactMessage"
                          placeholder="Message"
                          required
                        ></textarea>
                      </div>
                      <div className="mt-40">
                        <button type="submit" className="btn--secondary" title="submit message" aria-label="submit message">
                          <span className="btn-animated-text" data-text="Send Message">
                            Send Message
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

