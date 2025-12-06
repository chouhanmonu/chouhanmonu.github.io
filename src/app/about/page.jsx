import GithubIcon from "@/assets/icons/GithubIcon";
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
import { Button } from "primereact/button";
import React from "react";

export default function About() {
  return (
    <>
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
              <Button
                icon={<GithubIcon className="w-5 h-5 mr-2" />}
                iconPos="left"
                severity="secondary"
                size="small"
              >
                <span>View my Github</span>
                <ArrowUpRightIcon strokeWidth={2} className="w-4 h-4 ml-1" />
              </Button>
              <Button
                icon={<CloudArrowDownIcon width={24} className="mr-2" />}
                iconPos="left"
                severity="secondary"
                size="small"
              >
                Download CV
              </Button>
            </div>

            <div className="mt-auto">
              <Link
                className="flex gap-2 underline underline-offset-4"
                href={CONTACT_PAGE.href}
              >
                <span>Contact me</span>
                <ArrowLongRightIcon className="w-6" />
              </Link>
            </div>
          </div>
          <div className="flex-[0_0_380px]">
            <Image
              src="/photo2.jpeg"
              width={900}
              height={1600}
              alt="My photo"
            />
          </div>
        </div>
      </div>
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
            <div className="text-gray-300">Total projects</div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200">
              <ArrowTrendingUpIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              4+
            </div>
            <div className="text-gray-300">Years of experience</div>
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
    </>
  );
}
