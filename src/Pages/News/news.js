import React,{useEffect,useState} from "react";
import "./news.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import mockService from "../../common/services/mockService";

import Aside from "../../components/aside/aside";


const NewsLayout = () =>{

  
    return (
     
      <div className="general-container">
        <Header />
          
        <Footer />
      </div>
    );
  }

  export default NewsLayout;