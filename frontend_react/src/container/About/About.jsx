import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./About.scss";

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
      <div>
        <h1>Github Projects</h1>
        {githubData.map((ghData) => {
          return (
            <div key={ghData.id}>
              <h2>{ghData.name}</h2>
              <p>{ghData.description}</p>
              <p>{ghData.language}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
