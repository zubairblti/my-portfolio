const Experience = () => {
  const experienceData = [
    {
      period: 'Mar, 2025 - Current',
      company: 'Envato Market',
      title: 'Lead UX Designer',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'tertiary-text'
    },
    {
      period: '2018 - 2022',
      company: 'Google',
      title: 'UX Designer',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'secondary-text'
    },
    {
      period: '2015 - 2017',
      company: 'Apple',
      title: 'Human Interface Designer',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'tertiary-text'
    }
  ];

  const educationData = [
    {
      period: '2016-2018',
      institution: 'Oxford University',
      title: 'Diploma in Computer',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'secondary-text'
    },
    {
      period: '2018 - 2022',
      institution: 'Harverd University',
      title: 'BSc in Engineering',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'tertiary-text'
    },
    {
      period: '2015 - 2017',
      institution: 'University of Denmark',
      title: 'Laravel Development',
      description: 'I help my clients succeed by creating Web development, digital experiences & communicate clearly.',
      color: 'secondary-text'
    }
  ];

  return (
    <section id="experience" className="experience pt-160 scale-wrapper">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-xl-8">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                Education & Experience
              </span>
              <h2 className="title-animation fw-6 mt-16">Empowering Design with Purpose</h2>
              <p className="primary-text mt-20">
                Creating meaningful, user-focused designs that drive engagement, impact, and brand success.
              </p>
            </div>
          </div>
        </div>
        <div className="row gutter-60 align-items-center">
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="experience__single">
              <div className="experience__single-intro text-center">
                <h5 className="fw-6">My Experience</h5>
              </div>
              <div className="experience__single-wrapper mt-40">
                {experienceData.map((exp, index) => (
                  <div key={index} className="experience__single-content scale-up">
                    <div className={`experience__content-intro ${index === 0 ? 'neutral-top' : ''}`}>
                      <p>{exp.period}</p>
                      <p className={exp.color}>{exp.company}</p>
                    </div>
                    <div className="content mt-30">
                      <h6 className="fw-6">{exp.title}</h6>
                      <p className="text-md primary-text mt-8">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-2 d-none d-xl-block">
            <div className="line">
              <div className="line-inner">
                <span className="circle"></span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="experience__single experience__single-alt">
              <div className="experience__single-intro text-center">
                <h5 className="fw-6">My Education</h5>
              </div>
              <div className="experience__single-wrapper mt-40">
                {educationData.map((edu, index) => (
                  <div key={index} className="experience__single-content scale-up">
                    <div className={`experience__content-intro ${index === 0 ? 'neutral-top' : ''}`}>
                      <p>{edu.period}</p>
                      <p className={edu.color}>{edu.institution}</p>
                    </div>
                    <div className="content mt-30">
                      <h6 className="fw-6">{edu.title}</h6>
                      <p className="text-md primary-text mt-8">{edu.description}</p>
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

export default Experience;

