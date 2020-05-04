import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Section from "./components/principal/principal";

function App() {
  return (
    <div className="general-container">
      <Header />
      <Hero />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
