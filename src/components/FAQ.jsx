const FAQ = () => {
  const faqs = [
    {
      id: 'collapseOne',
      headingId: 'headingOne',
      question: 'What services do you offer?',
      answer: 'I offer WordPress development, Laravel web applications, custom websites, API integration, and ongoing support.',
      show: true
    },
    {
      id: 'collapseTwo',
      headingId: 'headingTwo',
      question: 'Do you work on project-based or hourly pricing?',
      answer: 'Most of my work is project-based, but hourly pricing is also available depending on project requirements.',
      show: false
    },
    {
      id: 'collapseThree',
      headingId: 'headingThree',
      question: 'Can you redesign or fix existing websites?',
      answer: 'Yes, I can redesign, optimize, or fix bugs in existing WordPress or Laravel websites.',
      show: false
    },
    {
      id: 'collapseFour',
      headingId: 'headingFour',
      question: 'Do you provide website maintenance?',
      answer: 'Yes, I offer monthly website maintenance, performance optimization, and security updates.',
      show: false
    },
    {
      id: 'collapseFive',
      headingId: 'headingFive',
      question: 'How long does a project usually take?',
      answer: 'Project timelines depend on scope and complexity, but most projects take between 1 to 4 weeks.',
      show: false
    },
    {
      id: 'collapseSix',
      headingId: 'headingSix',
      question: 'How can I contact you to start a project?',
      answer: 'You can contact me through the contact form on this website, and I will respond as soon as possible.',
      show: false
    }
  ];

  return (
    <section id="faq" className="faq pt-160 pb-160">
      <div className="container">
        <div className="row gutter-40">
          <div className="col-12 col-md-6 col-xl-7">
            <div className="faq__content fade-up">
              <div className="section__header neutral-top">
                <span className="sub-title secondary-text text-uppercase fw-6">FAQ</span>
                <h2 className="fw-6 mt-16">Frequently Asked Questions</h2>
                <p className="primary-text text-md mt-16">
                  Answers to common questions about my services, process, and pricing.
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
                   This approach helped our team stay aligned, collaborate efficiently, and scale the product with confidence.
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
                <a href="#contact" className="btn-primary" onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#contact');
                  if (element) {
                    if (window.gsap && window.gsap.utils && window.gsap.to) {
                      window.gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: element, offsetY: 100 },
                        ease: "power2.inOut"
                      });
                    } else {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }}>
                  <span className="btn-animated-text" data-text="Contact Us">Contact Me</span>
                  <span className="btn-icon">
                    <i className="ph ph-arrow-up-right"></i>
                    <i className="ph ph-arrow-up-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-5">
            <div className="faq__inner fade-up" data-delay="300">
              <div className="accordion" id="accordion">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <h6 className="accordion-header" id={faq.headingId}>
                      <button className={`accordion-button ${faq.show ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.id}`} aria-expanded={faq.show} aria-controls={faq.id}>
                        {faq.question}
                      </button>
                    </h6>
                    <div id={faq.id} className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`} aria-labelledby={faq.headingId} data-bs-parent="#accordion">
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