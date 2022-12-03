import React from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { SkillBar } from "react-skills";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const skills = [
    {
      name: "ReactJS",
      bgColor: "",
      icon: "react.png",
      level: 65,
    },
    {
      name: "JavaScript",
      bgColor: "",
      icon: "javascript.png",
      level: 65,
    },
    {
      name: "HTML",
      bgColor: "",
      icon: "html.png",
      level: 80,
    },
    {
      name: "CSS",
      bgColor: "",
      icon: "css.png",
      level: 75,
    },
    {
      name: "Python",
      bgColor: "",
      icon: "python.png",
      level: 75,
    },
    {
      name: "Figma",
      bgColor: "",
      icon: "figma.png",
      level: 50,
    },
    {
      name: "Node JS",
      bgColor: "",
      icon: "node.png",
      level: 60,
    },
    {
      name: "Git",
      bgColor: "",
      icon: "git.png",
      level: 90,
    },
    {
      name: "TypeScript",
      bgColor: "",
      icon: "typescript.png",
      level: 60,
    },
  ];

  const exp = [
    {
      year: "03.2023",
      company: "Artd Webdesign GmbH",
      name: "Web Project Manager",
      details: "Projektleiter",
    },
    {
      year: "11.2016–02.2023",
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
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                data-tip
                data-for={skill.name}
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
              <ReactTooltip
                id={skill.name}
                effect="solid"
                arrowColor="#fff"
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2 }}
                className="bar-tooltip"
              >
                Skill-Level:
                <SkillBar
                  duration={2}
                  name={skill.name}
                  level={skill.level}
                  color="#ced6f3"
                  flat="true"
                  labelWidth={0}
                />
              </ReactTooltip>
            </>
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
  "03. skills and experiences",
  "app_graybg"
);
