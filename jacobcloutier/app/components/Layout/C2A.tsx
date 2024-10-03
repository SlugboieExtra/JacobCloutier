import React, { ReactNode } from "react";
import { ButtonProps } from "./BodySection";
import ButtonPrimary from "../misc/ButtonPrimary";
import ButtonOutline from "../misc/ButtonOutline.";

export type C2AProps = {
    header:ReactNode | string,
    children:ReactNode,
    button?:ButtonProps,
    buttonSecondary?:ButtonProps
}

const C2A = (props:C2AProps) => {

  return (
    <section className="bg-primary-300 pt-16 sm:pt-20 bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">{props.header}</h1>
            <span className="mb-8 max-w-screen-lg text-lg font-normal lg:text-xl">{props.children}</span>
            <div className=" bg flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                { props.button && ( <ButtonPrimary href={props.button.href} addClass="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center ">
                    {props.button.title}
                </ButtonPrimary>)
                }
                { props.buttonSecondary && (
                <ButtonOutline href={props.buttonSecondary.href} addClass="w-full inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center">
                    {props.buttonSecondary.title}
                </ButtonOutline>)
                }
            </div>             
        </div>
    </section>
  );
};

export default C2A;
