import React,{createContext,useState} from 'react';

const NewsContext = createContext();

const NewsContextProvider = ({children}) => {

   const [news,setNews]= useState({
      article:{}
    })
    
    return(
        <NewsContext.Provider value ={[news,setNews]}>
            {children}
        </NewsContext.Provider>
    );
}
export default NewsContext
export { NewsContextProvider }



