import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import EmptyContentMessage from "./EmptyContentMessage";
import { useAuth } from "../context/AuthContext";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import Card from "../components/Card";
const MyAds = () => {

  const [myads, setMyads] = useState([]);
  const { user } = useAuth();

  const ads = async () => {
    if (user) {
      const q = query(collection(db, 'products'), where("userId", "==", user.uid));
      try {
         onSnapshot(q, (doc) => {
          const ads = []; 
          doc.forEach((item) => {
            ads.push({ id: item.id, ...item.data() }); 
          });
          setMyads(ads);
        });
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    ads();
  }, [user ]);

  const myAdsList = myads.map(ads=>(<Card key={ads.id} item={ads} page={'myads'} />))
   

  return (
    <>
      <div className="flex px-10 py-5  ">
        <div className="mr-3   hover:cursor-pointer">
          <Link to='/myads' >
            <h1 className="uppercase text-xl font-thin">ads</h1>
          </Link>
        </div>
        <div className="uppercase text-xl font-thin hover:cursor-pointer">
          <Link to='/favourite'>
            <h1>favourites</h1>
          </Link>
        </div>
      </div>
      {
        myAdsList.length > 0 ? (<div className="m-2 rounded py-5 px-10 relative">
          <div className="flex flex-wrap">
            {myAdsList}
          </div>
        </div>) : (<EmptyContentMessage />)
      }

    </>
  )
}

export default MyAds