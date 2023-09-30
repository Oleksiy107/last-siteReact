import React from "react";

export default () => {
  return (
    <div className="menu-box">
      <h2 className="menu-box__title">Delivery</h2>
      <div className="menu-box__inner-box inner-box inner-box--other-box">
        <h2 className="menu-box__name">Delivery man</h2>
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
      <div className="menu-box__btn-wrapper">
        <button className="menu-box__btn">More info</button>
        <button className="menu-box__btn">Buy</button>
      </div>
    </div>
  );
};
