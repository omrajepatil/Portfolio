import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

 

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-around ">
        
        {/* Logo Section */}
        <div className="flex items-center">
          {/* <img src="/path/to/logo.png" alt="Logo" className="h-10 w-10 mr-2" /> */}
          <span className="text-2xl font-bold text-gray-800 hover:font-serif">Omraje</span>
        </div>

        {/* Links Section */}
        <div className="space-x-8 hidden md:flex">
          <a href="#home" className="text-gray-600  hover:text-indigo-900 hover:font-bold">Home</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-900 hover:font-bold">About</a>
          <a href="#skill" className="text-gray-600 hover:text-indigo-900 hover:font-bold">Skills</a>
          <a href="#project" className="text-gray-600 hover:text-indigo-900 hover:font-bold">Projects</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-900 hover:font-bold">Contact</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
