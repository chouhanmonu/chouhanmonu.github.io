import { getSectionClasses } from "@/utils/helpers";
import classNames from "classnames";
import React from "react";
import Project from "@/components/Project";
import { PROJECTS } from "./consts";
import { APP_URL, NAME } from "@/utils/consts";
import Script from "next/script";

export const metadata = {
  title: `Projects | ${NAME}`,
  description:
    "Explore real-world projects built by a senior full-stack developer—covering scalable web apps, SaaS platforms, e-commerce, and system integrations using modern technologies.",
  openGraph: {
    title: `Projects by ${NAME}`,
    description:
      "A collection of production-ready web applications, side projects, and client work focused on performance, scalability, and clean architecture.",
    url: `${APP_URL}/projects/`,
    type: "website",
  },
};

export default function Projects() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Software Projects by Monu Chouhan",
    itemListElement: PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        image: project.imageUrl ? `${APP_URL}${project.imageUrl}` : undefined,
        url: project.websiteLink || `${APP_URL}/projects/`,
        author: {
          "@type": "Person",
          name: NAME,
          url: `${APP_URL}/`,
        },
        keywords: project.technologies?.list,
        about: project.tags,
        creator: {
          "@type": "Person",
          name: NAME,
        },
      },
    })),
  };

  return (
    <>
      <div className="space-y-14 max-md:space-y-8">
        <div className={classNames(getSectionClasses(), "text-center")}>
          <h1 className="text-4xl font-heading font-bold tracking-tight leading-14 col-span max-lg:text-3xl max-lg:leading-10 max-md:text-2xl max-md:leading-7 max-md:text-left">
            A small selection of
            <span className="text-primary-500"> Recent Projects</span>
          </h1>
          <p className="text-gray-400 max-w-[62ch] mx-auto max-md:text-left max-md:mt-2 light:text-gray-600">
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
        <Script
          id="projects-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(projectSchema),
          }}
        />
      </div>
    </>
  );
}
