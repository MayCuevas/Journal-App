import React from "react";
import "./home.scss";

import Aside from "../../components/aside/aside";
import Hero from "../../components/hero/hero";
import Section from "../../components/principal/principal";
import apiService  from "../../common/services/apiService";

const HomeLayout = () =>{
    apiService();
    return (
      <div className="general-container">
        <Hero />
        <Section />
        <Aside />
      </div>
    );
  }

  export default HomeLayout;