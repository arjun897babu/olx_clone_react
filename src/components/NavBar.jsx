import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../context/AuthContext";

import { OlxLogo } from "../assets/svg";
import { IoMdSearch, IoIosArrowDown, IoIosHeartEmpty } from "react-icons/io"
import { RiLogoutBoxLine } from "react-icons/ri"

const DropdownMenu = () => {
  const { user, LogOut } = useAuth()
  const navigagte = useNavigate()

  const handleLogOut = async () => {
    try {
      await LogOut();
      navigagte('/')
    } catch (error) {
      console.log('error logout:', error)
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const firstTwoLetters = user?.email.substring(0, 2).toUpperCase();

  return (
    <div className="relative">
      <button
        className="flex items-center justify-center w-10 h-10 bg-cyan-600 rounded-full focus:outline-none  "
        type="button"
        onClick={toggleDropdown}
      >
        <span className="w-full h-full rounded-full uppercase flex justify-center items-center" alt="user logo" >{firstTwoLetters}</span>
      </button>

      {/* Dropdown menu */}
      <div id="dropdownAvatar"
        className={`absolute right-0 mt-2 py-1 w-48 bg-white rounded-md shadow-lg z-50 ${isOpen ? 'block' : 'hidden'}`}
        style={{ minWidth: '12rem' }}>
        <ul className="py-1" >
          <Link to='/myads'>
            <li className=" px-4 py-2  hover:bg-gray-100 text-lg flex items-center ">
              <span className="mr-3"><IoIosHeartEmpty /></span> My ads
            </li>
          </Link>
          <li
            onClick={handleLogOut}
            className=" flex items-center px-4 py-2 text-lg  hover:bg-gray-100" >
            <span className="mr-3"><RiLogoutBoxLine /></span>
            Log out
          </li>
        </ul>
      </div>
    </div>
  );
};


const NavBar = () => {
  const { user } = useAuth()


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
      {
        user?.email ? (<DropdownMenu />) : (<Link to='/login' >
          <button className="underline hover:no-underline capitalize text-lg font-bold p-2">
            login
          </button>
        </Link >)
      }

      <Link to='/sellProduct'>
        <button className="ml-6 px-5 py-2 border-8 rounded-full border-t-yellow-300 border-b-blue-700 border-r-sky-500">
          + SELL
        </button>
      </Link >
    </div >
  );
}

export default NavBar;
