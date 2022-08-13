import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header_social">
      <a href="https://linkedin.com" target={"_blank"} rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target={"_blank"} rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://stackoverflow.com" target={"_blank"} rel="noreferrer">
        <BsStackOverflow />
      </a>
    </div>
  );
};

export default HeaderSocials;
