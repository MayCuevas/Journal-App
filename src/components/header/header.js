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
      <Link to="/"><p className="header-container__title">Fake News Portal</p></Link>
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