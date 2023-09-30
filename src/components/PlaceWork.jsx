import React from "react";

function GoogleMap() {
  return (
    <div className="contact-block">
      <div className="contact-block__time-info time-info">
        <div>
          From Lev Tolstoy station: <br />
          <p className="time-info__time"> 10 min</p>
        </div>
        <div>
          From Zoloti Vorota station: <br />
          <p className="time-info__time">15 min</p>
        </div>
        <div>
          From Vydubychi: <br />
          <p className="time-info__time"> 30 min</p>
        </div>
        <div>
          From the station: <br />
          <p className="time-info__time"> 40 min</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1389.7061527721094!2d30.519747617771625!3d50.442985181444726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce558acedab3%3A0xf8ecc74aab936002!2sBIG%20MAMA!5e0!3m2!1suk!2sua!4v1695412768870!5m2!1suk!2sua"
        width="600"
        height="450"
        className="maps"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMap;
