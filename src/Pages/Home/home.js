import React,{useEffect,useState} from "react";
import "./home.scss";

import Aside from "../../components/aside/aside";
import Hero from "../../components/hero/hero";
import Section from "../../components/principal/principal";
import mockService from "../../common/services/mockService";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";


const HomeLayout = () =>{
  
  const [dataUS, setUSData] = useState([]);
  const [dataAr, setARData] = useState([]);
  let newsData = [];
  let newsUSData =[];
  useEffect(() => {

    if(process.env.REACT_APP_MOCK === 'true'){
      setARData(mockService);
      setUSData(mockService);
    } else{
      apiService();
    }
  },[]);
   
  const apiService = async () =>{
    const apikey = process.env.REACT_APP_API_KEY;
    const urlUS = `https://newsapi.org/v2/top-headlines?country=us&limit=5&apiKey=${apikey}`;
    const resUS=  await fetch(urlUS)
    const newsUS =  await resUS.json();
    newsUSData = newsUS.articles;
    setUSData(newsUSData);

    
    const url = `https://newsapi.org/v2/top-headlines?country=ar&limit=5&apiKey=${apikey}`;
    const res=  await fetch(url)
    const news =  await res.json();
    newsData = news.articles;
    setARData(newsData);
  };

    return (
      <div className="general-container">
       <Header />
        <Hero />
        <Section news={dataAr}/>
        <Aside news={dataUS} />
       <Footer /> 
      </div>
    );
  }

  export default HomeLayout;