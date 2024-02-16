import React from "react";
import logo from "../assets/main-logo.png";
import Image from "next/image";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";

function Topbar() {
  return (
    <div className="sticky  top-0 start-0 z-[10000] flex justify-between w-full p-2 border-b border-gray-200 bg-gray-100 dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-between items-center w-full px-4 py-2  text-text">
        <a href="/" className="flex items-center">
          <Image src={logo} className="h-16 w-14" alt="Portfolio Logo" />
        </a>
        <div className="bg-gray-800 hidden md:block text-white py-2 px-4 rounded-full">
          <nav className="hidden md:flex justify-center items-center gap-4">
            <Link href="/" className="text-white hover:text-gray-300 mb-2">
              <HomeOutlined />
            </Link>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Works
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <Link  href="/contactus" className="hover:text-gray-300">
              Contact
            </Link >
          </nav>
        </div>

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
