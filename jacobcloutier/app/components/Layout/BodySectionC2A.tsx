import React, { ReactNode } from "react";
import ButtonPrimary from "../misc/ButtonPrimary";

export type ButtonProps = {
    title:string,
    href:string,
    target?:string
}

export type BodySectionC2AProps = {
    header:ReactNode | string,
    children:ReactNode,
    button:ButtonProps,
}

const BodySectionC2A = (props:BodySectionC2AProps) => {

  return (
    <section className="bg-primary-300 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight">{props.header}</h2>
                <span className=" mb-6 md:text-lg">{props.children}</span>
                <ButtonPrimary addClass="block" href={props.button.href} target={props.button.target} >
                {props.button.title}
                </ButtonPrimary>
            </div>
        </div>
    </section>
  );
};

export default BodySectionC2A;
