import React from "react";
import "./about.css";
import Me from "../../assets/Ghanem.jpg";
import { FaAward } from "react-icons/fa";
import { BsFillFolderFill } from "react-icons/bs";
import { FaUniversity } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about_Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Expirence</h5>
              <small>9 months working</small>
            </article>

            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Education</h5>
              <small>
                software and information system engineering (
                <a href="https://www.esip.tn/">ESIP</a>)
              </small>
              {/* <br></br>
              <small>
                license applied in automation and industrial computing
              </small> */}
            </article>

            <article className="about__card">
              <BsFillFolderFill className="about__icon" />
              <h5>Personal projects</h5>
              <small>
                +20 repository in{" "}
                <a href="https://github.com/ghanem1929">Github</a>
              </small>
            </article>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            ratione cupiditate nihil repellat sapiente eaque sit natus numquam
            officiis quibusdam? Necessitatibus, molestiae nobis eum praesentium
            quo illum. Fugit, officia reprehenderit?
          </p> */}
          {/*  <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
