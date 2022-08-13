import React from "react";
import CTA from "./CTA";
import "./header.css";
import headerImg from "../../assets/ghanem.png";
import HeaderSocials from "./HeaderSocials";

const Header = ({ setActiveNav }) => {
  return (
    <header id="home">
      <div className="container container__header">
        <h5>hello I'm</h5>
        <h1>Henchiri GHANEM</h1>
        <div className="animation__text">
          <h3>Software Engineer</h3>
          <h3>MERN-stack js Developer</h3>
          <h3>React Native developer</h3>
        </div>

        <CTA setActiveNav={setActiveNav} />
        <HeaderSocials />
        <div className="image__container">
          <div className="me">
            <img src={headerImg} alt="me" />
          </div>
        </div>

        <a
          href="#footer"
          onClick={() => {
            setActiveNav("");
          }}
          className="scroll_down"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
