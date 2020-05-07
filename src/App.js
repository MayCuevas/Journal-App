import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import HomeLayout from "./Pages/Home/home";
import Footer from "./components/footer/footer";
import NewsLayout from "./Pages/News/news";
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App-Grid">
      <Header />
        <Switch>
          <Route path="/news" component={NewsLayout} />
          <Route path="/" exact component={HomeLayout} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
