import React from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition";

import "./Header.scss";
import "../../scripts/mouse/mousemove";

const TEXTS = [
  "Web Engineer",
  "Software Engineer",
  "Design",
  "Software Design",
  "Software Architecture",
];

const Header = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <div style={{ marginLeft: 20 }}>
              <p className="p-first">hello, my name is</p>
              <h1 className="head-text">Gilles Nikles.</h1>
              <h1 className="head-text-second">
                Let us build something fantastic.
              </h1>
              <h1 className="head-text-third">
                <TextTransition springConfig={presets.wobbly}>
                  {TEXTS[index % TEXTS.length]}
                </TextTransition>
              </h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
