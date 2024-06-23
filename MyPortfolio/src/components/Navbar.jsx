import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        {/* Large screens: Logo on left, items on right */}
        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="text-white text-2xl font-bold">Ridhi</div>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-400">About</Link>
            <Link to="/projects" className="text-white hover:text-gray-400">Projects</Link>
            <Link to="/experience" className="text-white hover:text-gray-400">Experience</Link>
            <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
          </div>
        </div>

        {/* Small screens: Logo on left, menu/close button on right */}
        <div className="flex items-center justify-between md:hidden">
          <div className="text-white text-2xl font-bold">Ridhi</div>
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Menu items in a column on small screens */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col items-center">
              <Link to="/" className="block text-white hover:text-gray-400 mb-2">Home</Link>
              <Link to="/about" className="block text-white hover:text-gray-400 mb-2">About</Link>
              <Link to="/projects" className="block text-white hover:text-gray-400 mb-2">Projects</Link>
              <Link to="/experience" className="block text-white hover:text-gray-400 mb-2">Experience</Link>
              <Link to="/contact" className="block text-white hover:text-gray-400 mb-2">Contact</Link>
            </div>
            {/* Close button for mobile */}
            <div className="flex justify-end mt-4">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
              
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
