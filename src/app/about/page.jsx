import GithubIcon from "@/assets/icons/GithubIcon";
import ButtonSecondary from "@/components/ButtonSecondary";
import { CONTACT_PAGE, TECHNOLOGIES } from "@/utils/consts";
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
import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import SectionSubtitle from "@/components/SectionSubtitle";
import AboutMe from "@/components/AboutMe";
import Connect from "@/components/Connect";

export default function About() {
  return (
    <>
      {/* about section */}
      <div className={classNames(getSectionClasses())}>
        <AboutMe />
      </div>
      {/* Facts and figures section */}
      <div className={classNames(getSectionClasses())}>
        <div className="flex gap-4 max-md:flex-wrap max-md:justify-center">
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
              <CubeIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              25+
            </div>
            <div className="text-gray-300 light:text-gray-600">
              Technologies
            </div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
              <CodeBracketIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              50+
            </div>
            <div className="text-gray-300 light:text-gray-600">
              Total Projects
            </div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
              <ArrowTrendingUpIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              4+
            </div>
            <div className="text-gray-300 light:text-gray-600">
              Years of Experience
            </div>
          </div>
          <div className="basis-1/4 text-center border border-primary-950 rounded-md flex items-center justify-center flex-col p-5 bg-primary-950/15 gap-3 max-md:basis-[47.5%] max-sm:basis-full light:bg-primary-50 light:border-primary-700">
            <div className="rounded-full p-3 bg-primary-950/50 text-primary-200 light:bg-primary-100 light:text-primary-700">
              <BoltIcon strokeWidth={2} width={20} />
            </div>
            <div className="text-3xl font-bold tracking-tight font-heading ">
              3+
            </div>
            <div className="text-gray-300 light:text-gray-600">
              Certifications
            </div>
          </div>
        </div>
      </div>
      {/* tech stack section */}
      <div className={getSectionClasses()}>
        <div className="">
          <SectionTitle>Technical Stack</SectionTitle>
          <SectionSubtitle>
            Over the years, I have worked with a variety of technologies. Here
            are some of the technologies I have experience with:
          </SectionSubtitle>

          <div className="mt-8">
            <ul className="flex gap-4 flex-wrap">
              {TECHNOLOGIES.map((techPill, i) => (
                <li key={i}>
                  <Link
                    href={techPill.link || "#"}
                    className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center hover:border-primary-500 transition-colors hover:[&_.child]:text-primary-500!"
                  >
                    {techPill.element}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <div className="text-center text-gray-400 light:text-gray-600">
                ... and many more!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Let's connect */}
      <div className={getSectionClasses()}>
        <Connect />
      </div>
    </>
  );
}
