import React, { useState } from "react";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "Where is Taj Mahal located?",
      answer: "Taj Mahal is located in Agra, Uttar Pradesh.",
      open: false, // Start with closed accordions
    },
    {
      question: "How many planets are there in the solar system?",
      answer:
        "There are eight planets in the solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
      open: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false,
      }))
    );
  };

  return (
    <>
      <h2 style={{ color: "green", textAlign: "center" }}>GeeksforGeeks</h2>
      <div className="layout">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`accordion ${faq.open ? "active" : ""}`}
            onClick={() => toggleAccordion(index)}
          >
            <div className="accordion__question">
              <p>{faq.question}</p>
            </div>
            <div className="accordion__answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Faq;
