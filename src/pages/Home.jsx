import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { doc, getDocs, collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const [ads, setAds] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const {user} = useAuth()

  const getAds = async () => {
    try {
      const docRef = await getDocs(collection(db, 'products'));
      const allAds = docRef.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setAds(allAds)

    } catch (error) {
      console.log(error)
    }
  }

  const getchFavourites = async () => {
    if (user) {
      onSnapshot  (doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) {
          setFavourites(doc.data().favProducts.map((item)=>item.id))
        }
      })
    }
  };

  useEffect(() => {
    getAds();
    getchFavourites()
  }, [user])
   
 
  const adsList = ads.map((singelItem) => {
     
    return <Card key={singelItem.id} item={singelItem} page={'home'} isFavourites = {favourites.includes(singelItem.id)} />
  })

  return (
    <>
      <div className="m-2 rounded py-5 px-10 relative">
        <h1 className="text-2xl font-semibold pb-3">Fresh Recommendations</h1>
        <div className="flex flex-wrap">
          {adsList}
        </div>

      </div>

    </>
  )
};


export default Home