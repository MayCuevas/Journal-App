import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header";
import Aside from "./components/aside/aside";

function App() {
  return (
    <div class="general-container">
      <Header />
      <Aside />
    </div>
  );
}

export default App;
