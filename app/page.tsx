"use client";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { GiSpeedometer } from "react-icons/gi";
import Main from "./components/Main";

export default function Home() {
  return (
    <>
      {/* Main container */}
      <HomePage>
        <h1 className="text-3xl lg:text-5xl font-[900] inline-flex flex-col items-center justify-center text-center text-black dark:text-white max-w-3xl">
          Tailwind Turbocharge: Build in warp speed.{" "}
          <span>
            <GiSpeedometer />
          </span>
        </h1>
        <p className="text-zinc-700 dark:text-white font-semibold text-center text-sm md:text-lg max-w-xs md:max-w-2xl">
          Start developing with an open-source library of over 600+ UI
          components, sections, and pages built with the utility classes from
          Tailwind CSS and designed in Figma.
        </p>
        <div className="flex items-center justify-center flex-col md:flex-row gap-x-2 gap-y-2">
          <button className="flex items-center justify-center gap-2 rounded-md px-4 font-medium text-sm transition-all bg-blue-600 text-white hover:bg-blue-700 border border-blue-600 hover:border-blue-700 py-2 dark:focus:ring-offset-blue-500 disabled:pointer-events-none disabled:opacity-50 capitalize w-full md:w-auto">
            Get Started
          </button>
          <button className="flex items-center px-4 gap-2 rounded-md text-black dark:text-white font-medium text-sm transition-all hover:bg-slate-200/50 border border-slate-300 py-2 dark:focus:ring-offset-black disabled:pointer-events-none disabled:opacity-50 capitalize w-full md:w-auto">
            <FaGithub />
            Explore more
          </button>
        </div>
      </HomePage>
      <Main />
    </>
  );
}

// Use the correct typing for HomePage
const HomePage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] justify-center py-32 space-y-5">
      {children}
    </div>
  );
};
