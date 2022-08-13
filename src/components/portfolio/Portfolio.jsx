import React from "react";
import clock from "../../assets/clock.png";
import eyes from "../../assets/eyes.png";
import quote from "../../assets/quote.png";
import covid from "../../assets/covid.png";
import movie from "../../assets/movie.png";
import todo from "../../assets/todo.png";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "Movie app",
      image: movie,
      github: "https://github.com/ghanem1929/hooks-checkpoint",
      demo: "https://codepen.io/",
    },
    {
      id: 2,
      title: "Todo List",
      image: todo,
      github: "https://github.com/ghanem1929/redux-todos",
      demo: "https://codepen.io/",
    },
    {
      id: 3,
      title: "covid-19 Tracker",
      image: covid,
      github: "https://github.com/ghanem1929/COVID-19-TRACKER",
      demo: "https://codepen.io/",
    },
    {
      id: 4,
      title: "Digital Clock",
      image: clock,
      github: "https://github.com/",
      demo: "https://codepen.io/gha-nem/pen/zYrLBrr",
    },
    {
      id: 5,
      title: "Eyes Animation",
      image: eyes,
      github: "https://github.com/",
      demo: "https://codepen.io/gha-nem/details/OJMZwmY",
    },
    {
      id: 6,
      title: "Random Quote",
      image: quote,
      github: "https://github.com/",
      demo: "https://codepen.io/gha-nem/pen/zYdVXdb",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Resent </h5>
      <h2>Work</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Demo
                </a>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
