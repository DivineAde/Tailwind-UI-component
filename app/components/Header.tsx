'use client'

import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoBulbOutline, IoClose } from "react-icons/io5";
import { SiNextui } from "react-icons/si";
import { useTheme } from "./hooks/useTheme";
import { HiMiniMoon, HiMiniSun } from "react-icons/hi2";
import Link from "next/link";
import { RxMoon } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

type Props = {};

export default function Header({}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="sticky top-0 left-0 border-b border-slate-100 dark:border-zinc-600/50 bg-white dark:bg-black bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 w-full z-[99999] dark:text-white">
      <div className="flex h-16 items-center px-5 md:px-16">
        <div className="mx-auto max-w-full w-full space-y-20">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center justify-start">
              <button type="button" onClick={toggleMenu}>
                <HiOutlineMenuAlt3 className="block md:hidden" size={20} />
              </button>
              <Link
                href="/"
                className="items-center h-10 gap-1 font-bold cursor-pointer text-black dark:text-white hidden md:inline-flex"
              >
                Divine
                <SiNextui color="orange" size={25} />
              </Link>
              <Link
                href="/"
                className="p-2 text-slate-500 text-sm hover:text-slate-800 dark:text-gray-400 dark:hover:text-slate-50 hidden md:block"
              >
                Components
              </Link>

              <Link
                href="/"
                className="p-2 text-slate-500 text-sm hover:text-slate-800 dark:text-gray-400 dark:hover:text-slate-50 hidden md:block"
              >
                Themes
              </Link>
              <Link
                href="/"
                className="p-2 text-slate-500 text-sm hover:text-slate-800 dark:text-gray-400 dark:hover:text-slate-50 hidden md:block"
              >
                Examples
              </Link>
              <Link
                href="/"
                className="p-2 text-slate-500 text-sm hover:text-slate-800 dark:text-gray-400 dark:hover:text-slate-50 hidden md:block"
              >
                Github
              </Link>
            </div>

            <div className="flex items-center justify-end">
              <nav className="flex items-center justify-between gap-1">
                <div className="relative bg-transparent h-full">
                  <input
                    type="search"
                    placeholder="Search documentation"
                    className="rounded-lg border-slate-300/50 py-1 px-4 placeholder:text-sm placeholder:dark:bg-black dark:bg-black w-full" 
                    name="search"
                    id="search"
                  />
                  <button
                    type="button"
                    className="absolute top-1.5 right-2 bg-slate-100/50 dark:hover:bg-slate-600/50  rounded-lg p-1 hidden lg:block"
                  >
                    <CiSearch />
                  </button>
                </div>
                <ThemeToggle />

                <Link
                  href="https://github.com/DivineAde"
                  className="p-2 text-black  dark:text-slate-50 hover:bg-slate-100/50 dark:hover:bg-slate-600/50 rounded-lg"
                >
                  <FaGithub size={16} />
                </Link>

                <Link
                  href="https://www.youtube.com/"
                  className=" p-2 text-black  dark:text-slate-50 hover:bg-slate-100/50  dark:hover:bg-slate-600/50 rounded-lg"
                >
                  <FaXTwitter size={16} />
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className={`fixed top-0 left-0 bg-white dark:bg-black md:hidden h-screen w-3/4 transition-all duration-500 ease-in-out z-[999] ${menuOpen ? '' : 'opacity-0 pointer-events-none'}`}>
        <div ref={menuRef} className="bg-white dark:bg-black p-6 w-full">
          <div className="flex relative"> 
            <Link
              href="/"
              className="inline-flex items-center gap-x-1 text-lg font-bold"
            >
              Divine
              <SiNextui color="orange" size={16} />
            </Link>
            <button onClick={toggleMenu} className="absolute top-1 right-2">
              <IoClose size={20} />
            </button>
          </div>
          <ul className="flex flex-col py-12 gap-4">
            <li>
              <Link href="/" onClick={toggleMenu}>Documentation</Link>
            </li>
            <li>
              <Link href="#components" onClick={toggleMenu}>Components</Link>
            </li>
            <li>
              <Link href="/themes" onClick={toggleMenu}>Themes</Link>
            </li>
            <li>
              <Link href="/examples" onClick={toggleMenu}>Examples</Link>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <button
      onClick={() => toggleTheme()}
      className="cursor-pointer text-black dark:text-white transition-colors ease-in-out hover:bg-slate-100/50 dark:hover:bg-slate-600/50 rounded-lg p-2"
    >
      {isDarkMode ? (
        <RxMoon className="" size={16} />
      ) : (
        <HiMiniSun className="" size={16} />
      )}
    </button>
  );
};
