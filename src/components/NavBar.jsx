import React from "react";
import { OlxLogo } from "../assets/svg";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className="flex flex-wrap p-4 bg-gray-100 items-center justify-between">
      <div className="flex-grow sm:flex sm:items-center sm:w-auto">
        <Link to='/'>
          <OlxLogo />
        </Link>
        <div className="hidden lg:flex border-2 rounded overflow-hidden border-black ml-5 bg-white">

          <IoMdSearch size={40} className="m-1" />

          <input
            className="px-2 py-1 focus:outline-none w-full"
            type="text"
            placeholder="location"
          />

          <button type="button" className="p-2">
            <IoIosArrowDown size={30} />
          </button>
        </div>

        <div className="hidden md:flex flex-grow md:items-center md:border-2 md:rounded md:border-black ml-4 md:ml-4">
          <input
            className="flex-grow px-3 py-1 focus:outline-none"
            type="text"
            placeholder="find cars, mobile phones and more"
          />
          <button type="button" className="bg-teal-950 p-2 text-white">
            <IoMdSearch size={30} />
          </button>
        </div>
      </div>

      <div className="flex items-center cursor-pointer p-2 ml-4">
        <h1 className="uppercase text-sm font-bold mr-2">english</h1>
        <IoIosArrowDown size={30} />
      </div>

      <Link to='/login' >
        <button className="underline hover:no-underline capitalize text-lg font-bold p-2">
          login
        </button>
      </Link >
      <Link to='/sellProduct'>
        <button className="ml-6 px-5 py-2 border-8 rounded-full border-t-yellow-300 border-b-blue-700 border-r-sky-500">
          + SELL
        </button>
      </Link >
    </div>
  );
}

export default NavBar;
