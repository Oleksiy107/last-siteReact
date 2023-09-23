import React from "react";
import photoMain1 from "../../../static/main.png";
import photoMain2 from "../../../static/main2.png";
function componentsMain() {
  return (
    <div className="menu-box">
      <p>Menu</p>
      <div className="menu-box__inner-box">
        <h2 className="menu-box__title">Menu</h2>
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
          <img src={photoMain1} alt="photo" />
          <p>ready-made cocktails</p>
        </div>
        <div className="img-box__inner-container">
          <img src={photoMain2} alt="photo" />
          <p>Make a cocktail yourself</p>
        </div>
      </div>
    </div>
  );
}
export default componentsMain;
