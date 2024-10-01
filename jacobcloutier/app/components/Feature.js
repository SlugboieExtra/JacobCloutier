"use client"
import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import MarysvilleImage from "../public/assets/HistoricalMarysville.jpg"
import ButtonPrimary from "./misc/ButtonPrimary";

const features = [
  "Homelessness & poverty.",
"Infrastructure issues such as we are seeing with the Marysville Bridge. There have also been growing concerns with the quality of our sidewalks, especially during winter months.",
"Development of a strong business and employee ecosystem for the Fredericton Region.",
"Councilor wage control",
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
        <motion.div className="flex flex-col justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>

          <p className="my-2 text-black-500">
          My name is Jacob Cloutier and I am running for the position of councilor for our beloved Marysville (Ward 5).
          <br/><br/>
          If elected, there are four key areas I plan to address:
          </p>
          <ul className="mb-6 text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative custom-list mb-2 list-disc list-outside"
                custom={{delay: index*0.1}}
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
          <ButtonPrimary props={{}} href="/platform">Learn More</ButtonPrimary>
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <ScrollAnimationWrapper>
        <motion.div className="flex flex-col justify-center ml-auto w-full my-12" variants={scrollAnimation}>
          <p className='mb-4'>
            I will be visiting door to door throughout 2024 to learn about your needs and desires for Marysville and Fredericton in general. This will help me to focus on what matters most to you. I intend to follow up in 2025 and 2026 with additional outreach and surveys to make sure I am on track and stay aligned with community needs.
            <br/><br/>
            If elected, I will continue to listen and stay on course to support all of Ward 5 and Fredericton.
            <br/><br/>
            Between now and the election day  I will be meeting with as many local leaders and professionals as I can that effect or have insight about our city and talk about what we are doing right and what we could do better , my goal will be to meet with over 100 of these individuals at this stage I have met with 15. 
            <br/><br/>
            Please take a few minutes to fill out the survey on the Survey page. Thank you!
            </p>
          <ButtonPrimary props={{target:"_blank"}} href="https://docs.google.com/forms/d/e/1FAIpQLScpOHV8b15clE_aoBj7Jo_BqqpUWUu49Uhgg27mJFD16yPQOw/viewform">Give Your Feedback</ButtonPrimary>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Feature;
