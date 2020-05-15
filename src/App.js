import React from "react";
import "./App.scss";
import {NewsContextProvider} from '../src/contexts/newsContext';

import HomeLayout from "./Pages/Home/home";
import NewsLayout from "./Pages/News/news";
import ContactLayout from "./Pages/Contact/contact";
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App-Grid">
       
          <NewsContextProvider>
          <Router>
            <Route path="/news" component={NewsLayout} />
            <Route path ="/contact" component={ContactLayout} />
            <Route path="/" exact component={HomeLayout} />
          </Router>
          </NewsContextProvider>
    </div>
  );
}

export default App;
