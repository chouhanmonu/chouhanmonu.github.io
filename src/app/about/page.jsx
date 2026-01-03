import { APP_URL, NAME, TECHNOLOGIES } from "@/utils/consts";
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
  description:
    "Learn more about Monu Chouhan, a senior full-stack developer with experience building scalable web applications, solving real-world problems, and delivering impactful digital products.",
  openGraph: {
    title: `About ${NAME}`,
    description:
      "Background, experience, and values of a software engineer passionate about building meaningful, high-quality software applications.",
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
