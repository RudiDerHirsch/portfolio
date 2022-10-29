import React, { useState, useEffect } from "react";

import { AppWrap } from "../../wrapper";
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
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Interessen", logoSrc: "interests.svg" },
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
    <div className="skills-screen-container" key="education">
      <SkillsHeading
        heading={"Berner Fachhochschule"}
        description={"Bachelor of Science in Wirtschaftsinformatik"}
        fromDate={"09.2020"}
        toDate={"07.2024"}
      />

      <SkillsHeading
        heading={"Berufsmaturitätsschule Langenthal"}
        description={"BMS Typ 2 Wirtschaft"}
        fromDate={"08.2015"}
        toDate={"07.2016"}
      />

      <SkillsHeading
        heading={"Kaufmännische Berufsschule Langenthal"}
        description={"Kaufmann EFZ E-Profil"}
        fromDate={"08.2012"}
        toDate={"07.2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="skills-screen-container" key="work-experience">
      <div className="experience-container">
        <SkillsHeading
          heading={
            "Schweizerische Akademie der Geistes- und Sozialwissenschaften (SAGW), Bern"
          }
          description={
            "IT & Web Support. Hard- und Software-Management. Webmaster (Magnolia und Typo3). "
          }
          fromDate={"11.2016"}
          toDate={"heute"}
        />
        <br></br>
        <br></br>
        <SkillsHeading
          heading={"Schenker Storen AG, Herzogenbuchsee"}
          description={"Temporäre Mitarbeit Office"}
          fromDate={"09.2016"}
          toDate={"11.2016"}
        />
        <br></br>
        <br></br>
        <SkillsHeading
          heading={"Createch AG, Langenthal"}
          description={"Temporäre Mitarbeit Produktion"}
          fromDate={"06.2016"}
          toDate={"09.2016"}
        />
        <br></br>
        <br></br>
        <SkillsHeading
          heading={"Ruckstuhl AG, Langenthal"}
          description={
            "Lehre als Kaufmann EFZ. Verkauf Innendienst (CH/DE/Export). Einkauf. Buchhaltung. HR"
          }
          fromDate={"08.2012"}
          toDate={"07.2015"}
        />
        <div className="experience-description">
          <span className="skills-description-text"></span>
        </div>
        <br></br>
      </div>
    </div>,

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
      <SkillsHeading
        heading="Schwimmen(Freibad)"
        description="Ausgleich zum anspruchsvollen Alltag."
      />
      <SkillsHeading
        heading="Sound Design"
        description="Home Studio als mentale Entlastung und Förderung
        der Kreativität."
      />
      <SkillsHeading
        heading="Outdoor Aktivitäten"
        description="Vor allem bei schönem Wetter macht es mir viel Spass mit meinen
        Kollegen oder auch alleine die Natur geniessen."
      />
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
        <ScreenHeading title={"Curriculum Vitae"} />
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

export default AppWrap(Skills, "04. skills");
