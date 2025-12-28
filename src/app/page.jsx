import ButtonSecondary from "@/components/ButtonSecondary";
import Contact from "@/components/Contact";
import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import SectionTitle from "@/components/SectionTitle";
import { TECHNOLOGIES } from "@/utils/consts";
import { getSectionClasses } from "@/utils/helpers";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={getSectionClasses()}>
        <HeroProjectsSlider />
        <div className="mt-4 text-center">
          <Link
            className="inline-block px-4 py-2 pr-0 underline underline-offset-4 text-gray-400 cursor-pointer hover:cursor-pointer transition-colors hover:text-primary-500"
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
              <div className="font-light text-5xl font-title max-lg:text-4xl max-md:text-3xl">
                Hi! I&apos;m monu :)
              </div>
              <div className="text-2xl mt-4 leading-10 max-lg:text-xl max-lg:leading-8 max-md:text-base max-md:leading-6 max-md:mt-2">
                A senior full-stack developer crafting end-to-end web
                applications with purpose. I believe great technology makes life
                better—driven by curiosity and learning.
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 max-md:mt-8 max-md:text-left">
            Technologies I have experience with:
          </div>
          <div className="mt-8 max-md:mt-4">
            <ul className="flex gap-4 justify-center flex-wrap max-md:justify-start">
              {TECHNOLOGIES.map((techPill, i) => (
                <li
                  key={i}
                  className="flex gap-2 border py-1 px-2 border-gray-700 rounded-md items-center"
                >
                  {techPill.element}
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
      <div className={getSectionClasses()}>
        <div className="space-y-8">
          <Contact />
        </div>
      </div>
    </>
  );
}
