import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // EmailJS Configuration - Same as ContactInfo
  const EMAILJS_SERVICE_ID = 'service_86bvh2l';
  const EMAILJS_TEMPLATE_ID = 'template_iojyaoh';
  const EMAILJS_PUBLIC_KEY = 'qMCm4l3_9uBXaoPjo';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setToast({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare template parameters
      const currentDate = new Date().toLocaleString();
      
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone: formData.phone,
        phone_number: formData.phone,
        service: formData.service,
        message: formData.message,
        firstname: formData.firstname,
        lastname: formData.lastname,
        date: currentDate,
        time: currentDate
      };
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200 || response.text === 'OK') {
        setToast({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        
        // Reset form element
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        throw new Error('Unexpected response status');
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Code:', error.code);
      console.error('Error Text:', error.text);
      
      let errorMessage = 'Failed to send message. Please try again or contact us directly.';
      
      if (error.text) {
        errorMessage = `Error: ${error.text}`;
      } else if (error.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setToast({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <section className="contact-two pt-160" id="contactSec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-two__inner">
                <div className="row gutter-40">
                  <div className="col-12 col-lg-6 col-xl-5">
                    <div className="contact-two__content">
                      <div className="section__header fade-up">
                        <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">CONTACT US</span>
                        <h2 className="title-animation fw-6 mt-12">Together We Achieve Greater Success</h2>
                      </div>
                      <div className="contact-content-inner mt-60 fade-up" data-delay="300">
                        <p className="text-xl">
                          <a href="tel:239-555-0108-0977">(239) 555-0108-0977</a>
                        </p>
                        <p className="text-sm primary-text mt-8">Call us for urgent</p>
                        <div className="mt-30">
                          <a href="#contactSec" className="btn-primary">
                            <span className="btn-animated-text" data-text="Get Direction">Get Direction</span>
                            <span className="btn-icon">
                              <i className="ph ph-arrow-up-right"></i>
                              <i className="ph ph-arrow-up-right"></i>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 col-xl-7">
                    <div className="contact__form fade-up">
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="input-group">
                          <div className="input-single">
                            <label htmlFor="contactFirstName">First Name <sup>*</sup></label>
                            <input
                              type="text"
                              name="firstname"
                              id="contactFirstName"
                              placeholder="First Name"
                              value={formData.firstname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="contactLastName">Last Name <sup>*</sup></label>
                            <input
                              type="text"
                              name="lastname"
                              id="contactLastName"
                              placeholder="Last Name"
                              value={formData.lastname}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="contactEmail">Your Email <sup>*</sup></label>
                            <input
                              type="email"
                              name="email"
                              id="contactEmail"
                              placeholder="Email Address"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="input-single">
                            <label htmlFor="contactNumber">Phone Number <sup>*</sup></label>
                            <input
                              type="tel"
                              name="phone"
                              id="contactNumber"
                              placeholder="Phone Number"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                          
                          <div className="input-single">
                            <label htmlFor="contactService">Service <sup>*</sup></label>
                            <input
                              type="text"
                              name="service"
                              id="contactService"
                              placeholder="Service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        <div className="input-single">
                          <label htmlFor="contactMessage">Your Message <sup>*</sup></label>
                          <textarea
                            name="message"
                            id="contactMessage"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          ></textarea>
                        </div>
                        <div className="mt-40">
                          <button 
                            type="submit" 
                            className="btn-primary" 
                            title="submit message" 
                            aria-label="submit message"
                            disabled={loading}
                          >
                            <span className="btn-animated-text" data-text={loading ? "Sending..." : "Send Message"}>
                              {loading ? 'Sending...' : 'Send Message'}
                            </span>
                            <span className="btn-icon">
                              <i className="ph ph-arrow-up-right"></i>
                              <i className="ph ph-arrow-up-right"></i>
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
    </>
  );
};

export default Contact;

