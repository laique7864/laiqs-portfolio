import React from "react";
import logo from "../assets/main-logo.png";
import Image from "next/image";

function Topbar() {
  return (
      <div className="sticky  top-0 start-0 z-[10000] flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="flex justify-between items-center w-full px-4 py-2  text-text">
          <a href="/" className="flex items-center">
            <Image src={logo} className="h-16 w-14" alt="Portfolio Logo" />
          </a>
          <nav className="hidden md:flex space-x-4">
            <a
              href="#about"
              className="text-lg font-semibold hover:text-primary"
            >
              About
            </a>
            <a
              href="#work"
              className="text-lg font-semibold hover:text-primary"
            >
              Work
            </a>
            <a
              href="#contact"
              className="text-lg font-semibold hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-primary">
              Portfolio
            </span>
          </a>
          <button className="md:hidden flex items-center">
            {/* Hamburger icon for mobile */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
  );
}

export default Topbar;
