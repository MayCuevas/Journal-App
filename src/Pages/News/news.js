import React from "react";
import "./news.scss";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import Aside from "../../components/aside/aside";

const NewsLayout = () =>{
    return (
     
      <div className="general-container">
        <Header />
          <Aside />
        <Footer />
      </div>
    );
  }

  export default NewsLayout;