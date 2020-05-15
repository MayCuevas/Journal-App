import React, { useContext } from 'react';
import './article.scss';
import UseData from '../../common/hooks/useData';



const Article = () =>{
    const {article} = UseData();
    console.log(article);
return(
<div className="article-container">
    <div className="article">
        <h1 className="article__title">{article.title}</h1>
        <p className="article__content">{article.content}</p>
        <img className="article__img"
        alt="articleImg"
        src={article.image} />
    </div>
</div>
);
};

export default Article