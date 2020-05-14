import React, { useContext } from 'react';
import './article.scss';
import { NewsContext } from '../../contexts/newsContext';



const Article = () =>{
    const {news} = useContext(NewsContext);
    console.log(news)
return(
<div className="article-container">
    <div className="article">
        <h1 className="article__title">{news.title}</h1>
        <p className="article__content">{news.content}</p>
        <img className="article__img"
        alt="articleImg"
        src={news.image} />
    </div>
</div>
);
};

export default Article