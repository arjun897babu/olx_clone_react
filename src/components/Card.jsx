import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { arrayUnion, doc, updateDoc, arrayRemove, deleteDoc } from "firebase/firestore";

import { db } from "../services/firebase";

import { toastMessage } from "../utils/toastMessage";


import { HiLightningBolt } from 'react-icons/hi'
import { BiHeart } from 'react-icons/bi'

import { IoIosHeart } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
const Card = ({ item, page }) => {

  const [like, setLike] = useState(true);
  const { user } = useAuth()

  const makefavourite = async () => {
    const userEmail = user?.email
    if (!userEmail) {
      toastMessage('error', 'Log in to access the services..')
      return
    }
    try {
      const userDoc = doc(db, 'users', userEmail);
      setLike(!like);

      await updateDoc(userDoc, {
        favProducts: like ? arrayUnion({ ...item }) : arrayRemove(item)
      });

      toastMessage(like ? 'success' : 'error', like ? 'Added to favourites..' : 'Removed from favourites..');
    } catch (error) {
      console.error("Failed to update document:", error);
    }
  }

  const unlistfavourite = async (myad) => {
    try {
      const userDoc = doc(db, 'users', user.email);
      await updateDoc(userDoc, {
        favProducts: arrayRemove(myad)
      })
      toastMessage('error', 'removed from favourites')
    } catch (error) {
      console.error(error)
    }
  }

  const removeAd = async (id) => {
    try {
      await deleteDoc(doc(db, 'products', id));
      toastMessage('success','Your ad is removed')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="lg:w-1/4 pr-5 mb-3 relative">
      <div className="border border-gray-200 bg-white shadow-2xl hover:shadow-orange-100 rounded cursor-pointer">
        <div className="h-52 overflow-hidden p-4">
          <img src={item.url} alt={item.itemName} className="w-full h-full object-contain mt-6" />
        </div>
        <div className="p-3">
          <h2 className="font-bold text-xl">₹ {item.price}</h2>

          <p className=" whitespace-nowrap overflow-hidden text-ellipsis">
            {item.year}
          </p>
          <h3 className="uppercase mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
            {item.itemName}
          </h3>
          <p className="text-sm capitalize text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis">
            {item.location}
          </p>

          <div className="bg-white w-fit p-2 rounded-full absolute top-2 right-8 shadow-md">
            {page == 'home' ? (<p onClick={makefavourite}>
              {
                !like && user ? (< IoIosHeart className="text-2xl" />) : (< BiHeart className="text-2xl" />)
              }

            </p>) : (<p onClick={() => {
              page === 'myads' ? removeAd(item.id) : unlistfavourite(item);
            }}>
              <AiOutlineClose className="text-xl" />
            </p>
            )}
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