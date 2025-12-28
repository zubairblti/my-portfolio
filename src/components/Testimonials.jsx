import { useEffect } from 'react';

const Testimonials = () => {
  useEffect(() => {
    // Swiper initialization will be handled by main.js
  }, []);

  const testimonials = [
    {
      rating: 5,
      text: 'Professional, responsive, and technically skilled. Our project was delivered ahead of schedule and functions flawlessly.',
      avatar: 'assets/images/avatar/one.png',
      name: 'Ronald Richards',
      role: 'Medical Assistant'
    },
    {
      rating: 5,
      text: 'Current enables our entire team to align, share every momentum happening and enables our entire team to align, share every day. Weekly Drops momentum happening and product scales.',
      avatar: 'assets/images/avatar/two.png',
      name: 'Darrell Steward',
      role: 'Web Developer'
    },
    {
      rating: 5,
      text: 'Exceptional developer with a strong eye for detail. The final product exceeded our expectations, and the process was smooth from start to finish.',
      avatar: 'assets/images/avatar/three.png',
      name: 'Brooklyn Simmons',
      role: 'Nursing Assistant'
    },
    {
      rating: 5,
      text: 'From the very beginning, he impressed us with his ability to understand our business needs and translate them into a functional and modern web application.',
      avatar: 'assets/images/avatar/four.png',
      name: 'Bessie Cooper',
      role: 'President of Sales'
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="testimonial-two pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header mb-60 text-center fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Testimonials</span>
              <h2 className="title-animation fw-6 mt-16">Real Stories, Real Success</h2>
              <p className="primary-text mt-16">For those who know what they're looking for..</p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial-two__wrapper fade-up">
        <div className="testimonial-two-slider swiper">
          <div className="swiper-wrapper">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
                <div className="testimonial__single-wrapper">
                  <div className="testimonial__single">
                    <div className="testimonial__intro">
                      <div className="ratings">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ph-fill ph-star"></i>
                        ))}
                      </div>
                      <div className="quote">
                        <img src="assets/images/quote.png" alt="Image" />
                      </div>
                    </div>
                    <div className="testimonial__content mt-40">
                      <p className="text-xl primary-text">
                        <q>{testimonial.text}</q>
                      </p>
                    </div>
                  </div>
                  <div className="testimonial__author mt-30">
                    <div className="thumb">
                      <img src={testimonial.avatar} alt="Image" />
                    </div>
                    <div className="content">
                      <h6 className="fw-3">{testimonial.name}</h6>
                      <p className="text-md primary-text mt-">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

