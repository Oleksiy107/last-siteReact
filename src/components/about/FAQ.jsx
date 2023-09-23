import React from "react";

export default () => {
  let answers = document.querySelectorAll(".accordion");
  answers.forEach((event) => {
    event.addEventListener("click", () => {
      if (event.classList.contains("active")) {
        event.classList.remove("active");
      } else {
        event.classList.add("active");
      }
    });
  });
  return (
    <div className="layout">
      <div className="accordion">
        <div className="accordion__question">
          <p>чи можу я зробить замовлення</p>
        </div>
        <div className="accordion__answer">
          <p>в данний момент доставки лише самовивоз та Glovo.</p>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion__question">
          <p>Чи можу я оплатить онлайн</p>
        </div>

        <div className="accordion__answer">
          <p>Оплатить онлайн і також приймаємо любі карти</p>
        </div>
      </div>
    </div>
  );
};
