import React from "react";
export default () => {
  return (
    <div className="time-work-box">
      <div className="time-work-box__location">
        <p>Київ,льва толстого 12</p>
        <a href="tel:">+1111111</a>
      </div>
      <div className="time-work__days-box">
        <ul>
          <li>Пн-Пят: з 9:00 до 22:00</li>
          <li>Сб-Нд: з 8:00 до 23:00</li>
        </ul>
      </div>
    </div>
  );
};
