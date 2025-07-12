"use client";

import { useProductContext } from "@/app/context/ProductContext";
import { useEffect } from "react";

const AddProduct = () => {
  const {
    productForm,
    setProductForm,
    setProducts,
    editClick,
    setEditClick,
    editId,
    setEditId,
  } = useProductContext();

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    let result = await response.json();
    setProducts(result.products);
  };

  const EditProduct = async (id) => {
    await fetch(`/api/product?id=${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: productForm.category,
        company: productForm.company,
        name: productForm.name,
        price: productForm.price,
        quantity: productForm.quantity,
      }),
    });
  };

  const AddProducts = async (e) => {
    e.preventDefault();
    const { name, price, quantity, company, category } = productForm;
    console.log("name", name);

    if (!name || !price || !quantity || !company || !category) {
      alert("All fields are required.");
      return;
    }

    if (editClick) {
      await EditProduct(editId);
      fetchProducts();
      setEditClick(false);
      setEditId("");
      setProductForm({});
      alert("Product updated successfully");
      return;
    } else {
      try {
        const response = await fetch("/api/product", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productForm),
        });

        if (response.ok) {
          alert("Product added successfully");
          setProductForm({});
          fetchProducts();
        } else {
          const result = await response.json();
          console.error("POST failed:", result);
        }
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold mt-12 mb-4 pb-2 w-fit mx-auto sm:mx-0">
        Add Product
      </h1>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 mb-10 max-w-full">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <input
            type="text"
            placeholder="Product Name"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="name"
            value={productForm.name || ""}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="price"
            value={productForm.price || ""}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="quantity"
            value={productForm.quantity || ""}
            required
          />
          <input
            type="text"
            placeholder="Company"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="company"
            value={productForm.company || ""}
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 rounded w-full"
            onChange={handleChange}
            name="category"
            value={productForm.category || ""}
            required
          />
        </div>

        <div className="mt-6">
          <button
            className="bg-indigo-600 hover:bg-green-500 text-white px-6 py-2 rounded cursor-pointer"
            onClick={AddProducts}>
            {!editClick ? "Add Product" : "Edit Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
