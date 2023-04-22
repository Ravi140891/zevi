import React, { useMemo, useContext } from "react";
import "./SearchResult.scss";
import Products from "../Products/Products";
import SideBar from "../SideBar/SideBar";
import { AppContext } from "../../App";

const SearchResult = () => {
  const { products, setProducts } = useContext(AppContext);

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
      <h1>Search Results</h1>
      <section>
        <SideBar/>
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
      </section>
    </div>
  );
};

export default SearchResult;
