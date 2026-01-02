import { useEffect } from "react";

const SkillTabs = () => {

  const skills = [
    { name: "HTML5", image: "assets/images/skill/html.png", percentage: 95 },
    { name: "JavaScript", image: "assets/images/skill/javascript.png", percentage: 99 },
    { name: "React", image: "assets/images/skill/react.png", percentage: 95 },
    { name: "Php", image: "assets/images/skill/php.png", percentage: 94 },
    { name: "Laravel", image: "assets/images/skill/laravel.png", percentage: 93 },
    { name: "WordPress", image: "assets/images/skill/wordpress.png", percentage: 94 },
    
  ];

  useEffect(() => {
    if (!window.Odometer) return;
    document.querySelectorAll(".skill .odometer").forEach((el) => {
      const finalValue = el.getAttribute("data-odometer-final");
      el.innerHTML = "0";
      const od = new window.Odometer({
        el,
        value: 0,
      });

      setTimeout(() => od.update(finalValue), 150);
    });
  }, []);

  return (
    <section id="skills" className="skill pt-160">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header text-center mb-60 fade-up">
              <span className="sub-title tertiary-text text-uppercase neutral-top fw-6">
                My Skills & Expertise
              </span>
              <h2 className="title-animation fw-6 mt-16">
                Technologies I Work With
              </h2>
              <p className="primary-text mt-16">
                A balanced skill set covering frontend, backend, and full-stack web development.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill__tab-wrapper fade-up">
              <div className="skill__tab-inner">
                {skills.map((skill, index) => (
                  <div key={index} className="skill__tab text-center">
                    <div className="thumb">
                      <img src={skill.image} alt={skill.name} />
                    </div>
                    <div className="content mt-60">
                      <span className="text-xl text-uppercase fw-5">
                        {skill.name}
                      </span>
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
    </section>
  );
};
export default SkillTabs;