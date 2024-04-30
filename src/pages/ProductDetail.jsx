import React from "react";
import { UseItem } from "../context/ItemContexProvier";
import { FaShareAlt, FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
    const { item } = UseItem();

    return (
        <>
            <div className="bg-gray-100 m-5 p-5 flex gap-5">

                <div className="flex-1">
                    <div className="p-6 border bg-white border-black rounded-md flex items-center justify-center">
                        <img src={item?.url} alt={item?.itemName} className="h-80 object-cover" />
                    </div>
                    <div className="mt-0.5 bg-white p-3 rounded-md border border-black">
                        <h1 className="ml-2 capitalize font-semibold text-2xl">Details</h1>
                        <ul className="list-none mt-2 text-slate-600">
                            <li className="flex">
                                <span className="font-semibold w-40">Name</span>
                                <span>{item?.itemName}</span>
                            </li>
                            <li className="flex">
                                <span className="font-semibold w-40">Year</span>
                                <span>{item?.year}</span>
                            </li>
                            <li className="flex">
                                <span className="font-semibold w-40">Price</span>
                                <span>{item?.price}</span>
                            </li>
                            <li className="flex">
                                <span className="font-semibold w-40">Posted on</span>
                                <span>{item?.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-1/3 h-44 bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between">
                        <span className="text-4xl font-semibold mr-4">₹{item?.price}</span>
                        <div>
                            <button
                                title="Share"
                                className="p-2 mr-4 rounded-full text-3xl bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <FaShareAlt />
                            </button>
                            <button
                                title="Favourite"
                                className="p-2 rounded-full text-3xl bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                            >
                                <FaRegHeart />
                            </button>
                        </div>
                    </div>
                    <p className=" mt-2 tex-sm font-thin">seller : {item?.sellerName}</p>
                    <p className=" mt-1 tex-sm font-thin  ">contact :<a  href={`tel:${item?.contact_number}`}>{item?.contact_number}</a></p>
                    <div className=" mt-2 flex justify-between">
                        <p className=" tex-sm font-thin">{item?.location}</p>
                        <p className=" tex-sm font-thin">{item?.createdAt && new Date(item.createdAt).toLocaleDateString('en-GB')}</p>
                    </div>
                </div>
            </div>
                      
        </>
    );
}

export default ProductDetail;
