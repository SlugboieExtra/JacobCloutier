"use client"
import Link from "next/link";
import React from "react";

const ButtonPrimary = ({href, children, addClass }) => {
  return (
    <Link
      href={href}
      className={
        "py-3 text-center lg:py-4 px-12 lg:px-16 text-white-500 font-semibold bg-orange-500 hover:shadow-orange-md transition-all outline-none w-full " +
        addClass
      }
    >
      {children}
    </Link>
  );
};

export default ButtonPrimary;
