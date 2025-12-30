import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const ContactInfo = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    number: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  // EmailJS Configuration - Replace these with your actual values
  const EMAILJS_SERVICE_ID = 'service_86bvh2l';
  const EMAILJS_TEMPLATE_ID = 'template_iojyaoh';
  const EMAILJS_PUBLIC_KEY = 'qMCm4l3_9uBXaoPjo';

  useEffect(() => {
    // Nice select initialization removed - using input field instead
  }, []);

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
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.number || !formData.service || !formData.message) {
      setToast({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);

    try {
      // Prepare template parameters - adjust field names according to your EmailJS template
      const currentDate = new Date().toLocaleString();
      
      const templateParams = {
        from_name: `${formData.firstname} ${formData.lastname}`,
        from_email: formData.email,
        phone: formData.number,
        phone_number: formData.number,
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
          number: '',
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
      <section id="contact" className="contact pt-160 pb-160">
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
                      <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="input-group">
                          <div className="input-single">
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
                        </div>
                        <div className="input-group">
                          <div className="input-single">
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
                            <input
                              type="tel"
                              name="number"
                              id="contactNumber"
                              placeholder="Phone Number"
                              value={formData.number}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="input-single">
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
                            className="btn--secondary" 
                            title="submit message" 
                            aria-label="submit message"
                            disabled={loading}
                            onClick={(e) => {
                              console.log('Button clicked');
                              // Let form onSubmit handle it
                            }}
                          >
                            <span className="btn-animated-text" data-text={loading ? "Sending..." : "Send Message"}>
                              {loading ? 'Sending...' : 'Send Message'}
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

export default ContactInfo;

