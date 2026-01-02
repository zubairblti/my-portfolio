const Experience = () => {
  const experienceData = [
    {
      period: 'Mar, 2025 - Current',
      company: 'QuadRoots Technology',
      title: 'Junior Laravel Developer',
      description: 'Worked on Laravel-based applications, building backend logic, authentication modules, admin panels, and REST APIs while ensuring performance and code quality.',
      color: 'tertiary-text'
    },
    {
      period: 'Jan, 2024 - Mar, 2025',
      company: 'Tower Tech',
      title: 'Web Master',
      description: 'Managed and maintained business websites, handled content updates, performance optimization, and collaborated with teams to deliver reliable web solutions.',
      color: 'secondary-text'
    },
    {
      period: 'Nov, 2021 - Jan, 2024',
      company: 'Miracle Soft Solutions',
      title: 'WordPress Developer',
      description: 'Developed custom WordPress themes and websites, implemented plugins, optimized performance, and ensured responsive, user-friendly interfaces.',
      color: 'tertiary-text'
    }
  ];
  const educationData = [
    {
      period: '2018 - 2021',
      institution: 'Punjab University',
      title: 'BSCs Computer Science',
      description: 'Completed a bachelor’s degree with a strong foundation in programming, databases, software engineering, and modern web technologies.',
      color: 'secondary-text'
    },
    {
      period: '2016 - 2018',
      institution: 'Government College',
      title: 'Intermediate in Computer Science',
      description: 'Studied computer fundamentals, mathematics, and core programming concepts with practical academic projects, problem-solving exercises, and foundational software development practices.',
      color: 'tertiary-text'
    },
    {
      period: '2014 - 2016',
      institution: 'Government High School',
      title: 'Matriculation (Science)',
      description: 'Completed secondary education with a focus on science subjects, building analytical thinking and problem-solving skills.',
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
              <h2 className="title-animation fw-6 mt-16">My Professional Journey</h2>
              <p className="primary-text mt-20">
                Building scalable, secure, and performance-driven web solutions through continuous learning and hands-on experience.
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