"use client"

import React from 'react';

export const useTheme = (storageKey = "open sisime") => {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(() => {
    // Access localStorage only on client-side
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(storageKey) === "true";
    } else {
      // Provide a default value for server-side rendering
      return false; // Or any preferred initial theme
    }
  });

  React.useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(isDarkMode ? "dark" : "light");
    localStorage.setItem(storageKey, isDarkMode.toString());
  }, [isDarkMode, storageKey]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleTheme };
};
