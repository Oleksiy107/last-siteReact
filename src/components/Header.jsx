import React from "react";
import cafePhoto from "../../static/cafe.jpeg";

import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="container-header">
      
      <img src={cafePhoto} alt="cafe" className="container-header__img" />
      <div className="container-header__box-link">
        <Link to="/" className="container-header__link">
          Main pages
        </Link>
        <Link to="/about" className="container-header__link">
          About pages
        </Link>
        <Link to="/basket" className="container-header__link">
          Basket pages
        </Link>
        <Link to="/smoothieDesigner" className="container-header__link">
          Contact pages
        </Link>
      </div>
    </div>
  );
}
export default Header;
