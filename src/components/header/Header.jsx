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
        <h5>Fullstack js developer</h5>
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
