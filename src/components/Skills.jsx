import { useState } from 'react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skillTwo');

  const skillsData = [
    {
      place: 'National University',
      period: '2019 - 2020',
      title: 'Diploma in Computer',
      description: 'Owing to advancements in product designer technologies, into greater popularity in the past few years.'
    },
    {
      place: 'Wealcoder',
      period: '2016 - 2020',
      title: 'Wordpress Development',
      description: 'Owing to advancements in product designer technologies, into greater popularity in the past few years.'
    },
    {
      place: 'Bluebush Designs',
      period: '2017 - 2018',
      title: 'Web Design Course',
      description: 'Owing to advancements in product designer technologies, into greater popularity in the past few years.'
    },
    {
      place: 'Larsen & Toubro',
      period: '2010 - 2012',
      title: 'University of California',
      description: 'Owing to advancements in product designer technologies, into greater popularity in the past few years.'
    }
  ];

  return (
    <div className="skill-two pt-160 scale-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">Visit my skills & RESUME</span>
              <h2 className="title-animation fw-6 mt-16">Professional Timeline and Milestones</h2>
              <p className="primary-text mt-16">
                A detailed journey of my experience, skills, education, and career achievements to date.
              </p>
              <div className="skill__tab-btns mt-40">
                <button
                  data-target="#skillTwo"
                  className={`skill-tab-btn ${activeTab === 'skillTwo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('skillTwo')}
                >
                  Skills
                </button>
                <span></span>
                <button
                  data-target="#educationTwo"
                  className={`skill-tab-btn ${activeTab === 'educationTwo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('educationTwo')}
                >
                  Education
                </button>
                <button
                  data-target="#experienceTwo"
                  className={`skill-tab-btn ${activeTab === 'experienceTwo' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experienceTwo')}
                >
                  Experience
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-two__inner">
              <div className={`skill-two__item ${activeTab === 'skillTwo' ? 'active' : ''}`} id="skillTwo">
                <div className="row gutter-24">
                  {skillsData.map((item, index) => (
                    <div key={index} className="col-12 col-lg-6">
                      <div className="skill-two__single scale-up">
                        <div className="skill-two__intro">
                          <p>{item.place}</p>
                          <p>{item.period}</p>
                        </div>
                        <div className="skill-two__content">
                          <h5 className="fw-6">{item.title}</h5>
                          <p className="primary-text mt-16">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`skill-two__item ${activeTab === 'educationTwo' ? 'active' : ''}`} id="educationTwo">
                <div className="row gutter-24">
                  {skillsData.map((item, index) => (
                    <div key={index} className="col-12 col-lg-6">
                      <div className="skill-two__single scale-up">
                        <div className="skill-two__intro">
                          <p>{item.place}</p>
                          <p>{item.period}</p>
                        </div>
                        <div className="skill-two__content">
                          <h5 className="fw-6">{item.title}</h5>
                          <p className="primary-text mt-16">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`skill-two__item ${activeTab === 'experienceTwo' ? 'active' : ''}`} id="experienceTwo">
                <div className="row gutter-24">
                  {skillsData.map((item, index) => (
                    <div key={index} className="col-12 col-lg-6">
                      <div className="skill-two__single scale-up">
                        <div className="skill-two__intro">
                          <p>{item.place}</p>
                          <p>{item.period}</p>
                        </div>
                        <div className="skill-two__content">
                          <h5 className="fw-6">{item.title}</h5>
                          <p className="primary-text mt-16">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

