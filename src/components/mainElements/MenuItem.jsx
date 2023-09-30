import React from "react";
import photoMain1 from "../../../static/main.png";
import photoMain2 from "../../../static/main2.png";
export default () => {
  return (
    <div className="menu-box">
      <h2 className="menu-box__title">Menu</h2>
      <div className="menu-box__inner-box">
        <h2 className="menu-box__name">Menu</h2>
        <p className="menu-box__text">
          At faucibus nullam mauris vitae ut non. Augue libero non nibh nec, et
          eget erat. Nascetur nunc neque, varius massa aliquam interdum turpis
          massa. Ac tortor aliquam risus, interdum nisl mauris sit. Ut placerat
          fermentum pellentesque ac at. Vitae venenatis faucibus urna mi eget
          vitae quam eu. Euismod sed mauris id turpis iaculis. Erat rutrum
          dolor, vitae morbi.
          <br />
          Nunc cras cras aliquet blandit faucibus massa sagittis semper.{" "}
        </p>
      </div>
      <div className="menu-box__img-box img-box">
        <div className="img-box__inner-container">
          <img src={photoMain1} alt="photo" className="img-box__photo" />
          <p className="img-box__name-pages name-pages_skip-left">
            ready-made cocktails
          </p>
        </div>
        <div className="img-box__inner-container">
          <img src={photoMain2} alt="photo" className="img-box__photo" />
          <p className="img-box__name-pages">Make a cocktail yourself</p>
        </div>
      </div>
    </div>
  );
};
