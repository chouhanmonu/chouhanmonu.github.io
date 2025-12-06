import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import classNames from "classnames";
import { getSectionClasses } from "@/utils/helpers";
import { EMAIL, MAIN_NAV } from "@/utils/consts";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700">
      <nav
        className={classNames("pt-16 pb-24", getSectionClasses())}
        aria-label="Main"
      >
        <div className="flex gap-12 justify-between">
          <div className="flex flex-col">
            <Logo />
            <div className="flex gap-3 mt-4">
              <Link href="#">
                <InstagramIcon className="w-5 text-gray-400 hover:text-gray-800 transition-colors" />
              </Link>
              <Link href="#">
                <TwitterIcon className="w-5 text-gray-400 hover:text-gray-800 transition-colors" />
              </Link>
              <Link href="#">
                <FacebookIcon className="w-5 text-gray-400 hover:text-gray-800 transition-colors" />
              </Link>
            </div>
            <div className="mt-12 text-sm text-gray-400">
              &copy; {new Date().getFullYear()}
            </div>
          </div>
          <div className="ml-auto">
            <div className="text-[15px] font-medium">Email me!</div>
            <div className="flex gap-1 items-center justify-center self-start mt-2 text-gray-400">
              <EnvelopeIcon width={20} />
              <Link
                className="text-sm leading-relaxed hover:text-gray-900 transition-colors"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </Link>
            </div>
          </div>
          <div>
            <div className="text-[15px] font-medium">Links</div>
            <ul className="text-sm mt-2 leading-relaxed text-gray-400">
              {MAIN_NAV.map((link, i) => (
                <li key={i}>
                  <Link
                    className="hover:text-gray-900 transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}
