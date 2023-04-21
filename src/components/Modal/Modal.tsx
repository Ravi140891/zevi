import React from "react";
import "./Modal.scss";
import { faker } from "@faker-js/faker";
import TrendsCard from "../TrendsCard/TrendsCard";

const Modal = () => {
  const popularSuggestions = Array.from({ length: 5 }, () =>
    faker.commerce.productName()
  );
  return (
    <div className="modal">
         <h2>Latest Trends</h2>
      <div className="trnds">
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
        <TrendsCard />
      </div>
      <h2>Popular Suggestions</h2>
      <ul>
        {popularSuggestions.map((suggestion: string, index: number) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Modal;
