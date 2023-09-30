import React from "react";
import MainPage from "../pages/Main.jsx";
import AboutUsPage from "../pages/AboutUs.jsx";
import BasketPage from "../pages/Basket.jsx";
import FQA from "./FQAElement/FQA.jsx";
// import SmoothieDesignerPage from '../pages/SmoothieDesigner'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="~/" element={<MainPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/FQA" element={<FQA />} />
    </Routes>
  );
}
export default App;
