import React from "react";
import MainPage from "../pages/Main.jsx";
import AboutUsPage from "../pages/AboutUs.jsx";

// import BasketPage from '../pages/Basket.jsx'
// import SmoothieDesignerPage from '../pages/SmoothieDesigner'
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
export default App;
