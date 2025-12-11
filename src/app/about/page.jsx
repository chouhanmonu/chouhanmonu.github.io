import GithubIcon from "@/assets/icons/GithubIcon";
import ButtonSecondary from "@/components/ButtonSecondary";
import { CONTACT_PAGE } from "@/utils/consts";
import { getSectionClasses } from "@/utils/helpers";
import {
  ArrowTrendingUpIcon,
  ArrowUpRightIcon,
  BoltIcon,
  CodeBracketIcon,
  CubeIcon,
} from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { CloudArrowDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TECHNOLOGIES } from "./conts";
import Button from "@/components/Button";

export default function About() {
  return (
    <>
      {/* about section */}
      <div className={classNames(getSectionClasses())}>
        <div className="flex gap-4 justify-between">
          <div className="flex-[0_0_420px] flex flex-col gap-6">
            <p className="text-3xl tracking-tight">Hi! I&apos;m Monu</p>
            <p>
              I am a senior full-stack developer from the outskirts of Mumbai.
              After starting my career as a junior web developer, I soon began
              working on entire apps, understanding client needs, and
              collaborating as part of a team with problem-solving in mind.
            </p>
            <p>
              I strongly believe that with the right use of technology, we can
              make our lives significantly better. I ❤️ going on adventurous
              trips, listening to music, learning, and reading!
            </p>

            <div className="flex gap-3 mt-8">
              <ButtonSecondary>
                <GithubIcon className="w-5 h-5" />
                <span>View my Github</span>
                <ArrowUpRightIcon strokeWidth={2} className="w-4 h-4" />
              </ButtonSecondary>
              <ButtonSecondary>
                <CloudArrowDownIcon width={24} />
                Download CV
              </ButtonSecondary>
            </div>

            <div className="mt-auto">
              <Link
                className="flex gap-2 underline underline-offset-4 text-gray-400"
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
              src="/photo.jpeg"
              width={380}
              height={570}
              alt="My photo"
            />
          </div>
        </div>
      </div>
      {/* Facts and figures section */}
      <div className={classNames(getSectionClasses())}>
        <div className="flex gap-4">
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200">
              <CubeIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              15+
            </div>
            <div className="text-gray-300">Technologies</div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200">
              <CodeBracketIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              50+
            </div>
            <div className="text-gray-300">Total Projects</div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200">
              <ArrowTrendingUpIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              4+
            </div>
            <div className="text-gray-300">Years of Experience</div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200">
              <BoltIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              3+
            </div>
            <div className="text-gray-300">Certifications</div>
          </div>
        </div>
      </div>
      {/* tech stack section */}
      <div className={getSectionClasses()}>
        <div className="">
          <div className="font-heading tracking-tight  text-3xl font-semibold leading-12">
            Technical stack
          </div>
          <p className="text-gray-400 tracking-wider">
            Over the years, I have worked with a variety of technologies. Here
            are some of the technologies I have experience with:
          </p>

          <div className="mt-8">
            <ul className="flex gap-4 flex-wrap">
              {TECHNOLOGIES.map((techJsx, i) => (
                <li
                  key={i}
                  className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center"
                >
                  {techJsx}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="text-center text-gray-400">
                ... and many more!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Let's connect */}
      <div className={getSectionClasses()}>
        <div className="border border-primary-950 rounded-md bg-primary-950/15 text-center p-10 space-y-6 max-w-[800px] mx-auto">
          <div className="font-heading text-4xl font-bold leading-12">
            Wanna Build Something
            <span className="text-primary-500"> Together?</span>
          </div>
          <p className="max-w-[52ch] mx-auto">
            If you have some idea that you would like to share with me so that I
            can contribute to it in any way, please reach out to me.
          </p>
          <Button className="font-medium">Let&apos;s collaborate!</Button>
        </div>
      </div>
    </>
  );
}
