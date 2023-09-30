import React from "react";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import PlaceWork from "../components/PlaceWork.jsx";
import AboutBar from "../components/about/AboutBar.jsx";
// import FAQ from "../components/about/FAQ.jsx";
export default () => {
  return (
    <div>
      {/* <FAQ /> */}
      <Header />
      <AboutBar />
      <PlaceWork />
      <Footer />
    </div>
  );
};
