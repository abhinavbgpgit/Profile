import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';

const Skills = () => {
  // const [experiences, setExperiences] = useState([]);


    const skills=[ { name:"React", bgColor:"",icon:images.react},
    { name:"Flutter", bgColor:"",icon:images.flutter},
    { name:"Git", bgColor:"",icon:images.git},
    { name:"GraphQl", bgColor:"",icon:images.graphql},
    { name:"HTML5", bgColor:"",icon:images.html},
    { name:"Javascript", bgColor:"",icon:images.javascript},
    { name:"Sass", bgColor:"",icon:images.sass},
    { name:"Typescript", bgColor:"",icon:images.typescript},
    { name:"vue jS", bgColor:"",icon:images.vue}
  ]
    const experiences=[ { year:"2008-2018", works:[{name:"Teacher",company:"Engg College Bhagalpur",desc:"Kya baat hai.."}]},
    { year:"2018-2022", works:[{name:"Software Engineer",company:"Virtusa",desc:"Kya baat hai.."}]}
  ]
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);
