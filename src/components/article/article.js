import React, { useContext } from 'react';
import './article.scss';
import { NewsContext } from '../../contexts/newsContext';



const Article = () =>{
    const {news} = useContext(NewsContext);
    console.log(news)
return(
<div className="article-container">
<h1 className="article-title">{news.title}</h1>
<p>{news.content}</p>
</div>
);
};

export default Article