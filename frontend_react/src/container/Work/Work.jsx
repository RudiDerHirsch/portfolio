import React, { useState, useEffect } from "react";
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

  const work = [
    {
      title: "11.2016–today",
      cardTitle:
        "Schweizerische Akademie der Geistes- und Sozialwissenschaften (SAGW)",
      cardSubtitle: "IT & Web Support.",
      cardDetailedText:
        "Hard- und Software-Management. Webmaster (Magnolia und Typo3).",
    },
    {
      title: "09.2016–11.2016",
      cardTitle: "Schenker Storen AG",
      cardSubtitle: "Temporäre Mitarbeit Office",
      cardDetailedText:
        "Verkaufs- und Beratungsgespräche. Unterstützung Geschäftsleitung",
    },
    {
      title: "08.2012–07.2015",
      cardTitle: "Ruckstuhl AG",
      cardSubtitle: "Lehre Kaufmann EFZ",
      cardDetailedText:
        "Verkauf Innendienst (CH/DE/Export). Einkauf. Buchhaltung. HR",
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
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "03. work and education",
  "app_graybg"
);
