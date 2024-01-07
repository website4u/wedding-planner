"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
const NavTwo = dynamic(() => import("@/components/all/navbarhome"), {
  ssr: false,
});

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="border-gray-200 bg-ash text-brown "
      style={{
        backgroundImage: 'url("/assets/hero2.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "600px",
        width: "100%",
      }}
    >
      <nav className="max-w-screen-2xl grid grid-cols-2 md:grid-cols-3 justify-items-center items-center mx-auto p-4 bg-opacity-25 bg-slate-700">
        <NavTwo />
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold whitespace-nowrap text-brown">
            Wedding Planner
          </span>
        </a>
        <div className="hidden md:flex space-x-8 gap-8">
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
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
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
      </nav>
      <div className="p-14 md:p-20">
        <div className="mx-auto md:flex flex-col justify-items-center items-center mt-8 p-4 bg-black bg-opacity-20 border  rounded-xl">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-lrose">
            Elevate Your Wedding Experience with
            <span className="text-primary-700"> Wedding Planner</span>
          </h1>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">
            Transform your special day into a magical celebration with
            personalized wedding planning services from Dream Events. From
            concept to execution, we make dreams come true.
          </p>
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const NavLink = ({ href, title }) => (
  <a
    href={href}
    className="text-sm font-medium block py-2 px-3 text-rose rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-brown md:p-0 "
  >
    {title}
  </a>
);
