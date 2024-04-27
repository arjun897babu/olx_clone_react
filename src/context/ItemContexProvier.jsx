import React, { useContext, createContext, useState } from "react";

const ItemContext = createContext();

export const ItemContextProvider = ({ children }) => {
  
  const [item, setItem] = useState(null);
  return (
    <ItemContext.Provider value={{ item, setItem }} >
      {children}
    </ItemContext.Provider>
  )
}


export const UseItem = () => {
  return useContext(ItemContext)
}
