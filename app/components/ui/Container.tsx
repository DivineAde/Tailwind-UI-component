import React from "react";

type Props = {};

export const Container = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <header className="">
        <h1 className="text-black dark:text-white text-2xl sm:text-3xl font-bold ">{title}</h1>
        <p className="text-slate-600 dark:text-slate-200 font-medium">{description}</p>
      </header>
      <div className="space-y-10 md:space-y-16">{children}</div>
    </>
  );
};
