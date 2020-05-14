import React,{useEffect} from "react";
import "./news.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Article from '../../components/article/article';

const NewsLayout = () =>{

    return (
      <div className="news-container">
        <Header />
        <Article />
        <Footer />
      </div>
    );
  }

  export default NewsLayout;