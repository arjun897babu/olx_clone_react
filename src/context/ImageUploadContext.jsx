import React, { createContext, useContext, useState } from "react";
import { storage } from "../services/firebase";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


const ImageContext = createContext();

export const ImageProvider = ({ children }) => {

  const uploadImage = async (file) => {
    const storageRef = ref(storage, `images/${Date.now()}`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref); 
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      return null
    }
  };

  
  return (
    <ImageContext.Provider value={{ uploadImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageUpload = () => {
  return useContext(ImageContext);
};

