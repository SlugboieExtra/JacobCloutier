import React, { ReactNode } from "react";
import Image, { ImageProps } from "next/image";
import { ButtonProps } from "./BodySection";
import ButtonOutline from "../misc/ButtonOutline.";

export type CardProps = {
    header:ReactNode | string,
    img: ImageProps,
    children:ReactNode,
    button?:ButtonProps,
}

const Card = (props:CardProps) => {

  return (
    <div className="max-w-sm bg-white border border-gray-400 rounded-lg shadow">
        <a className=" block relative w-full" target={props.button&&props.button.target}  href={props.button && props.button.href}>
            <Image className="rounded-t-lg" {...props.img} />
        </a>
        <div className="p-5">
            <a target={props.button&&props.button.target} href={props.button && props.button.href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.header}</h5>
            </a>
            <span className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.children}</span>
            {props.button && (
                <ButtonOutline href={props.button.href} target="_blank"  addClass="flex mt-4 text-sm p-2">
                    {props.button.title}
                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </ButtonOutline>
            )}
        </div>
    </div>
  );
};

export default Card;
