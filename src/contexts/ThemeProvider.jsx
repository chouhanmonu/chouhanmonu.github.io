"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export default function ThemeContextProvider({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);
  const [isCurrentStateRead, setIsCurrentStateRead] = useState(false);

  function handleToggleLightMode() {
    setIsLightMode((a) => {
      if (a) document.documentElement.classList.remove("light");
      else document.documentElement.classList.add("light");

      return !a;
    });
  }

  useEffect(() => {
    const lightMode = matchMedia("(prefers-color-scheme: light)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLightMode(lightMode);
    setIsCurrentStateRead(true);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isLightMode, isCurrentStateRead, handleToggleLightMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const value = useContext(ThemeContext);
  if (value === undefined)
    throw new Error("Theme context used outside of the provider!");

  return value;
}
