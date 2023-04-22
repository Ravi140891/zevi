import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./SearchResult.scss";
import { faker } from "@faker-js/faker";
import Products from "../Products/Products";

interface Product {
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  rating: number;
  wishlist: boolean;
  brand: string;
}

const SearchResult = () => {
  const [brands] = useState<string[]>(["H&M", "Mango", "Zara", "Nike"]);

  const generateProducts = useCallback(() => {
    const newProducts: Product[] = [];
    for (let i = 0; i < 20; i++) {
      const productName = `${faker.commerce.productAdjective()} ${faker.commerce.product()}`;
      const imageUrl = faker.image.imageUrl(300, 300, "fashion", true);
      const price = faker.datatype.number({ min: 30, max: 3000 });
      const rating = faker.datatype.number({ min: 1, max: 5 });
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const discount = Math.floor(Math.random() * 16) + 10; 
      const discountedPrice = Math.floor(price * (1 - discount / 100)); 
      const newProduct: Product = {
        name: productName,
        image: imageUrl,
        price: price,
        rating: rating,
        wishlist: false,
        brand: brand,
        discountedPrice: discountedPrice,
      };
      newProducts.push(newProduct);
    }
    localStorage.setItem("products", JSON.stringify(newProducts));
  }, [brands]);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
    } else {
      generateProducts();
    }
  },[generateProducts]);

  const [products, setProducts] = useState<Product[]>([]);

  const handleWishlistClick = (index: number) => {
    const newProducts = [...products];
    newProducts[index].wishlist = !newProducts[index].wishlist;
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const memoizedProducts = useMemo(() => {
    return products;
  }, [products]);

  return (
    <div className="search-result">
      <div className="top">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
        </div>
        <h2 className="logo">zevi</h2>
      </div>
      <div className="gallery">
      {memoizedProducts.map((product, index) => (
        <Products
          key={index}
          index={index}
          name={product.name}
          image={product.image}
          price={product.price}
          discountedPrice={product.discountedPrice}
          rating={product.rating}
          brand={product.brand}
          wishlist={product.wishlist}
          handleWishlistClick={() => handleWishlistClick(index)}
        />
      ))}
      </div>
    </div>
  );
};

export default SearchResult;
