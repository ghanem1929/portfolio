import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* ================ web development====================*/}
        <article className="service">
          <div className="service__header">
            <h3>Web development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Writing well designed, testable, efficient code by using best
                software development practices
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Creating website layout/user interfaces by using standard
                HTML/CSS practices
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Integrating data from various back-end services and databases
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Be responsible for maintaining, expanding, and scaling our site
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Cooperate with web designers to match visual design intent</p>
            </li>
          </ul>
        </article>
        {/* ================ mobile development====================*/}
        <article className="service">
          <div className="service__header">
            <h3>Mobile development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Support the entire application lifecycle (concept, design, test,
                release and support)
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Produce fully functional mobile applications writing clean code
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Troubleshoot and debug to optimize performance</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Design interfaces to improve user experience</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Research and suggest new mobile products, applications and
                protocols
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
