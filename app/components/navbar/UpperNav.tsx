"use client";
import { BiChevronDown } from "react-icons/bi";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import React, { useState, useEffect } from "react";
import { MdClose, MdHome } from "react-icons/md";
import Link from "next/link";
import MobileNav from "./mobile/MobileNav";
import clsx from "clsx";

export default function UpperNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-red-900 px-4" aria-label="upper nav">
      <div className="flex justify-start lg:justify-end gap-4 py-2 px-4 lg:px-0 items-center laptop:max-w-[1140px] mx-auto text-white">
        <div className="flex gap-4 relative">
          <div className="hidden tablet:flex bg-white items-center ">
            <input
              className="py-3 px-2 text-sm border-r border-gray-400 outline-none text-gray-600"
              placeholder="Search this site"
            />
            <button className="text-xl px-2 text-red-800">
              <CiSearch />
            </button>
          </div>

          <button className="hidden tablet:flex gap-2 items-center border px-4 border-red-500">
            Resources <BiChevronDown size={20} />
          </button>
        </div>
        <button
          className="flex flex-col items-center gap-2 font-bold tablet:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <CiMenuFries size={25} color="white" />
          <span className="text-[10px]">MENU</span>
        </button>
        <button
          className="flex flex-col items-center gap-2 font-bold tablet:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <CiSearch size={25} color="white" />
          <span className="text-[10px]">SEARCH</span>
        </button>
        <div
          className={clsx(
            "fixed h-full w-screen bg-black/30 lg:hidden backdrop-blur-sm top-0 right-0 transition duration-700 ease-in-out -translate-x-full",
            isMenuOpen && "translate-x-0"
          )}
        >
          <div className="fixed  left-0 z-50 bottom-0 top-0 h-screen w-[325px] max-w-[90%] bg-[#0c234b] ease-in-out duration-500 lg:hidden">
            <div className="flex justify-between items-center px-5 py-2 bg-red-900 text-white">
              <button
                className="flex flex-col items-center gap-2 font-bold "
                onClick={handleToggle}
              >
                <MdClose size={25} color="white" />
                <span className="text-[10px]">CLOSE</span>
              </button>
              <Link href="/" onClick={handleToggle}>
                <MdHome size={25} color="white" />
                <span className="text-[10px]">HOME</span>
              </Link>
            </div>
            {/* Mobile Nav */}
            <div className="">
              <MobileNav closeMenu={handleToggle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
