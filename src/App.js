import React from "react";
import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import NewsContextProvider, {NewsProvider,NewsConsumer} from '../src/contexts/newsContext';

import HomeLayout from "./Pages/Home/home";
import NewsLayout from "./Pages/News/news";
import ContactLayout from "./Pages/Contact/contact";

function App() {


  return (
    <div className="App-Grid">
        <Switch>
          <NewsContextProvider>
            <Route path="/news" component={NewsLayout} />
            <Route path ="/contact" component={ContactLayout} />
            <Route path="/" exact component={HomeLayout} />
          </NewsContextProvider>
        </Switch>
    </div>
  );
}

export default App;
