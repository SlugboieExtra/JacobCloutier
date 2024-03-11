"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoImage from "../../public/assets/Logo.svg";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";


const Header = () => {
  const [activeLink, setActiveLink] = useState<string|null>('/');
  const [scrollActive, setScrollActive] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const navLinks = [
    {
      title : "Home",
      link : "/"
    },
    {
      title : "About",
      link : "/about"
    },
    {
      title : "Projects",
      link : "/projects"
    },
    {
      title : "Contact",
      link : "/contact"
    }
  ]
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Image
              src={LogoImage}
              className="h-12 w-auto"
              priority
              alt="Logo"
            />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {navLinks.map((navLink,id)=>
              <Link
              key={id}
              href={navLink.link}
              onClick={() => {
                setActiveLink(navLink.link);
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === navLink.link
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              {navLink.title}
            </Link>
            )}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline href='/help'>How To Help</ButtonOutline>

            {menuActive?
            <a className="lg:hidden m-2 hover:text-slate-600 transition-all cursor-pointer"
              onClick={()=>setMenuActive(false)}
            >
              <IoClose  size={"30px"}/>
            </a>
            :
            <a className="lg:hidden m-2 hover:text-slate-600 transition-all cursor-pointer"
              onClick={()=>setMenuActive(true)}
            >
              <IoMenu  size={"30px"}/>
            </a>
            }
          </div>
        </nav>
         <div className={menuActive?"bg-white sm:px-3 opacity-100":"transition-all opacity-0 h-0"}>
          <ul className="w-full justify-between items-center text-black">
          {navLinks.map((navLink,id)=>
              <Link
              key={id}
              href={navLink.link}
              onClick={() => {
                setActiveLink(navLink.link);
              }}
              className={
                "mx-1 sm:mx-2 cursor-pointer text-center px-3 sm:px-4 py-2 w-auto block items-center text-s border-t-2 transition-all " +
                (activeLink === navLink.link
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            >
              {navLink.title}
            </Link>
            )}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
