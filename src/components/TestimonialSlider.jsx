import { useEffect } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      rating: 5,
      text: 'Collaborating with you on our website redesign was a game-changer. Not only did you bring fresh, modern aesthetics, but you also made the user experience seamless and engaging.',
      avatar: 'assets/images/avatar/one.png',
      name: 'Ronald Richards',
      role: 'Medical Assistant'
    },
    {
      rating: 5,
      text: "As someone with a very specific vision, I was worried I wouldn't find a designer who gets it.' absolutely nailed it. Your interpret, and elevate ideas is unmatched. I couldn't be happier.",
      avatar: 'assets/images/avatar/two.png',
      name: 'Leslie Alexander',
      role: 'President of Sales'
    },
    {
      rating: 5,
      text: 'I was genuinely impressed with your ability to understand our brand and translate it into a compelling visual identity. From the first concept to the final design, everything felt thoughtful.',
      avatar: 'assets/images/avatar/three.png',
      name: 'Cody Fisher',
      role: 'Web Designer'
    }
  ];

  // Duplicate testimonials for slider
  const allTestimonials = [...testimonials, ...testimonials];

  useEffect(() => {
    // Initialize swiper for testimonials - matching main.js logic
    if (window.Swiper && document.querySelector('.testimonial__slider')) {
      const slider = document.querySelector('.testimonial__slider');
      
      // Destroy existing swiper instance if exists
      if (slider.swiper) {
        slider.swiper.destroy(true, true);
      }
      
      const totalSlides = slider.querySelectorAll('.swiper-slide').length;
      const enableLoop = totalSlides > 3;
      
      new window.Swiper('.testimonial__slider', {
        slidesPerView: 'auto',
        loop: enableLoop,
        speed: 6000,
        spaceBetween: 24,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
      });
    }

    // Initialize RTL slider
    if (window.Swiper && document.querySelector('.testimonial__slider-rtl')) {
      const sliderRtl = document.querySelector('.testimonial__slider-rtl');
      
      // Destroy existing swiper instance if exists
      if (sliderRtl.swiper) {
        sliderRtl.swiper.destroy(true, true);
      }
      
      const totalSlidesRtl = sliderRtl.querySelectorAll('.swiper-slide').length;
      const enableLoopRtl = totalSlidesRtl > 3;
      
      new window.Swiper('.testimonial__slider-rtl', {
        slidesPerView: 'auto',
        loop: enableLoopRtl,
        speed: 6000,
        spaceBetween: 24,
        centeredSlides: true,
        allowTouchMove: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        },
      });
    }
  }, []);

  return (
    <section className="testimonial pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Testimonials</span>
              <h2 className="title-animation fw-6 mt-16">Words from Happy Clients</h2>
              <p className="primary-text mt-16">
                Genuine feedback from satisfied clients highlighting successful collaborations and creative results
                delivered
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonial__inner">
        <div className="testimonial__slider swiper">
          <div className="swiper-wrapper">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
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
                    <p className="text-xl primary-text">{testimonial.text}</p>
                  </div>
                  <div className="testimonial__author mt-40">
                    <div className="thumb">
                      <img src={testimonial.avatar} alt="Image" />
                    </div>
                    <div className="content">
                      <h6 className="fw-4">{testimonial.name}</h6>
                      <p className="text-md primary-text mt-">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div dir="rtl" className="testimonial__slider-rtl mt-25 swiper">
          <div className="swiper-wrapper">
            {allTestimonials.map((testimonial, index) => (
              <div key={index} className="swiper-slide">
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
                    <p className="text-xl primary-text">{testimonial.text}</p>
                  </div>
                  <div className="testimonial__author mt-40">
                    <div className="thumb">
                      <img src={testimonial.avatar} alt="Image" />
                    </div>
                    <div className="content">
                      <h6 className="fw-4">{testimonial.name}</h6>
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

export default TestimonialSlider;

