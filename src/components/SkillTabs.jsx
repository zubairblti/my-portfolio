import { useState, useEffect } from 'react';

const SkillTabs = () => {
  const [skillTab, setSkillTab] = useState('design');

  const skillsDesign = [
    { name: 'Figma', image: 'assets/images/skill/figma.png', percentage: 95 },
    { name: 'Adobe XD', image: 'assets/images/skill/xd.png', percentage: 94 },
    { name: 'Sketch', image: 'assets/images/skill/sketch.png', percentage: 93 },
    { name: 'React', image: 'assets/images/skill/react.png', percentage: 95 },
    { name: 'WordPess', image: 'assets/images/skill/wordpress.png', percentage: 94 },
    { name: 'JavaScript', image: 'assets/images/skill/javascript.png', percentage: 99 }
  ];

  useEffect(() => {
    // Initialize odometer when component mounts or tab changes
    if (window.Odometer) {
      const odometers = document.querySelectorAll('.skill .odometer');
      odometers.forEach((odometer) => {
        const finalValue = odometer.getAttribute('data-odometer-final');
        if (finalValue && !odometer.classList.contains('odometer-done')) {
          const od = new window.Odometer({
            el: odometer,
            value: 0,
          });
          setTimeout(() => {
            od.update(finalValue);
            odometer.classList.add('odometer-done');
          }, 100);
        }
      });
    }

    // Skill tab hover effect
    const skillTabs = document.querySelectorAll('.skill__tab');
    skillTabs.forEach((tab) => {
      tab.addEventListener('mouseover', function () {
        skillTabs.forEach((t) => t.classList.remove('active'));
        this.classList.add('active');
      });
    });

    return () => {
      // Cleanup event listeners if needed
      skillTabs.forEach((tab) => {
        tab.removeEventListener('mouseover', () => {});
      });
    };
  }, [skillTab]);

  return (
    <section className="skill pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                Visit my skill & Hire me
              </span>
              <h2 className="title-animation fw-6 mt-16">My Design Skills & Favorite Tools</h2>
              <p className="primary-text mt-16">
                Explore the tools and skills I use daily to craft visually stunning, functional designs.
              </p>
              <div className="skill__tab-btns mt-40">
                <button
                  data-target="#design"
                  className={`skill-tab-btn ${skillTab === 'design' ? 'active' : ''}`}
                  onClick={() => setSkillTab('design')}
                >
                  Design
                </button>
                <span></span>
                <button
                  data-target="#development"
                  className={`skill-tab-btn ${skillTab === 'development' ? 'active' : ''}`}
                  onClick={() => setSkillTab('development')}
                >
                  Development
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill__tab-wrapper fade-up">
              <div
                className="skill__tab-single"
                id="design"
                style={{ display: skillTab === 'design' ? 'block' : 'none' }}
              >
                <div className="skill__tab-inner">
                  {skillsDesign.map((skill, index) => (
                    <div key={index} className={`skill__tab text-center ${index === 2 ? 'active' : ''}`}>
                      <div className="thumb">
                        <img src={skill.image} alt="Image" />
                      </div>
                      <div className="content mt-60">
                        <span className="text-xl text-uppercas fw-5">{skill.name}</span>
                        <p className="primary-text text-xxl fw-6 mt-4">
                          <span className="odometer" data-odometer-final={skill.percentage}>
                            0
                          </span>
                          <span className="prefix">%</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="skill__tab-single"
                id="development"
                style={{ display: skillTab === 'development' ? 'block' : 'none' }}
              >
                <div className="skill__tab-inner">
                  {skillsDesign.map((skill, index) => (
                    <div key={index} className={`skill__tab text-center ${index === 2 ? 'active' : ''}`}>
                      <div className="thumb">
                        <img src={skill.image} alt="Image" />
                      </div>
                      <div className="content mt-60">
                        <span className="text-xl text-uppercas fw-5">{skill.name}</span>
                        <p className="primary-text text-xxl fw-6 mt-4">
                          <span className="odometer" data-odometer-final={skill.percentage}>
                            0
                          </span>
                          <span className="prefix">%</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTabs;

