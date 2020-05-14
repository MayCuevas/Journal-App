import React,{createContext,useEffect,useState, useMemo} from 'react';

export const NewsContext = createContext();

const NewsContextProvider = (props) => {

   const[news,setNews]= useState({
        title:"Noticia-Title",
        content:"noticia-content",
        image: "/patito.jpg"
    })

   

    return(
        <NewsContext.Provider value ={{news}}>
        {props.children}
        </NewsContext.Provider>
    );
}

export default NewsContextProvider;



