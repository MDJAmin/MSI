import React from "react";
import { bagImg, msiImg, searchImg } from "../../utils";
import { navLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
  useGSAP(() => {
    gsap.fromTo(
      ".logo-icon",
      {
        opacity: 0,
        y: -25,
        direction: 5,
        delay: 0.5,
      },
      {
        opacity: 1,
        y: 0,
      }
    );
    gsap.fromTo(
      ".nav-items",
      {
        opacity: 0,
        y: -30,
      },
      {
        y: 0,
        opacity: 1,
        direction: 1,
        stagger: 0.1,
        scrub: true,
      }
    );
  }, []);
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
      <Link to="/"> <img src={msiImg} alt="MSI" className="logo-icon w-10 opacity-0" /></Link> 

        <div className="flex flex-1 justify-center mt-5 max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="nav-items px-5 text-sm cursor-pointer text-gray hover:text-red-600 hover:scale-[1.1] "
            >
              {nav}
            </div>
          ))}
        </div>
        <div className="flex items-baseline mt-5 gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="opacity-0 logo-icon cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={30}
            className="opacity-0 logo-icon cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
}
