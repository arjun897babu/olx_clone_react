import React from "react";
import { Link } from "react-router-dom";
const SellProduct = () => {

  return (
    <>
    <div className="text-center">
      <h1 className="text-4xl mt-2 uppercase">post your ad</h1>
    </div>
      <form className="max-w-lg mx-auto my-3 p-8 border shadow-lg rounded-lg">
        <div className="mb-6">
          <label htmlFor="itemName" className="block mb-2 text-sm font-medium text-gray-900">Item Name</label>
          <input type="text" id="itemName" name="itemName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">category</label>
          <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
          <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" required />
        </div>

        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Upload Image</label>
          <input type="file" id="image" name="image"
            className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5" />
        </div>
        <button type="submit" className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </>
  )
}

export default SellProduct