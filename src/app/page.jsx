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
            className="inline-block px-4 py-2 pr-0 underline underline-offset-4 text-gray-400 cursor-pointer hover:cursor-pointer"
            href="/projects"
          >
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
      <div className={getSectionClasses()}>
        <div>
          <SectionTitle>About Me</SectionTitle>
          <div className="flex gap-4 items-center">
            <div className="basis-1/2 aspect-square relative">
              <Image
                className="w-full -z-1"
                src="/images/software-engineer-illustration.png"
                quality={100}
                alt=""
                sizes="(max-width: 768px) 100vw, 468px"
                loading="lazy"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
            <div className="basis-1/2">
              <div className="font-light text-5xl font-title">
                Hi! I&apos;m monu :)
              </div>
              <div className="text-2xl mt-4 leading-10">
                A senior full-stack developer crafting end-to-end web
                applications with purpose. I believe great technology makes life
                better—driven by curiosity and learning.
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400">
            Technologies I have experience with:
          </div>
          <div className="mt-8">
            <ul className="flex gap-4 justify-center flex-wrap">
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
