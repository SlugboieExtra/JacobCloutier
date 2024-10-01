"use client"
import React from "react";
import Link from "next/link";

const ButtonOutline = ({href, children,target = "", addClass ="", props = {} }) => {
  return (
    <Link 
    href={href}
    target={target}
    {...props}
    className={
      addClass+ " flex font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white outline-none  capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
    }
    >
      {children}
    </Link>
  );
};

export default ButtonOutline;
