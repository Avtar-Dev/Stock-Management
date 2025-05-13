import React from "react";

const DisplayProduct = () => {
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
                Company
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Sample Row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                1
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                iPhone 15
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Apple
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                25
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Electronics
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                $999
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayProduct;
