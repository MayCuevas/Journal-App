import React from "react";
import "./principal.scss";

import {Link} from "react-router-dom";


const Section = ({news}) => {
  return (
    <div className="principal-section">
       {news.map((data) => (
    <article key={data.title} className="principal-section__article">
     <Link className="principal-section__link" to={{
       pathname:`/news/${data.title}`,
       state : {title : data.title,
                image:data.urlToImage,
                content:data.content}
      }}>
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