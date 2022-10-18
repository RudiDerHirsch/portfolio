import React from "react";
import { motion } from "framer-motion";

import "./Header.scss";
import "../../scripts/mouse/mousemove";

const Header = () => {
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
              <h1 className="head-text-third">Web Engineering and Design</h1>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
