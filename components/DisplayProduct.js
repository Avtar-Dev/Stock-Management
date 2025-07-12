"use client";

import { useProductContext } from "@/app/context/ProductContext";
import React, { useEffect } from "react";

const DisplayProduct = () => {
  const {
    products,
    setProducts,
    option,
    search,
    setProductForm,
    editClick,
    setEditClick,
    setEditId,
  } = useProductContext();

  const th =
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
  const td = "px-6 py-4 break-words text-sm text-gray-900 max-w-24";

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    let result = await response.json();
    setProducts(result.products);
  };

  const DeleteProduct = async (id) => {
    try {
      const response = await fetch(`/api/product?id=${id}`, {
        method: "DELETE",
      });

      const result = await response.json();
      if (result.success) {
        fetchProducts();
      } else {
        console.error("Delete failed:", result.error);
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const filterAll = products?.filter((item) => {
    const searchText = search.toLowerCase();
    return (
      item.name?.toString().toLowerCase().includes(searchText) ||
      item.price?.toString().includes(searchText) ||
      item.quantity?.toString().includes(searchText) ||
      item.company?.toString().toLowerCase().includes(searchText) ||
      item.category?.toString().toLowerCase().includes(searchText)
    );
  });
  const filterByName = products?.filter((items) =>
    items?.name?.toString().toLowerCase().includes(search?.toLowerCase())
  );
  const filterByPrice = products?.filter((items) =>
    items?.price?.toString().includes(search)
  );
  const filterByQuantity = products?.filter((items) =>
    items?.quantity?.toString().includes(search)
  );
  const filterByCompany = products?.filter((items) =>
    items?.company?.toString().toLowerCase().includes(search?.toLowerCase())
  );
  const filterByCategory = products?.filter((items) =>
    items?.category?.toString().toLowerCase().includes(search?.toLowerCase())
  );

  let filter = [];

  if (option === "all") {
    filter = filterAll;
  } else if (option === "name") {
    filter = filterByName;
  } else if (option === "price") {
    filter = filterByPrice;
  } else if (option === "quantity") {
    filter = filterByQuantity;
  } else if (option === "company") {
    filter = filterByCompany;
  } else if (option === "category") {
    filter = filterByCategory;
  }

  const EditHandle = (id) => {
    const data = products.find((item) => item._id === id);
    setProductForm(data);
    setEditClick(!editClick);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmDelete) {
      DeleteProduct(id);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mt-12 mb-4 pb-2 w-fit mx-auto sm:mx-0">
        Display Current Stock
      </h1>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className={th}>#</th>
              <th className={th}>Name</th>
              <th className={th}>Price</th>
              <th className={th}>Quantity</th>
              <th className={th}>Company</th>
              <th className={th}>Category</th>
              <th className={th}>Actions</th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {(option === "" ? products || [] : filter || [])
              .sort((a, b) => b._id.localeCompare(a._id))
              ?.map((items, i) => {
                return (
                  <tr key={i} className="">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {i + 1}
                    </td>
                    <td className={td}>{items?.name}</td>
                    <td className={td}>{items?.price}$</td>
                    <td className={td}>{items?.quantity}</td>
                    <td className={td}>{items?.company}</td>
                    <td className={td}>{items?.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button
                        className="text-white hover:bg-green-700 mr-2 cursor-pointer border p-2 bg-blue-600 rounded-md"
                        onClick={() => {
                          EditHandle(items._id);
                        }}>
                        Edit
                      </button>
                      <button
                        className="text-white hover:bg-red-800 cursor-pointer border p-2 bg-amber-700 rounded-md"
                        onClick={() => handleDelete(items._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayProduct;
