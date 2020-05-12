import React from "react";
import "./App.scss";

import HomeLayout from "./Pages/Home/home";
import NewsLayout from "./Pages/News/news";
import ContactLayout from "./Pages/Contact/contact";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App-Grid">
        <Switch>
          <Route path="/news" component={NewsLayout} />
          <Route path ="/contact" component={ContactLayout} />
          <Route path="/" exact component={HomeLayout} />
        </Switch>
    </div>
  );
}

export default App;
