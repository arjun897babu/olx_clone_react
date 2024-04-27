import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";
import EmptyContentMessage from "./EmptyContentMessage";
import { db } from "../services/firebase";
import { onSnapshot, doc, arrayRemove } from "firebase/firestore";
import Card from "../components/Card";

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useAuth();


  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) {
          setFavourites(doc.data().favProducts)
        }
      })
    }
  }, [user?.email]);

  const favList = favourites.map((item) => (<Card key={item.id} item={item} />))


  return (
    <>
      <div className="flex py-5 px-10  ">
        <div className="mr-3 hover:cursor-pointer hover:opacity-70">
          <Link to='/myads' >
            <h1 className="uppercase text-xl font-thin ">ads</h1>
          </Link>
        </div>
        <div className="uppercase text-xl font-thin hover:cursor-pointer hover:opacity-70">
          <Link to='/favourite'>
            <h1>favourites</h1>
          </Link>
        </div>
      </div>
      {favList.length > 0 ? (<div className="m-2 rounded py-5 px-10 relative">
        <div className="flex flex-wrap">
          {favList}
        </div>
      </div>) : (<EmptyContentMessage page={'favourite'} />)}

    </>
  )
}

export default Favourite
