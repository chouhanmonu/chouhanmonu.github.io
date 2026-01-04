"use client";

import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import GithubIcon from "@/assets/icons/GithubIcon";
import {
  ArrowLongRightIcon,
  ArrowUpRightIcon,
  CloudArrowDownIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_PAGE, MY_GITHUB_LINK } from "@/utils/consts";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <div className="flex gap-4 justify-between max-md:flex-col-reverse">
      <div className="basis-[420px] flex flex-col gap-6 max-md:mt-5 max-md:gap-3">
        <p className="font-light text-4xl font-title">Hi! I&apos;m monu</p>
        <p>
          I&apos;m a Software Engineer with 4+ years of experience designing and
          building scalable, production-ready web systems. My work spans
          frontend, backend, and infrastructure — but my strength lies in
          engineering reliable systems, not just shipping features.
        </p>
        <p>
          I&apos;ve worked across the full lifecycle of applications: from
          architecting APIs and databases, to deploying, monitoring, and scaling
          services in production. I care deeply about clean abstractions,
          performance, security, and long-term maintainability.
        </p>
        <p>
          I strongly believe that with the right use of technology, we can make
          our lives significantly better. I ❤️ going on adventurous trips,
          listening to music, learning, and reading!
        </p>

        <div className="flex gap-3 mt-8 max-md:flex-col max-md:items-start max-md:mt-6">
          <ButtonSecondary
            onClick={() =>
              window.open(MY_GITHUB_LINK, "_blank", "noopener,noreferrer")
            }
          >
            <GithubIcon className="w-5 h-5" />
            <span>View my Github</span>
            <ArrowUpRightIcon strokeWidth={2} className="w-4 h-4" />
          </ButtonSecondary>
          <ButtonSecondary
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/files/cv.pdf";
              link.download = "cv.pdf"; // optional, browser may override
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
          >
            <CloudArrowDownIcon width={24} />
            Download CV
          </ButtonSecondary>
        </div>

        <div className="mt-auto max-md:mt-4">
          <Link
            className="flex gap-2 underline underline-offset-4 text-gray-400 transition-colors hover:text-primary-500! light:text-gray-600"
            href={CONTACT_PAGE.href}
          >
            <span>Contact me</span>
            <ArrowLongRightIcon className="w-6" />
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="basis-[380px] aspect-2/3 relative"
      >
        <Image
          className="max-md:mx-auto rounded-md"
          src="/images/photo.webp"
          alt="My photo"
          fill
          loading="eager"
          sizes="(max-width: 768px) 100vw, 380px"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>
    </div>
  );
}
