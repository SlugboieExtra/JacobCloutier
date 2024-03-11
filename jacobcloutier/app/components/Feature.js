"use client"
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import MarysvilleImage from "../public/assets/HistoricalMarysville.jpg"
import ButtonPrimary from "./misc/ButtonPrimary";

const features = [
  "• Improved sidewalks",
  "• Solutions for housing crisis",
  "• Solutions for homelessness crisis",
  "• More provincial support",
  "• Information sharing",
  "• Financial accountability",
  "• Pay control for local government",
  "• Quest board",
  "• Fredericton job programs",
  "• Infrastructure improvement",
  "• Information access",
  "• City collaboration",
  "• WIFI access",
  "• Support for non-for profit organizations",
  "• Support for local business of any size",
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div>
        <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
          My Commitment To Our Community
        </h3>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src={MarysvilleImage}
              alt="VPN Illustrasi"
              quality={100}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

        <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>

          <p className="my-2 text-black-500">
            As councillor my commitment to Marysville and the city of Fredericton is to work towards providing:
          </p>
          <ul className="mb-6 text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative custom-list"
                custom={{duration: index>1?index*0.5:1}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2,
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
          <ButtonPrimary href="/platform">Learn More</ButtonPrimary>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
