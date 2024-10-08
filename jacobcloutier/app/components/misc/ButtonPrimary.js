"use client"
import Link from "next/link";
import React from "react";

const ButtonPrimary = ({href, children, target = "", addClass = "", props = {} }) => {
  return (
    <Link
      href={href}
      target={target}
      {...props}
      className={
        addClass+
        " py-3 text-center lg:py-4 px-12 lg:px-16 text-white-500 font-semibold bg-secondary-500 hover:shadow-md transition-all outline-none hoverRaise" 
      }
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
