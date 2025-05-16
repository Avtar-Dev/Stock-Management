"use client";

import { useProductContext } from "@/app/context/ProductContext";

const Search = () => {
  const { setSearch, setOption } = useProductContext();

  const SearchHandle = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 pb-2 w-fit ">Search Product</h1>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4 bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <input
          type="text"
          placeholder="Search product..."
          className="border border-gray-300 rounded px-4 py-2 w-full"
          onChange={SearchHandle}
        />
        <select
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => setOption(e.target.value)}>
          <option value="name">Filter by Name</option>
          <option value="price">Filter by Price</option>
          <option value="quantity">Filter by Quantity</option>
          <option value="company">Filter by Company</option>
          <option value="category">Filter by Category</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
