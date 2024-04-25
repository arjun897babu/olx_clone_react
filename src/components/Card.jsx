import React from "react";

import { BiHeart } from 'react-icons/bi'
import { HiLightningBolt } from 'react-icons/hi'


const Card = ({ imageUrl = "https://imgd.aeplcdn.com/664x374/bikewaleimg/ec/1320/img/l/hero-impulse-side-7656.jpg?v=201711021421&q=80", price = "₹ 222,222", title = "Impulse", description = "Description of the product." }) => {
  
  return (
    <div className="lg:w-1/4 pr-5 mb-3 relative">
      <div className="border border-gray-200 bg-white shadow-2xl hover:shadow-orange-100 rounded cursor-pointer">
        <div className="h-52 overflow-hidden p-4">
          <img src={imageUrl} alt={title} className="w-full h-65 mt-6"  />
        </div>
        <div className="p-3">
          <h2 className="font-bold text-xl">{price}</h2>
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h3>
          <p className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
            {description}
          </p>
          <div className="bg-white w-fit p-2 rounded-full absolute top-2 right-8 shadow-md">
            <BiHeart className="text-2xl" />
          </div>
        </div>
        <div className="absolute top-5 left-2 flex items-center bg-yellow-300 text-sm rounded px-2 gap-1">
          <HiLightningBolt />
          Featured
        </div>
      </div>
    </div>
  );
};



export default Card