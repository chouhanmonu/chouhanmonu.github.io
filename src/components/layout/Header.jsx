import React from "react";
import Logo from "../Logo";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { getSectionClasses } from "@/utils/helpers";
import Link from "next/link";
import { MAIN_NAV } from "@/utils/consts";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Button } from "primereact/button";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 border-b border-gray-700 z-1">
      <div
        className={classNames(
          "flex justify-between items-center py-2.5",
          getSectionClasses()
        )}
      >
        <Logo />
        <div className="flex gap-5 items-center">
          <nav aria-label="Main">
            <ul className="flex gap-3 items-center">
              {MAIN_NAV.map((link, i) => (
                <Link href={link.href} key={i}>
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>
          <Button
            severity="secondary"
            icon={<MoonIcon width={20} />}
            outlined
            rounded
            aria-label="Night mode"
          />
        </div>
      </div>
    </header>
  );
}
