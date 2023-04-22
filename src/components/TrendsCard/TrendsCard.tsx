import React from "react";
import "./TrendsCard.scss";
import { faker } from "@faker-js/faker";

const TrendsCard = () => {
  const productName: string = faker.commerce.productName();
  const imageUrl: string = `https://picsum.photos/300/300?random=${Math.random()}`;


  return (
    <div className="trends-card">
      <div className="img">
        <img src={imageUrl} alt="Trend" />
      </div>
      <p>{productName}</p>
    </div>
  );
};

export default TrendsCard;
