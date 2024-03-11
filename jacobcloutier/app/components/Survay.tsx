"use client"
import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import FamilyPhoto from "../public/assets/FamilyPhoto.jpg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Survay = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14">
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper className={null}>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl text-left sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed mx-auto w-10/12 sm:w-7/12 lg:w-6/12">
              About Jacob Cloutier
            </motion.h3>
            <motion.p className="leading-normal text-left mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
            Born and raised in Maryville, this is where my family calls home. My passion lies in spending quality time with family and in our community. Volunteering and living in different parts of Maryville I have been exposed to many diverse lifestyles and community challenges. Being driven by a thirst for knowledge and always seeking solutions, I aim to understand and address these challenges to improve our ward for my family and yours.
            </motion.p>
            <motion.div className="flex mx-auto mt-10 w-10/12 sm:w-7/12 lg:w-6/12">
              <ButtonPrimary addClass={'w-full'} href="/about">Learn More</ButtonPrimary>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className={null}>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Image alt='Jacob Cloutier Family' className="w-full h-auto" src={FamilyPhoto} />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-6" id="testimoni">
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="bg-yellow-500 rounded-xl py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full">
                <div className="text-left mb-10 mx-auto w-10/12 sm:w-7/12 lg:w-6/12">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Fredericton Community Concerns Survay
                  </h5>
                  <p>I want to hear from you. Please fill out this quick survay to make your concerns known.</p>
                </div>
                <div className="flex mx-auto mt-10 w-10/12 sm:w-7/12 lg:w-6/12">
                  <ButtonPrimary addClass={null} href='https://forms.gle/xMjUbrpwHFntMVPA9'>Get Started</ButtonPrimary>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Survay;
