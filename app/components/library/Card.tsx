import { twMerge } from "tailwind-merge";

type CardContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  widthLimit?: "none" | "xs" | "sm" | "md" | "lg"
}

const widthSize = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  none: "",
}

export const Card: React.FC<CardContainerProps> = ({
  className,
  children,
  widthLimit="xs",
  ...props
}) => {
  const baseClasses: string = "rounded-xl border dark:border-zinc-800 shadow-lg";

  const widthClass = twMerge(["w-full", widthSize[widthLimit]])

  const mergedClasses = twMerge(baseClasses, className);
  return (
    <div className={widthClass} {...props}>
      <div className={mergedClasses}>{children}</div>
    </div>
  );
};

export const ContentCard = ({
  header,
  footer,
  title,
  subTitle,
  description,
  link,
  widthLimit,
  children,
}: {
  header: string;
  footer: string;
  title: string;
  subTitle: string;
  description: string;
  link?: {
    url?: string;
    text?: string;
  };
  widthLimit?: CardContainerProps["widthLimit"];
  children: React.ReactNode;
  
}) => {
  return (
    <Card widthLimit={widthLimit} className="dark:border">
      {header && (
        <div className="bg-gray-100 dark:bg-black border-b dark:border-b-zinc-800 rounded-t-xl text-black dark:text-slate-50 px-4 py-3 md:px-5 md:py-4 capitalize font-medium">
          {header}
        </div>
      )}
      <div className="flex flex-col p-4 md:p-6">
        {title && (
          <h2 className="text-lg font-bold uppercase text-black dark:text-white">{title}</h2>
        )}

        {subTitle && (
          <h3 className="text-base font-medium uppercase text-slate-800 dark:text-zinc-500 mt-1">
            {subTitle}
          </h3>
        )}

        {children}
        {description && (
          <p className="text-base text-slate-800 dark:text-zinc-500 mt-5">{description}</p>
        )}
        {link && (
          <a
            href={link.url}
            className="text-base text-blue-500 hover:text-blue-800 mt-5"
          >
            {link.text}
          </a>
        )}
      </div>
      {footer && (
        <div className="bg-gray-100 dark:bg-black border-t dark:border-t-zinc-600 rounded-b-xl text-black dark:text-slate-200 px-4 py-3 md:px-5 md:py-4 capitalize font-medium">
          {footer}
        </div>
      )}
    </Card>
  );
};

export default Card;

import React from "react";

export const FrameWorkLink = ({
  url,
  text,
  children,
  CustomLinkComponent,
  customLinkProps={},
  widthLimit,
}: {
  url?: string;
  text: string;
  children: React.ReactNode;
  CustomLinkComponent?: React.ComponentType<any>;
  customLinkProps?: any;
  widthLimit?: CardContainerProps["widthLimit"]
}) => {
  const linkClasses: string = "flex flex-col items-center p-12 md:p-16 dark:text-slate-50 font-bold";

  const frameContent = (
    <>
      {children}
      {text && <p className="font-medium text-sm">{text}</p>}
    </>
  );
  return (
    <Card widthLimit={widthLimit} className=" text-gray-600 border-2 dark:border-none bg-white dark:bg-gray-800  hover:bg-slate-100/50 dark:hover:bg-gray-900 transition-colors ease-out">
      { CustomLinkComponent ? (
      <CustomLinkComponent
       className={linkClasses}
       {...CustomLinkComponent}
      >
        {frameContent}
      </CustomLinkComponent>) : ( 
      <a href={url || "#"}  className={linkClasses} {...(customLinkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {frameContent}
      </a>)}

    </Card>
  );
};
