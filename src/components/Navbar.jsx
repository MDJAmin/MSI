import React from "react";
import { bagImg, msiImg, searchImg } from "../utils";
import { navLists } from "../constants";

export default function Navbar() {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img src={msiImg} alt="MSI" className="w-10" />

        <div className="flex flex-1 justify-center mt-5 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-red-600 hover:scale-[1.1] transition-all"
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline mt-5 gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18} className="cursor-pointer hover:scale-[1.1] transition-all"/>
          <img src={bagImg} alt="bag" width={18} height={30} className="cursor-pointer hover:scale-[1.1] transition-all"/>
        </div>
      </nav>
    </header>
  );
}
