"use client"
import React, { ReactNode, useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

type AnimatedListProps = {
  list:ReactNode[],
}

const AnimatedList = (props: AnimatedListProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (

        <ScrollAnimationWrapper>
        <motion.div className="flex flex-col justify-center ml-auto w-full " variants={scrollAnimation}>
          <ul className="mb-6 text-black-500 self-start list-inside ml-8">
            {props.list.map((listItem, index) => (
              <motion.li
                className="relative custom-list mb-2 list-disc list-outside"
                custom={{delay: index*0.1}}
                variants={scrollAnimation}
                key={index}
                whileHover={{
                scale : 1.02,
                transition: {
                  duration: .2,
                }
                }}>
                  {listItem}
              </motion.li>
              )
            )}
          </ul>
        </motion.div>
        </ScrollAnimationWrapper>
  );
};

export default AnimatedList;
