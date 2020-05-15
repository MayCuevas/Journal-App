import React, { useContext } from "react";
import "./principal.scss";

import {Link} from "react-router-dom";
import UseData from '../../common/hooks/useData';

const { update } = UseData();

const Section = ({news}) => {

  return (
    <div className="principal-section">
       {news.map((data) => (
    <article key={data.title}
    className="principal-section__article"
    onClick={e =>{update(data)}}>
     <Link className="principal-section__link" to={{
       pathname:`/news/${data.title}`
      }} >
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