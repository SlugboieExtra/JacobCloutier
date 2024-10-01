"use client"
import React, { useState } from "react";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline.";
import LogoImage from "../../public/assets/Logo.svg";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from 'next/navigation'



const Header = () => {
  const pathName = usePathname();
  const [menuActive, setMenuActive] = useState(false);
  const navLinks = [
    {
      title : "Home",
      link : "/"
    },
    {
      title : "Platform",
      link : "/platform"
    },
    {
      title : "Contact",
      link : "/contact"
    }
  ]
  
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all pt-0 shadow-md"
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href={'/'} onClick={()=>setMenuActive(false)}> 
              <Image
              src={LogoImage}
              className="h-12 w-auto"
              priority
              alt="Logo"
              />
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {navLinks.map((navLink,id)=>
              <Link
              key={id}
              href={navLink.link}
              onClick={()=>setMenuActive(false)}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (pathName === navLink.link
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              {navLink.title}
            </Link>
            )}
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <ButtonOutline addClass="px-2 sm:px-5" target="_blank" href='https://calendly.com/jacobcloutier/30min'>Meet With Me</ButtonOutline>

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
         <div className={menuActive?"bg-white sm:px-3 opacity-100":"transition-all opacity-0 h-0 hidden"}>
          <ul className="w-full justify-between items-center text-black">
          {navLinks.map((navLink,id)=>
              <Link
              key={id}
              href={navLink.link}
              onClick={()=>setMenuActive(false)}
              className={
                "mx-1 sm:mx-2 cursor-pointer text-center px-3 sm:px-4 py-2 w-auto block items-center text-s border-t-2 transition-all " +
                (pathName === navLink.link
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
