import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoBookmarks } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-8 text-center relative">
      <h2 className="text-3xl font-bold absolute inset-x-0 top-1/2 transform -translate-y-1/2">BLOGS 📖📖</h2>
      
      <NavLink to={'/Likes'} className="absolute top-4 right-8">
        <button className='flex flex-row '>
          MY BLOGS
          <IoBookmarks fontSize={'1.7rem'} />
        </button>
      </NavLink>
    </div>
  );
}

export default Header;
