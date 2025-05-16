"use client";

import { useProductContext } from "@/app/context/ProductContext";
import React, { useEffect } from "react";

const DisplayProduct = () => {
  const {
    productForm,
    products,
    setProducts,
    filterByName,
    option,
    filterByPrice,
    filterByQuantity,
    filterByCompany,
    filterByCategory,
  } = useProductContext();

  let filter = [];

  if (option === "name") {
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

  return (
    <div>
      <h1 className="text-3xl font-bold mt-12 mb-4 pb-2 w-fit">
        Display Current Stock
      </h1>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-gray-200">
            {filter == []
              ? products
              : filter?.map((items, i) => {
                  return (
                    <tr key={i} className="">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {i + 1}
                      </td>
                      <td className="px-6 py-4 break-words text-sm text-gray-900 max-w-24">
                        {items?.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {items?.price}$
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {items?.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {items?.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {items?.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <button className="text-indigo-600 hover:text-amber-800 mr-2 cursor-pointer">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-900 cursor-pointer">
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
