import React,{useEffect,useState} from "react";
import "./home.scss";

import Aside from "../../components/aside/aside";
import Hero from "../../components/hero/hero";
import Section from "../../components/principal/principal";
import mockService from "../../common/services/mockService";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


const HomeLayout = () =>{
  
  const [data, setData] = useState([]);
  let newsData = [];
  useEffect(() => {
   process.env.REACT_APP_MOCK === 'true' ? setData(mockService) : apiService();
  },[]);

  const apiService = async () =>{
    const apikey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}`;
    const res=  await fetch(url)
    const news =  await res.json();
    newsData = news.articles;
    setData(newsData);
  };

    return (
      <div className="general-container">
       <Header />
        <Hero />
        <Section />
        <Aside news={data} />
       <Footer /> 
      </div>
    );
  }

  export default HomeLayout;