import React from "react";
import "./App.scss";
import Header from "./components/header/header";
import HomeLayout from "./Pages/Home/home";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div>
      <Header />
       <HomeLayout />
      <Footer />
    </div>
  );
}

export default App;
