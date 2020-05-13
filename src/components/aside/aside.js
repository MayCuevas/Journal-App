import React from "react";
import "./aside.scss";



const Aside = ({news}) => {
  return <aside className="aside-lastest">
    <div className="news-wrapper">
      <h2 className="news-wrapper__title">World-news</h2>
           {news.map((data) => (
      <div key={data.title} className="news">
        <h2 className="news__subtitle">{data.title}</h2>
        <h1 className="news__title">{data.content}</h1>
        <img className="news__img"
        alt="aside-news"
        src={data.urlToImage} />
      </div>
    ))} 
    </div>
    </aside>;
};

export default Aside;
