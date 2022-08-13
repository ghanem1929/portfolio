import React from "react";
import CV from "../../assets/Ghanem's Resume.pdf";

const CTA = ({ setActiveNav }) => {
  return (
    <div className="cta">
      <a href={CV} className="btn" download>
        Download CV
      </a>
      <a
        href="#contact"
        onClick={() => {
          setActiveNav("#contact");
        }}
        className="btn btn-primary"
      >
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
