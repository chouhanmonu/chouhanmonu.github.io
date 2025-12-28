import { getSectionClasses } from "@/utils/helpers";
import classNames from "classnames";
import React from "react";
import Project from "@/components/Project";
import { PROJECTS } from "./consts";

export default function Projects() {
  return (
    <>
      <div className="space-y-14 max-md:space-y-8">
        <div className={classNames(getSectionClasses(), "text-center")}>
          <div className="text-4xl font-heading font-bold tracking-tight leading-14 col-span max-lg:text-3xl max-lg:leading-10 max-md:text-2xl max-md:leading-7 max-md:text-left">
            A small selection of
            <span className="text-primary-500"> Recent Projects</span>
          </div>
          <p className="text-gray-400 max-w-[62ch] mx-auto max-md:text-left max-md:mt-2">
            Here&apos;s a curated list of key projects from my recent work
            experience that I&apos;d like to highlight
          </p>
        </div>
        <div className="max-w-7xl mx-auto max-2xl:px-4">
          <ul className="grid grid-cols-3 gap-6.5 max-2xl:gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {PROJECTS.map((projectDetails, i) => (
              <Project key={i} project={projectDetails} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
