import React from "react";
import image from "../../assets/todoList.png";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      title: "todoList",
      image: image,
      github: "https://github.com/",
    },
    {
      id: 2,
      title: "Todo List",
      image: image,
      github: "https://github.com/",
    },
    {
      id: 3,
      title: "weather App",
      image: image,
      github: "https://github.com/",
    },
    {
      id: 4,
      title: "Movie App",
      image: image,
      github: "https://github.com/",
    },
    {
      id: 5,
      title: "Recipe App",
      image: image,
      github: "https://github.com/",
    },
    {
      id: 6,
      title: "Eltel App",
      image: image,
      github: "https://github.com/",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Resent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, title, image, github }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go To Github
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
