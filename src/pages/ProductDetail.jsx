import React from "react";
import { UseItem } from "../context/ItemContexProvier";

const ProductDetail = ()=>{
  const {item} = UseItem();
  return (
    <div className='relative top-16 left-0 container mx-auto h-screen bg-gray'>

        <img className='p-5 mx-auto object-cover h-80' src='https://www.milton.in/cdn/shop/files/Flip_Lid_1000_4_1800x1800.jpg?v=1701342143' alt="" />
        <div className='grid grid-cols-5 gap-5 text-black'>
            <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6 text-black'>

                <h1 className='text-4xl font-bold'>{item.name}</h1>
                <h2>home applience</h2>
                <p>{item.location}</p>
                <p>24-04-2024</p>
            </div>
            <div className='col-span-2 p-5 bg-gray-50 rounded-lg my-6'>
                <p className='text-xl underline mb-1'>Seller Details:</p>
                <h1 className='text-lg'>Seller name : {item.email}</h1>
                <h1>894342889</h1>
            </div>
            <div className='col-span-1 p-5 bg-gray-50 rounded-lg my-6' >
                <h1 className='text-4xl font-bold text-center py-5'>₹ 332</h1>
                <button className='bg-green-950 text-white w-full rounded-lg font-semibold py-3'>Buy Product</button>
            </div>
        </div>
    </div>
)
}

export default ProductDetail