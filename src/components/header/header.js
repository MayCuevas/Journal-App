import React from "react";
import "./header.scss";

const linksArray = [
  "Economía",
  "Politica",
  "Mundo",
  "Espectaculos",
  "Covid-19",
];
const links = linksArray.map((String) => (
  <a class="header-container__navbar--link">{String}</a>
));

const Header = (props) => {
  return (
    <header class="header-container">
      <p className="header-container__title">Fake News Portal</p>
      <nav class="header-container__navbar">{links}</nav>
    </header>
  );
};
export default Header;
