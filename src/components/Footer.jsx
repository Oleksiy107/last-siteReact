import React from "react";
import instagram from "../../static/ins.png";
import facebook from "../../static/face.png";
import tikTok from "../../static/tik.png";
import twiter from "../../static/twi.png";
import FQA from "../components/FQAElement/FQA.jsx";
import { Link } from "react-router-dom";
function footer() {
  return (
    <div className="footer-box">
      <div className="footer-box__img-inner">
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="Oops" className="footer-box__img1" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="Oops" className="footer-box__img2" />
        </a>
        <a href="https://www.tiktok.com/uk-UA/">
          <img src={tikTok} alt="Oops" className="footer-box__img3" />
        </a>
        <a href="https://twitter.com/">
          <img src={twiter} alt="Oops" className="footer-box__img4" />
        </a>
      </div>
      <div className="footer-box__number-box">
        <Link to="/FQA">FQA</Link>
      </div>
    </div>
  );
}
export default footer;
