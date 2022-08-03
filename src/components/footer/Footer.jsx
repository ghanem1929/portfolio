import React from "react";
import "./footer.css";
import { GrFacebook } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { BsStackOverflow } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#home" className="footer__logo">
        Ghanem19
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/ghanem19">
          <GrFacebook />
        </a>
        <a href="https://instagram.com/">
          <GrInstagram />
        </a>
        <a href="https://github.com/ghanem1929">
          <GrGithub />
        </a>
        <a href="https://stackoverflow.com/">
          <BsStackOverflow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
