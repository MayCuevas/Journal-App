import React from "react";
import "./header.scss";
import items from "../../common/data/categories.json";


const links = items.map((item) => (
  <li className="menu__list--link"><a href="">{item}</a></li>
));
const Header = (props) => {
  return (
    <header className="header-container">
      <p className="header-container__title">Fake News Portal</p>
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