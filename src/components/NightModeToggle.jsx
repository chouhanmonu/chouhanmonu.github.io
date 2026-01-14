"use client";

import { useThemeContext } from "@/contexts/ThemeProvider";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

export default function NightModeToggle() {
  const { isCurrentStateRead, isLightMode, handleToggleLightMode } =
    useThemeContext();

  return (
    <button
      className="cursor-pointer max-md:hidden"
      onClick={handleToggleLightMode}
    >
      {isCurrentStateRead ? (
        <>
          <MoonIcon
            className={classNames(
              "w-5 stroke-[1.6] hover:text-primary-500 hover:fill-primary-500 transition-opacity",
              {
                "opacity-100": isLightMode,
                "opacity-0 w-0!": !isLightMode,
              }
            )}
          />
          <SunIcon
            className={classNames(
              "w-5 stroke-[1.6] hover:text-primary-500 hover:fill-primary-500 transition-opacity",
              {
                "opacity-100": !isLightMode,
                "opacity-0 w-0!": isLightMode,
              }
            )}
          />
        </>
      ) : (
        <div className="w-5 h-5 bg-gray-300/10 rounded-full"></div>
      )}
    </button>
  );
}
