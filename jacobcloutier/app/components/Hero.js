"use client"
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import HeroImage from "../public/assets/JakePortraitEdit.png"
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";


const Hero = ({
  listUser = [
    {
      name: "More Provincial Support",
      description: "Fredericton has faced growing challenges, and our city should not be left to shoulder this burden alone."
    },
    {
      name: "Better Infrastructure",
      description: "Sidewalks are trecherous in winter, our bridge is hardly functional, transit is a mess. Together we can do better."
    },
    {
      name: "Honest Governence",
      description: "The last city council gave themselves an unjust 34% raise, and that’s not right."
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-yellow-500 max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className=" grid grid-flow-row sm:grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                <strong>Jacob Cloutier</strong> for Ward 5 Fredericton City Counsil.
              </h1>
              <p className="text-black-500 mt-4 mb-4">
              <FaQuoteLeft className="inline mr-2"/>
              <strong>My goal is to help Fredericton and Marysville grow in a meaningful, sustainable way that has a positive impact not just for today but for those coming tomorrow.</strong>
              <FaQuoteRight className="inline ml-2"/>
              </p>
              <p className="text-black-500 mb-6">
                - Jacob Cloutier
              </p>
              <ButtonPrimary href='/help'>How to Help</ButtonPrimary>
            </div>
            <div className="flex w-full ">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                className="rounded-full"
                  src={HeroImage}
                  alt="VPN Illustrasi"
                  quality={100}
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listUser.map((listUsers, index) => (
            <motion.div
              className="flex justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="mw-2 md:px-3 sm:px-0 mx-auto md:w-auto">
                <div className="flex items-center justify-center w-auto mr-6">
                  <LiaCheckCircle size={"60px"} className="text-green-500 sm:mb-4" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-600 font-bold">
                    Vote {listUsers.name}
                  </p>
                  <p className="text-lg text-black-500">{listUsers.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
