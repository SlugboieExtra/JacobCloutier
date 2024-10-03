import React from "react";
import Image from 'next/image'
import LogoImage from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import LinkedIn from "../../public/assets/Icon/icons8-linkedin.svg";
import Link from "next/link";

const navLinks = [
  {
    title : "Home",
    link : "/",
    target:""
  },
  {
    title : "Platform",
    link : "/platform",
    target:""
  },
  {
    title : "Contact Me",
    link : "/contact",
    target:""
  },
  {
    title : "Submit Survay",
    link : "https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform",
    target:"_blank"
  },
  {
    title : "Schedule Meeting",
    link : "https://calendly.com/jacobcloutier/30min",
    target:"_blank"
  }
]

const Footer = () => {
  return (
    <div className="bg-white-300 pt-24 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">

        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src={LogoImage}
            className="w-auto mb-6"
            alt="Logo"
          />
          <p className="mb-4">
            <strong className="font-medium">Jacob Cloutier</strong> is running Fredericton city council for Ward 5 in the upcoming 2026 election.
          </p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-secondary-500 cursor-pointer transition-all"><a target="_blank" href="tel:1-506-260-3529">+1 (506) 260-3529</a></li>
            <li className="my-2 hover:text-secondary-500 cursor-pointer transition-all"><a target="_blank" href="mailto:jwkcloutier@hotmail.com">jwkcloutier@hotmail.com</a></li>
          </ul>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 transition-all rounded-full items-center justify-center flex p-2 hover:shadow-md">
              <a target="_blank" href="https://www.facebook.com/jacob.cloutier.92">
                <Image
                  src={Facebook}
                  className="h-6 w-6"
                  alt="Facebook"
                />
              </a>
            </div>
            <div className="mx-2 bg-white-500 transition-all rounded-full items-center justify-center flex p-2 hover:shadow-md">
              <a target="_blank" href="https://www.linkedin.com/in/jacob-cloutier-503476267/">
                <Image
                  src={LinkedIn}
                  className="h-6 w-6"
                  alt="LinkedIn"
                />
              </a>
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear().toString()} - Rob Gray @ RG Creative</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-12 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Navigation</p>
          <ul className="text-black-500 ">
            {navLinks.map((link,index)=>(
            <li key={index} className="my-2 hover:text-secondary-500 cursor-pointer transition-all">
              <Link
              key={index}
              href={link.link}
            >
              {link.title}
            </Link>
              </li>
            ))}

          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
