import { Link } from 'react-router-dom';

const FAQ = () => {
  const faqs = [
    {
      id: 'collapseOne',
      headingId: 'headingOne',
      question: 'What services do you offer?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: true
    },
    {
      id: 'collapseTwo',
      headingId: 'headingTwo',
      question: 'How can I book an appointment?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: false
    },
    {
      id: 'collapseThree',
      headingId: 'headingThree',
      question: 'Do you offer virtual consultations?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: false
    },
    {
      id: 'collapseFour',
      headingId: 'headingFour',
      question: 'What should I bring to my appointment?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: false
    },
    {
      id: 'collapseFive',
      headingId: 'headingFive',
      question: 'Do you accept health insurance?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: false
    },
    {
      id: 'collapseSix',
      headingId: 'headingSix',
      question: 'What is your cancellation policy?',
      answer: 'I provide secure and convenient telemedicine consultations for follow-ups and advice.',
      show: false
    }
  ];

  return (
    <section className="faq pt-160 pb-160">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="faq__content fade-up">
              <div className="section__header neutral-top">
                <span className="sub-title secondary-text text-uppercase fw-6">FAQ</span>
                <h2 className="title-animation fw-6 mt-16">Questions & Answers</h2>
                <p className="primary-text text-md mt-16">
                  Find clear, helpful answers to the most commonly asked questions about our services.
                </p>
              </div>
              <div className="testimonial__single mt-40">
                <div className="testimonial__author">
                  <div className="thumb">
                    <img src="assets/images/avatar/two.png" alt="Image" />
                  </div>
                  <div className="content">
                    <h6 className="fw-4">Leslie Alexander</h6>
                    <p className="text-md primary-text mt-">President of Sales</p>
                  </div>
                </div>
                <div className="testimonial__content mt-30">
                  <p className="text-md primary-text">
                    Current enables our entire team to align, share every day. Weekly Drops momentum happening and product scales.
                  </p>
                </div>
                <div className="testimonial__intro mt-30">
                  <div className="ratings">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="ph-fill ph-star"></i>
                    ))}
                  </div>
                  <div className="quote">
                    <img src="assets/images/quote.png" alt="Image" />
                  </div>
                </div>
              </div>
              <div className="mt-60">
                <Link to="/contact-us" className="btn-primary">
                  <span className="btn-animated-text" data-text="Contact Us">Contact Us</span>
                  <span className="btn-icon">
                    <i className="ph ph-arrow-up-right"></i>
                    <i className="ph ph-arrow-up-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="faq__inner fade-up" data-delay="300">
              <div className="accordion" id="accordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <h6 className="accordion-header" id={faq.headingId}>
                      <button
                        className={`accordion-button ${faq.show ? '' : 'collapsed'}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${faq.id}`}
                        aria-expanded={faq.show}
                        aria-controls={faq.id}
                      >
                        {faq.question}
                      </button>
                    </h6>
                    <div
                      id={faq.id}
                      className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`}
                      aria-labelledby={faq.headingId}
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="primary-text">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

