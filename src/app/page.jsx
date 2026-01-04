import AboutMeBrief from "@/components/AboutMeBrief";
import Contact from "@/components/Contact";
import FactsAndFigures from "@/components/FactsAndFigures";
import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import SectionTitle from "@/components/SectionTitle";
import {
  APP_URL,
  CURRENT_COMPANY_NAME,
  MY_GITHUB_LINK,
  NAME,
  SOCIAL_LINKS,
  TECHNOLOGIES,
} from "@/utils/consts";
import { getSectionClasses } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <div className={getSectionClasses()}>
        <h1 className="sr-only">
          Software Engineer Building Scalable Web Applications
        </h1>
        <HeroProjectsSlider />
        <div className="mt-4 text-center">
          <Link
            className="inline-block px-4 py-2 pr-0 underline underline-offset-4 text-gray-400 cursor-pointer hover:cursor-pointer transition-colors hover:text-primary-500 light:text-gray-600"
            href="/projects"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
      <div className={getSectionClasses()}>
        <div>
          <SectionTitle>About Me</SectionTitle>
          <div className="flex gap-4 items-center max-md:flex-col">
            <div className="basis-1/2 aspect-square relative max-md:w-full">
              <Image
                className="w-full -z-1"
                src="/images/software-engineer-illustration.webp"
                quality={100}
                alt="An illustration representing software engineer"
                sizes="(max-width: 768px) 100vw, 488px"
                loading="lazy"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className="basis-1/2">
              <AboutMeBrief />
            </div>
          </div>

          <div className="max-md:mt-8">
            <FactsAndFigures />
          </div>

          <div className="text-center text-gray-400 mt-14 max-md:mt-8 max-md:text-left light:text-gray-600">
            Technologies I have experience with:
          </div>
          <div className="mt-8 max-md:mt-4">
            <ul className="flex gap-4 justify-center flex-wrap max-md:justify-start">
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
      <div className={getSectionClasses()}>
        <div className="space-y-8">
          <Contact />
        </div>
      </div>

      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "@id": `${APP_URL}/#person`,
            name: NAME,
            url: `${APP_URL}/`,
            jobTitle: "Software engineer",
            description:
              "Software engineer building scalable, high-performance web applications using modern technologies.",
            sameAs: [
              MY_GITHUB_LINK,
              SOCIAL_LINKS.linkedIn,
              SOCIAL_LINKS.discord,
              SOCIAL_LINKS.twitter,
            ],
            knowsAbout: [
              "Software Engineering",
              "Full Stack Development",
              "Next.js",
              "React",
              "Node.js",
              "NestJS",
              "Go",
              "AWS",
              "Docker",
              "System Design",
            ],
            worksFor: {
              "@type": "Organization",
              name: CURRENT_COMPANY_NAME,
            },
          }),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${APP_URL}/#website`,
            url: `${APP_URL}/`,
            name: `${NAME} - Software Engineer`,
            description: `Portfolio website of ${NAME}, a software engineer building scalable, high-performance web applications.`,
            publisher: {
              "@type": "Person",
              "@id": `${APP_URL}/#person`,
            },
          }),
        }}
      />
    </>
  );
}
