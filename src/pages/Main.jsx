import React from "react";
// import HeaderBurger from "../components/HeaderBurger.jsx";
import HeaderPage from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ComponentMain from "../components/mainElements/MenuComponets.jsx";
import PlaceWork from "../components/PlaceWork.jsx";
function Main() {
  return (
    <>
      {/* <HeaderBurger /> */}
      <HeaderPage />
      <ComponentMain />
      <PlaceWork />
      <Footer />
    </>
  );
}
export default Main;
