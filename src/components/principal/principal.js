import React from "react";
import "./principal.scss";
import news from "../../common/data/newsData.json";


const info = news.map((item) => (
  <article className="principal-section__article">
    <img
      className="principal-section__article--img"
      src={process.env.PUBLIC_URL + item.image}/>
    <div className="principal-section__article--container">
        <h3 className="principal-section__article--subtitle">{item.subtitle}</h3>
        <h2 className="principal-section__article--title">{item.title}</h2>
    </div>
  </article>
));

const Section = () => {
  return (
    <div className="principal-section">
     {info}
    </div>
  );
};

export default Section;