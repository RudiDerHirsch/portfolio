import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Projects.scss";

const Projects = () => {
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
    <div>
      <h1 className="app__profiles-head">Github Projects</h1>
      <div className="app__profiles">
        {githubData.map((ghData, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="app__profile-item"
            key={ghData.id + index}
          >
            <a href={ghData.html_url} target="_blank">
              <img
                src={require(`../../assets/${ghData.name}.png`)}
                alt={ghData.name}
              />
              <h2 style={{ marginTop: 20 }}>{ghData.name}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {ghData.description}
              </p>
              <p className="p-lang" style={{ marginTop: 10 }}>
                Primary Language: {ghData.language}
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(Projects, "02. projects");
