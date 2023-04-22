import React, { createContext, useState, useEffect, useCallback } from 'react';
import Layout from './components/Layout/Layout';
import { faker } from "@faker-js/faker";
import {Route, Routes} from 'react-router-dom'
import SearchResult from './components/SearchResult/SearchResult';


interface Product {
  name: string;
  image: string;
  price: number;
  discountedPrice: number;
  rating: number;
  wishlist: boolean;
  brand: string;
}

interface AppContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const AppContext = createContext<AppContextType>({
  products: [],
  setProducts: () => {},
});


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const generateProducts = useCallback(() => {
    const newProducts: Product[] = [];
    const brands = ["H&M", "Mango", "Zara", "Nike"];
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
    setProducts(newProducts);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("products")) {
      setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
    } else {
      generateProducts();
    }
  }, [generateProducts]);
  return (
    <div className="App">
      <AppContext.Provider value={{ products, setProducts }}>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/search-result' element={<SearchResult/>}/>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
