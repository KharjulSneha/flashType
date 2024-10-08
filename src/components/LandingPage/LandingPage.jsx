import React from "react";
import "./LandingPage.css";
import flash from "../../assets/flash.png";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="landing-header">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["Fast?", "Correct?", "Quick?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right">
        <img
          data-aos="fade-left"
          className="flash-image"
          src={flash}
          alt="flashimage"
        />
      </div>
    </div>
  );
};

export default LandingPage;
