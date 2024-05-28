import React from "react";
import "./Header.scss";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={images.avatar} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <div>
          <span
            className="p-text bold-text"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
            }}
          >
            {"Hey there, I'm"}
            <h1
              className="head-text"
              style={{ textAlign: "left", color: "orange" }}
            >
              {`Jadav Keshav`}
            </h1>
            <br />
            <div style={{ textAlign: "left", fontSize: "1.5rem", marginTop: "-2rem" }} >
              
              <Typewriter
                words={['Full-stack Developer','FreeLancer', 'Programmer', 'Web Developer']}
                loop={5}
                cursor
                cursorStyle=' | '
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}

              />
            </div>
          </span>
          <br />

        </div>
        <div className="btn-container p-text">
          <a href={images.resume} download="jadavkeshav">
            <button className="btn btn-color-2">Download CV</button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => {
              window.location.href = "#contact";
            }}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line new-cap
export default AppWrap(Header, "home");