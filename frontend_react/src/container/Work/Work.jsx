import React from "react";
import { Chrono } from "react-chrono";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
  const items = [
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
    <div>
      <h1 className="work__timeline-head">Work</h1>
      <div className="work__timeline">
        <div className="work__timeline-area">
          <Chrono
            classNames="work__timeline-chrono"
            items={items}
            scrollable={{ scrollbar: true }}
            hideControls="true"
            theme={{
              primary: "#07152d",
              secondary: "",
              cardBgColor: "#fcfcfc",
              cardForeColor: "black",
              titleColor: "black",
              titleColorActive: "black",
              mediaHeight: "500",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Work, "app__works"),
  "03. work and education",
  "app_graybg"
);
