"use client"
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getLoadAnimation from "../utils/getLoadAnimation";
import LoadAnimationWrapper from "./Layout/LoadAnimationWrapper";
import HeroImage from "../public/assets/JakePortraitEdit.png"
import { FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import { LiaCheckCircle } from "react-icons/lia";


const Hero = ({
  header ='Jacob Cloutier',
  subHeader = 'for Ward 5 Fredericton City Counsil.', 
  description = <p className="flex"><FaQuoteLeft className="inline mr-2 -mt-4 text-5xl"/><span>My goal is to help Fredericton and Marysville grow in a meaningful, sustainable way that has a positive impact not just for today but for those coming tomorrow.</span><FaQuoteRight className="inline ml-2 -mt-4 text-5xl"/></p>, 
  button = <ButtonPrimary target="_blank" addClass="w-full" href='https://calendly.com/jacobcloutier/30min'>Schedule a Meeting</ButtonPrimary>,
  featureList = [
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
  const loadAnimation = useMemo(() => getLoadAnimation(), []);

  return (
    <div
      className="bg-primary-300  pt-16 sm:pt-20 px-0 sm:px-8 xl:px-16 mx-auto"
      id="about"
    >
      <LoadAnimationWrapper className="max-w-screen-xl mx-auto">
          <div className=" grid grid-flow-row sm:grid-flow-col sm:grid-rows-1 sm:grid-cols-2 gap-8">
            <div className="flex bg-primary-300 flex-col justify-center items-start row-start-2 py-4 z-10 sm sm:py-0 px-4 sm:row-start-1 sm:px-0">
              <h1 className="mb-4">
                <span className="font-extrabold text-3xl lg:text-4xl xl:text-5xl leading-normal">{header}</span> <br/>
                <span className="font-bold text-lg lg:text-xl ">{subHeader}</span>
              </h1>
              <span className=" font-light text-lg lg:text-xl">
              {description}
              </span>
              {button}
            </div>
            <div className="flex w-full">
              <motion.div className="max-h-60 sm:max-h-full z-1" variants={loadAnimation}>
                <Image
                  className=""
                  src={HeroImage}
                  alt="VPN Illustrasi"
                  quality={50}
                  priority={true}
                />
              </motion.div>
            </div>
          </div>
      </LoadAnimationWrapper>
      <div className="relative w-full flex" >
        <LoadAnimationWrapper
          className=" max-w-screen-xl mx-auto w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {featureList.map((feature, index) => (
            <div
              className="flex justify-start sm:justify-center py-4 sm:py-6 w-auto px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
            >
              <div className="mw-2 md:px-3 sm:px-0 mx-auto md:w-auto">
                <div className="flex align-middle mb-4">
                  <motion.span 
                    className="flex items-center justify-center w-auto mr-4"
                    custom={{delay: 0.2 + (0.2 * index)}}
                    variants={loadAnimation}
                  >
                    <LiaCheckCircle size={"30px"} className="text-primary-500" />
                  </motion.span>
                  <p className="text-xl mb-0 text-black-600 font-bold">
                    Vote {feature.name}
                  </p>
                </div>
                <p className="text-lg text-black-500">{feature.description}</p>
              </div>
            </div>
          ))}
       </LoadAnimationWrapper>
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Hero;
