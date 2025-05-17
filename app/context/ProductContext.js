"use client";

import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productForm, setProductForm] = useState({});
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("");
  const [editClick, setEditClick] = useState(false);
  const [editId, setEditId] = useState("");

  const value = {
    productForm,
    setProductForm,
    products,
    setProducts,
    search,
    setSearch,
    option,
    setOption,
    editClick,
    setEditClick,
    editId,
    setEditId,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
