import React, { useState } from "react";
import { bagImg, msiImg, searchImg } from "../../utils";
import { navLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      },
      {
        y: 0,
        opacity: 1,
        direction: 1,
        stagger: 0.1,
        scrub: true,
      }
    );
    gsap.fromTo(
      ".hamburger-menu",
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <div className='flex justify-between max-sm:w-full'>
          <img
            src={msiImg}
            alt='MSI'
            className='logo-icon w-10 opacity-0'
          />

          <div
            className='hamburger-menu sm:hidden flex items-center cursor-pointer'
            onClick={toggleSidebar}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-white'
              fill='none'
              viewBox='0 0 20 20'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>
        </div>

        <div className='flex flex-1 justify-center mt-5 max-sm:hidden'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='nav-items px-5 text-sm cursor-pointer text-gray hover:text-red-600 hover:scale-[1.1]'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='flex items-baseline mt-5 gap-7 max-sm:justify-end max-sm:flex-1 max-sm:hidden'>
          <img
            src={searchImg}
            alt='search'
            width={18}
            height={18}
            className='opacity-0 logo-icon cursor-pointer'
          />
          <img
            src={bagImg}
            alt='bag'
            width={18}
            height={30}
            className='opacity-0 logo-icon cursor-pointer'
          />
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-full bg-red-600 text-white sm:hidden max-sm:visible transform ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
      >
        <div className='flex justify-end p-5 pt-9'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={toggleSidebar}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={4}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>

        <div className='p-4'>
          {navLists.map((nav) => (
            <div
              key={nav}
              className='py-2 text-lg cursor-pointer hover:text-black transition-colors'
            >
              {nav}
            </div>
          ))}
        </div>

        <div className='p-4 flex items-center gap-4'>
          <img
            src={searchImg}
            alt='search'
            width={18}
            height={18}
            className='cursor-pointer'
          />
          <img
            src={bagImg}
            alt='bag'
            width={18}
            height={30}
            className='cursor-pointer'
          />
        </div>

        <div className='p-4 mt-auto'>
          <p className='text-center font-semibold tracking-widest text-white text-xs'>
            Copyright © 2024 MSI Computer Corp. All rights
            reserved.
          </p>
        </div>
      </div>
    </header>
  );
}
