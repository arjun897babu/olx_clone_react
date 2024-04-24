import React from "react";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <div className="m-2 rounded py-5 px-10 relative">
        <h1 className="text-2xl font-semibold pb-3">Fresh Recommendations</h1>
        <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        
      </div>
     
    </>
  )
};


export default Home