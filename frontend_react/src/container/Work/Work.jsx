import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const skills = [
    {
      name: "ReactJS",
      bgColor: "",
      icon: "react.png",
    },
    {
      name: "Javascript",
      bgColor: "",
      icon: "javascript.png",
    },
    {
      name: "HTML",
      bgColor: "",
      icon: "html.png",
    },
    {
      name: "CSS",
      bgColor: "",
      icon: "css.png",
    },
    {
      name: "Python",
      bgColor: "",
      icon: "python.png",
    },
    {
      name: "Figma",
      bgColor: "",
      icon: "figma.png",
    },
    {
      name: "Node JS",
      bgColor: "",
      icon: "node.png",
    },
    {
      name: "Git",
      bgColor: "",
      icon: "git.png",
    },
  ];

  const exp = [
    {
      year: "11.2016",
      company:
        "Schweizerische Akademie der Geistes- und Sozialwissenschaften (SAGW)",
      name: "IT & Web Support.",
      details: "Hard- und Software-Management. Webmaster (Magnolia und Typo3).",
    },
    {
      year: "09.2016–11.2016",
      company: "Schenker Storen AG",
      name: "Temporäre Mitarbeit Office",
      details:
        "Verkaufs- und Beratungsgespräche. Unterstützung Geschäftsleitung",
    },
    {
      year: "08.2012–07.2015",
      company: "Ruckstuhl AG",
      name: "Lehre Kaufmann EFZ",
      details: "Verkauf Innendienst (CH/DE/Export). Einkauf. Buchhaltung. HR",
    },
  ];

  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>

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
                <img
                  src={require(`../../assets/${skill.icon}`)}
                  alt={skill.name}
                />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="app__skills-exp">
          {exp.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-exp-work"
                data-tip
                data-for={work.name}
                key={work.name}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{work.year}</p>
                </div>
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
              </motion.div>
              <ReactTooltip
                id={work.name}
                effect="solid"
                arrowColor="#fff"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="skills-tooltip"
              >
                {work.details}
              </ReactTooltip>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "03. work and education",
  "app_graybg"
);
