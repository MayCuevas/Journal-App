import React from "react";
import "./principal.scss";
import newsMock from "../../common/services/mockService"

const mock = newsMock;
const info = mock.map((item) => (
  <article className="principal-section__article">
    <img
      className="principal-section__article--img"
      src={process.env.PUBLIC_URL + item.urlToImage}
      alt="principal-news"/>
    <div className="principal-section__article--container">
        <h3 className="principal-section__article--subtitle">{item.description}</h3>
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