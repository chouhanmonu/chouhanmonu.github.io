"use client";

import React from "react";
import Logo from "../Logo";
import classNames from "classnames";
import { getSectionClasses } from "@/utils/helpers";
import Link from "next/link";
import { MAIN_NAV } from "@/utils/consts";
import NightModeToggle from "../NightModeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const pathnamePrepped = pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname;

  return (
    <header className="sticky top-0 left-0 border-b border-gray-700 z-50 bg-gray-950 light:bg-white">
      <div
        className={classNames(
          "flex justify-between items-center py-2.5",
          getSectionClasses()
        )}
      >
        <Logo />
        <div className="flex gap-8 items-center max-md:gap-4">
          <nav aria-label="Primary navigation">
            <ul className="flex gap-4 items-center max-md:gap-2">
              {MAIN_NAV.map((link, i) => {
                const isActive = pathnamePrepped === link.href;
                return (
                  <li key={i}>
                    <Link
                      className={classNames(
                        "hover:text-primary-500 transition-colors",
                        {
                          "text-primary-500": isActive,
                        }
                      )}
                      href={link.href}
                      {...(isActive && {
                        "aria-current": "page",
                      })}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <NightModeToggle />
        </div>
      </div>
    </header>
  );
}
