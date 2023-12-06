"use client";

import React, { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" border-gray-200 bg-ash text-brown">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap text-brown">Wedding Planner</span>
        </a>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/" title="Home" />
          <NavLink href="/vendors" title="Vendors" />
          <NavLink href="#" title="Services" />
          <NavLink href="#" title="Pricing" />
          <NavLink href="/sign-in" title="Login" />
        </div>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-brown rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:hidden absolute top-16 left-0  w-full z-50 h-screen overflow-y-auto bg-gray-800 bg-opacity-90  `}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 mt-4 rounded-lg rtl:space-x-reverse  ">
            <li>
              <NavLink href="/" title="Home" />
            </li>
            <li>
              <NavLink href="/vendors" title="Vendors" />
            </li>
            <li>
              <NavLink href="#" title="Services" />
            </li>
            <li>
              <NavLink href="#" title="Pricing" />
            </li>
            <li>
              <NavLink href="/sign-in" title="Login" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// NavLink component for consistent styling
const NavLink = ({ href, title }) => (
  <a
    href={href}
    className="block py-2 px-3 text-rose rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-brown md:p-0 "
  >
    {title}
  </a>
);
