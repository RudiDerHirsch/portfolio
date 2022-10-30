import React, { useState, useEffect } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Skills.scss";

import ScreenHeading from "../../utilities/ScreenHeading";
import Animations from "../../utilities/Animations";

const Skills = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  /* REUSABLE MINOR COMPONENTS */
  const SkillsHeading = (props) => {
    return (
      <div className="skills-heading">
        <div className="skills-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="skills-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="skills-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC SKILLS DATA FOR THE LABELS*/
  const skillsBullets = [
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Diploma", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Python", ratingPercentage: 70 },
    { skill: "HTML / CSS", ratingPercentage: 80 },
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Typescript", ratingPercentage: 45 },
    { skill: "Angular", ratingPercentage: 80 },
    { skill: "Firebase DB", ratingPercentage: 80 },
    { skill: "Mongo DB", ratingPercentage: 30 },
  ];

  const skillsDetails = [
    /* PROGRAMMING SKILLS */
    <div
      className="skills-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Interests */
    <div className="skills-screen-container" key="interests">
      <SkillsHeading heading="Bla" description="BlaBlaBla" />
      <SkillsHeading heading="Bla" description="BlaBlaBla" />
      <SkillsHeading heading="Bla" description="BlaBlaBla" />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return skillsBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getSkillsScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="skills-details-carousel"
      >
        {skillsDetails.map((SkillsDetail) => SkillsDetail)}
      </div>
    );
  };

  return (
    <div
      className="skills-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="skills-content">
        <ScreenHeading className="skills-title" title={"Skills"} />
        <div className="skills-card">
          <div className="skills-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="skills-bullet-details">{getSkillsScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "04. skills",
  "app_whitebg"
);
