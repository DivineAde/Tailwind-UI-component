import React from "react";

type Props = {};

export const Section = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <section id="">
      {/* section header */}
      <h2 className="text-black dark:text-white font-semibold text-lg capitalize">{title}</h2>

      {/* section description */}
      <p className="text-slate-600 dark:text-slate-200 font-medium  text-md mt-1 leading-5">
        {description}
      </p>

      {/* section preview */}
      <div className="mt-3">
        <div className="flex flex-col  shadow-xl border dark:border-zinc-800  rounded-lg p-6">
          <div className="flex flex-wrap gap-2">{children}</div>
        </div>
      </div>
    </section>
  );
};
