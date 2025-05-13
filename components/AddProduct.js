"use client";

import React, { useState } from "react";

const AddProduct = () => {
  const [productForm, setProductForm] = useState({});
  const AddProducts = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productForm),
      });
      console.error("response:", response);

      const result = await response.json();
      console.error("result:", result);

      if (response.ok) {
        alert("Product added Successfully");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mt-12 mb-4 pb-2 w-fit ">Add Product</h1>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-10 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="name"
          />
          <input
            type="text"
            placeholder="Price"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="price"
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="quantity"
          />
          {/* <input
            type="text"
            placeholder="Company"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded w-full"
            onChange={handleChange}
          /> */}
        </div>

        <div className="mt-6">
          <button
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded"
            onClick={AddProducts}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
