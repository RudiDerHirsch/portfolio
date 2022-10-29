import React from "react";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.instagram.com/gilluuu/" target="__blank">
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/gilles-nikles" target="__blank">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/gilluuu" target="__blank">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
