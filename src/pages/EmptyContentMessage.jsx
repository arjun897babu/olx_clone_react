import React from "react";
import { Link } from "react-router-dom";

const EmptyContentMessage = ({page}) => {
  return (
    <div className="bg-white p-4 rounded-lg  max-w-md mx-auto mt-10 text-center">
      <p className="text-gray-800 text-lg font-semibold mb-2">
        You haven't liked any ads yet
        <img className="inline-block ml-2" src="https://statics.olx.in/external/base/img/no-favorites.png" alt="Sad Face" />
      </p>
      <p className="text-gray-600 font-semibold mb-1">Like ads and share them with the world</p>

      <Link to={page==='favourite'?'/':'/sellProduct'} >
        <button className=" border border-black text-black font-bold py-2 px-4 rounded hover:bg-black hover:text-white transition duration-300">
        {page==='favourite'?'discover':'sell product'}
        </button>
      </Link>
    </div>
  );
};

 export default  EmptyContentMessage