import React from "react";
import { Header, Projects, Work, Skills, Contact, Footer } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="app__whitebg">
        <Projects />
      </div>
      <div className="app__graybg">
        <Work />
      </div>
      <div className="app__whitebg">
        <Skills />
      </div>
      <div className="app__graybg">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
