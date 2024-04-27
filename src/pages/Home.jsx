import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../services/firebase";

const Home = () => {
  const [ads, setAds] = useState([]);

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

  useEffect(() => {
    getAds()
  }, [])

  const adsList = ads.map((singelItem) => {
    return <Card key={singelItem.id} item = {singelItem} page={'home'} />
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