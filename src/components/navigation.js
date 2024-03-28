'use client';

import React, { useState } from 'react';
import '../app/globals.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-mont text-secondary-800 z-30">
      <div className="max-w-screen-xl flex flex-row items-center justify-between mx-auto p-4">
        <div className="w-full flex justify-between pb-0 navbar-brand">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://design-habitat.nyc3.cdn.digitaloceanspaces.com/logo/DH-logo-icon.svg"
              className="h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-lg font-sans font-medium whitespace-nowrap">
              The Design Habitat
            </span>
          </a>
          <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''} flex flex-col font-medium p-4 md:space-x-8 md:flex-row`}>
        <li>
          <a href="/about" className="block py-2 px-3 hover:text-secondary-400" aria-current="page">
            About
          </a>
        </li>
        {/* <li>
          <a href="/courses" className="block py-2 px-3 hover:text-secondary-400">
            Courses
          </a>
        </li> */}
        <li>
          <a href="/contact" className="block py-2 px-3 hover:text-secondary-400">
            Contact
          </a>
        </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
