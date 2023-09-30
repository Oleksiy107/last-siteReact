import React from "react";
import { Link } from "react-router-dom";
function headerBurger() {
  return (
    <>
      <div className="burger-header">
        <Link to="/" className="burger-header__link">
          Main pages
        </Link>
        <Link to="/about" className="burger-header__link">
          About pages
        </Link>
        <Link to="/basket" className="burger-header__link">
          Basket pages
        </Link>
        <Link to="/smoothieDesigner" className="burger-header__link">
          Contact pages
        </Link>
      </div>
      {/* <button className="hamburger">
        <i className="menuIcon material-icons">menu</i>
        <i className="closeIcon material-icons">close</i>
      </button> */}
    </>
  );
}

export default headerBurger;
