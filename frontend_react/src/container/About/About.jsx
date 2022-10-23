import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";
import { images } from "../../constants/";

const About = () => {
  const githubUser = "gilluuu";
  const [githubData, setGithubData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://api.github.com/users/gilluuu/repos`);
    const data = await response.json();
    setGithubData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app__profiles">
      <h1>Github Projects</h1>
      <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="app__profile-item"
      >
        {githubData.map((ghData) => {
          return (
            <div key={ghData.id}>
              <img src="portfolio" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {ghData.name}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {ghData.description}
              </p>
              <p>{ghData.language}</p>
            </div>
          );
        })}{" "}
      </motion.div>
      ;
    </div>
  );
};

export default About;
