import { getSectionClasses } from "@/utils/helpers";
import classNames from "classnames";
import React from "react";
import Project from "@/components/Project";
import { PROJECTS } from "./consts";

export default function Projects() {
  return (
    <>
      <div className="space-y-14">
        <div className={classNames(getSectionClasses(), "text-center")}>
          <div className="text-4xl font-heading font-bold tracking-tight leading-14 col-span">
            A small selection of
            <span className="text-primary-500"> Recent Projects</span>
          </div>
          {/* TODO: calculate year dynamically */}
          <p className="text-gray-400 max-w-[62ch] mx-auto">
            Here&apos;s a curated list of key projects from my recent work
            experience that I&apos;d like to highlight
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-3 gap-6.5">
            {PROJECTS.map((projectDetails, i) => (
              <Project key={i} project={projectDetails} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
