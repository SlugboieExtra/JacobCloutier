import React, { ReactNode } from "react";
import ButtonOutline from "../misc/ButtonOutline.";

export type ButtonProps = {
    title:string,
    href:string,
    target?:string
}

export type BodySectionProps = {
    header:ReactNode | string,
    children:ReactNode,
    button?:ButtonProps,
}

const BodySection = (props:BodySectionProps) => {

  return (
    <section className="bg-white bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-black-500 sm:text-lg ">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-black-500">{props.header}</h2>
                <span className="mb-4">{props.children}</span>
                { props.button && <ButtonOutline href={props.button.href} target={props.button.target} >
                        {props.button.title}
                        <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                    </ButtonOutline>
                    }
            </div>
        </div>
    </section>
  );
};

export default BodySection;
