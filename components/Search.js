import React from "react";

const Search = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 pb-2 w-fit ">Search Product</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <input
          type="text"
          placeholder="Search product..."
          className="border border-gray-300 rounded px-4 py-2 w-full "
        />
        <select className="border border-gray-300 rounded px-4 py-2  ">
          <option value="">Filter by Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Appliances">Appliances</option>
          <option value="Furniture">Furniture</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
