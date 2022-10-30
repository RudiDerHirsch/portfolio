import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name={message}
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>
          {loading ? "Sending" : "Send Message"}
        </button>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "05. contact",
  "app__whitebg"
);
