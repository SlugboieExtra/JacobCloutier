"use client"
import React from "react";
import Image from 'next/image'
import LogoImage from "../../public/assets/Logo.svg";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <Image
            src={LogoImage}
            className="w-auto mb-6"
            alt="Logo"
          />
          <p className="mb-4">
            <strong className="font-medium">Jacob Cloutier</strong> is running Fredericton city counsil for ward 5 in the upcomming 2026 election.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src={Facebook}
                className="h-6 w-6"
                alt="Facebook"
              />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src={Twitter}
                className="h-6 w-6"
                alt="Twitter"
              />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                src={Instagram}
                className="h-6 w-6"
                alt="Instagram"
              />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear().toString()} - Jacob Cloutier</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Projects</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Safe Sidewalks Project{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              2026 City Counsil Election{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">How to Engage</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Volunteer{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Donate to the Safe Sidewalk Project{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Sign Petition for the Safe Sidewalks{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Fill out Ward 5 Grievence Survay{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Learn More</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Jacob Cloutier{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Election Platform{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
