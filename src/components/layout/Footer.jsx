import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import classNames from "classnames";
import { getSectionClasses } from "@/utils/helpers";
import { EMAIL, MAIN_NAV, SOCIAL_LINKS } from "@/utils/consts";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import DiscordIcon from "@/assets/icons/DiscordIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700">
      <nav
        className={classNames("pt-16 pb-24 max-md:py-8", getSectionClasses())}
        aria-label="Main"
      >
        <div className="flex gap-12 justify-between max-md:gap-6 max-md:flex-col-reverse">
          <div className="flex flex-col">
            <Logo />
            <div className="flex items-center gap-3 mt-4 max-md:mt-2">
              <Link
                className="text-gray-400 transition-colors hover:text-primary-500"
                href={SOCIAL_LINKS.instagram}
              >
                <InstagramIcon className="w-5" />
              </Link>
              <Link
                className="text-gray-400 transition-colors hover:text-primary-500"
                href={SOCIAL_LINKS.linkedIn}
              >
                <LinkedInIcon className="w-6" />
              </Link>
              <Link
                className="text-gray-400 transition-colors hover:text-primary-500"
                href={SOCIAL_LINKS.discord}
              >
                <DiscordIcon className="w-5" />
              </Link>
              <Link
                className="text-gray-400 transition-colors hover:text-primary-500"
                href={SOCIAL_LINKS.twitter}
              >
                <TwitterIcon className="w-4.5" />
              </Link>
            </div>
            <div className="mt-12 text-sm text-gray-400 max-md:mt-2">
              &copy; {new Date().getFullYear()}
            </div>
          </div>
          <div className="ml-auto max-md:ml-0">
            <div className="text-[15px] font-medium">Email me!</div>
            <div className="flex gap-1 items-center justify-center self-start mt-2 text-gray-400 max-md:justify-start">
              <EnvelopeIcon width={20} />
              <Link
                className="text-sm leading-relaxed transition-colors hover:text-primary-500"
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
                    className="transition-colors hover:text-primary-500"
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
      <div className="border-t border-gray-800">
        <div className={getSectionClasses()}>
          <div className="py-8 text-center text-gray-400 text-sm max-md:py-6">
            Crafted with care in India
          </div>
        </div>
      </div>
    </footer>
  );
}
