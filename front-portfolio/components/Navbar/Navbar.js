import Link from "next/link";
import React from 'react';

const Navbar = () => {
  console.log('Navbar')
  return (
    <div className="mx-auto p-5">
          <nav className="flex md:justify-between items-center">
            <div className="flex justify-between w-full">
              <Link href="/">
                <img className="ml-8 h-10 cursor-pointer" src="/fakeblog_logo.svg"  alt="feather with the blog name" />
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="cursor-pointer md:hidden text-green-300 w-10  mr-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul className="hidden md:flex md:flex-row" id="mobileMenu">
              <li className="pr-5">
                <Link href="/">
                  <div className="cursor-pointer py-2 px-5 rounded hover:bg-green-300 text-gray-700 hover:text-white duration-300 text-lg">
                    Home
                  </div>
                </Link>
              </li>
              <li className="pr-5">
                <Link href="/about">
                  <div className="cursor-pointer py-2 px-5 rounded hover:bg-green-300 text-gray-700 hover:text-white duration-300 text-lg">
                    About
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
)};

export default Navbar;