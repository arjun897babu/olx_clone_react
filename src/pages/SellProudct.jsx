import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from 'firebase/firestore';
import { useAuth } from "../context/AuthContext";
import { db } from "../services/firebase";
import { useImageUpload } from "../context/ImageUploadContext";

const SellProduct = () => {
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();
  const { uploadImage } = useImageUpload();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const url = image ? await uploadImage(image) : null;
    if (!url) {
      alert('Error uploading image');
      setIsLoading(false);
      navigate('/sellproduct')
      return;
    }
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        itemName,
        category,
        price,
        location,
        url,
        userId: user.uid,
        createdAt: new Date().toISOString() 
      });
      console.log(docRef); 
      alert('Product Added');
      setIsLoading(false);
      navigate('/myads')
     
    } catch (error) {
      console.error('Error in product upload:', error);
      alert('Error adding product');
      setIsLoading(false);
      navigate('myads')
    }
  };
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mt-2 uppercase">Post Your Ad</h1>
      </div>
      <form className="max-w-lg mx-auto my-3 p-8 border shadow-lg rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="itemName" className="block mb-2 text-sm font-medium text-gray-900">Item Name</label>
          <input type="text" id="itemName" name="itemName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => setItemName(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Category</label>
          <input type="text" id="category" name="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900">Location</label>
          <input type="text" id="location" name="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
          <input type="text" id="price" name="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">Upload Image</label>
          <input type="file" id="image" name="image" className="bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit" disabled={isLoading} className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
        {isLoading ? 'Posting...' : 'Post Ad'}
        </button>
      </form>
    </>
  );
};

export default SellProduct;
