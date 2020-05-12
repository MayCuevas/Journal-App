import React from "react";
import "./principal.scss";

import {Link} from "react-router-dom";
import newsMock from "../../common/services/mockService"

const mock = newsMock;
const info = mock.map((item) => (
  <article className="principal-section__article">
     <Link className="principal-section__link" to="/news">
      <img
        className="principal-section__article--img"
        src={process.env.PUBLIC_URL + item.urlToImage}
        alt="principal-news"/>
      <div className="principal-section__article--container">
          <h3 className="principal-section__article--subtitle">{item.description}</h3>
          <h2 className="principal-section__article--title">{item.title}</h2>
      </div>
    </Link>
  </article>
));

const Section = ({news}) => {
  return (
    <div className="principal-section">
       {news.map((data) => (
    <article className="principal-section__article">
     <Link className="principal-section__link" to="/news">
        <img className="principal-section__article--img"
        alt="aside-news"
        src={data.urlToImage} />
        <div className="principal-section__article--container">
        <h2 className="principal-section__article--subtitle">{data.title}</h2>
        </div>
      </Link>
      </article>
    ))} 
    </div>
  );
};

export default Section;