import { APP_URL, MY_ROLE, NAME, TECHNOLOGIES } from "@/utils/consts";
import { getSectionClasses } from "@/utils/helpers";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
import SectionSubtitle from "@/components/SectionSubtitle";
import AboutMe from "@/components/AboutMe";
import Connect from "@/components/Connect";
import FactsAndFigures from "@/components/FactsAndFigures";

export const metadata = {
  title: `About | ${NAME}`,
  description: `Learn more about ${NAME}, a ${MY_ROLE} with 4+ years of experience designing and building scalable, reliable web systems, with strong backend, infrastructure, and full-stack expertise.`,
  openGraph: {
    title: `About ${NAME}`,
    description: `Background, experience, and engineering values of a ${MY_ROLE} focused on system design, performance, security, and building high-quality, production-ready software.`,
    url: `${APP_URL}/about/`,
    type: "profile",
  },
};

export default function About() {
  return (
    <>
      {/* about section */}
      <div className={classNames(getSectionClasses())}>
        <h1 className="sr-only">About Me</h1>
        <AboutMe />
      </div>
      {/* Facts and figures section */}
      <div className={classNames(getSectionClasses())}>
        <FactsAndFigures />
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
