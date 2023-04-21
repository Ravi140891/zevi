import React from "react";
import "./TrendsCard.scss";
import { faker } from "@faker-js/faker";

const TrendsCard = () => {
  const productName:string = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;

  const imageUrl:string = faker.image.imageUrl(300, 300, "fashion", true);

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
