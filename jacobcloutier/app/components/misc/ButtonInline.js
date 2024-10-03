"use client"
import Link from "next/link";
import React from "react";

const ButtonInline = ({href, children, target = "", addClass = "", props = {} }) => {
  return (
    <Link
      href={href}
      target={target}
      {...props}
      className={
        addClass+
        " inline-flex mt-4 text-sm p-2 lg:py-4 px-4 lg:px-6 text-white-500 font-semibold bg-secondary-500 hover:shadow-md transition-all outline-none hoverRaise" 
        
      }
    >
      {children}
    </Link>
  );
};

export default ButtonInline;
