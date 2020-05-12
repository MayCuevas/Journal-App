import React from "react";
import "./header.scss";
import items from "../../common/data/categories.json";
import {Link} from "react-router-dom";

const links = items.map((item) => (
  <Link to="/news"><li className="menu__list--link">{item}</li></Link>
));
const Header = (props) => {
  return (
    <header className="header-container">
        <div className="header-container__titles">
        <Link to="/contact" className="header-container__title">
          <p>Contact Us </p>
        </Link>
        <Link to="/" className="header-container__title" >
          <p>Fake News Portal</p>
        </Link>
      </div>
      <div className="menu-wrapper">
        <input type="checkbox" className="toggler" />
          <div className="hamburger"><div className="hamburger--line"></div></div>
            <div className="menu">
            <div className="menu__ul-wrap">
                  <ul className="menu__list">{links}</ul>
            </div>
            </div>
          
        </div>
    </header>
  );
};

export default Header;