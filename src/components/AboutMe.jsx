"use client";

import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import GithubIcon from "@/assets/icons/GithubIcon";
import {
  ArrowLongRightIcon,
  ArrowUpRightIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_PAGE } from "@/utils/consts";

export default function AboutMe() {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex-[0_0_420px] flex flex-col gap-6">
        <p className="font-light text-4xl font-title">Hi! I&apos;m monu</p>
        <p>
          I am a senior full-stack developer from the outskirts of Mumbai. After
          starting my career as a junior web developer, I soon began working on
          entire apps, understanding client needs, and collaborating as part of
          a team with problem-solving in mind.
        </p>
        <p>
          I strongly believe that with the right use of technology, we can make
          our lives significantly better. I ❤️ going on adventurous trips,
          listening to music, learning, and reading!
        </p>

        <div className="flex gap-3 mt-8">
          <ButtonSecondary
            onClick={() =>
              window.open(
                "https://github.com/chouhanmonu/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            <GithubIcon className="w-5 h-5" />
            <span>View my Github</span>
            <ArrowUpRightIcon strokeWidth={2} className="w-4 h-4" />
          </ButtonSecondary>
          <ButtonSecondary
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/files/cv.pdf";
              link.download = "cv.pdf"; // optional, browser may override
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
          >
            <CloudArrowDownIcon width={24} />
            Download CV
          </ButtonSecondary>
        </div>

        <div className="mt-auto">
          <Link
            className="flex gap-2 underline underline-offset-4 text-gray-400 transition-colors hover:text-primary-500"
            href={CONTACT_PAGE.href}
          >
            <span>Contact me</span>
            <ArrowLongRightIcon className="w-6" />
          </Link>
        </div>
      </div>
      <div className="flex-[0_0_380px]">
        <Image
          className="rounded-md"
          src="/images/photo.jpeg"
          width={380}
          height={570}
          alt="My photo"
        />
      </div>
    </div>
  );
}
