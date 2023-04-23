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
  handleFilter: any;
  selected: string[];
  filtered: Product[];
  noItemsFound: boolean;
}

export const AppContext = createContext<AppContextType>({
  products: [],
  setProducts: () => {},
  handleFilter: () => {},
  selected: [],
  filtered: [],
  noItemsFound: false,
});


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [noItemsFound, setNoItemsFound] = useState<boolean>(false);

const [selected, setSelected] = useState<string[]>([]);

 const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    setSelected((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  }, []);

useEffect(() => {
  const filteredByBrand = products.filter((product) => {
    if (selected.length === 0) {
      return true;
    } else {
      return selected.includes(product.brand);
    }
  });

  let filtered = filteredByBrand.length ? filteredByBrand : products;

  if (selected.includes("1") || selected.includes("2") || selected.includes("3") || selected.includes("4") || selected.includes("5")) {
    filtered = filtered.filter((product) => {
      return selected.includes(product.rating.toString());
    });
  }

  if (
    selected.includes("Under 500") ||
    selected.includes("1000 To 3000")
  ) {
    filtered = filtered.filter((product) => {
      if (
        (selected.includes("Under 500") && product.price <= 500) ||
        (selected.includes("1000 To 3000") &&
          product.price >= 1000 &&
          product.price <= 3000)
      ) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (selected.length && filtered.length === 0) {
    setNoItemsFound(true);
  } else {
    setNoItemsFound(false);
  }
  setFiltered(filtered);
}, [selected, products]);




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
      <AppContext.Provider value={{ products, setProducts, handleFilter, selected, filtered, noItemsFound }}>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/search-result' element={<SearchResult/>}/>
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
