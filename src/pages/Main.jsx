import React from "react";
import HeaderPage from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ComponentMain from "../components/mainElements/MenuComponets.jsx";
import PlaceWork from "../components/PlaceWork.jsx";
import TimeWork from "../components/TimeWork.jsx";
function Main() {
  return (
    <div>
      <TimeWork />
      <HeaderPage />
      <ComponentMain />
      <PlaceWork />
      <Footer />
    </div>
  );
}
export default Main;
