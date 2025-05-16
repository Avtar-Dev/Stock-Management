"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productForm, setProductForm] = useState({});
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("name");

  const filterByName = products.filter((items) => items.name?.includes(search));
  const filterByPrice = products.filter((items) =>
    items.price?.includes(search)
  );
  const filterByQuantity = products.filter((items) =>
    items.quantity?.includes(search)
  );
  const filterByCompany = products.filter((items) =>
    items.company?.includes(search)
  );
  const filterByCategory = products.filter((items) =>
    items.category?.includes(search)
  );

  const fetchProducts = async () => {
    console.log("hitting api use effect");

    const response = await fetch("/api/product");
    let result = await response.json();
    setProducts(result.products);
  };

  const value = {
    productForm,
    setProductForm,
    products,
    setProducts,
    search,
    setSearch,
    option,
    setOption,
    filterByName,
    filterByPrice,
    filterByQuantity,
    filterByCompany,
    filterByCategory,
    fetchProducts,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
