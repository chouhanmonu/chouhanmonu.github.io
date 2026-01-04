"use client";

import { useIsIntersecting } from "@/hooks/useIsIntersecting";
import classNames from "classnames";
import { useState } from "react";

export default function AboutMeBrief() {
  const [isAnimtionEnded, setIsAnimtionEnded] = useState(false);
  const [elObserverRef, isElIntersecting] = useIsIntersecting();

  return (
    <>
      <div className="font-light text-5xl font-body max-lg:text-4xl max-md:text-3xl">
        <span
          ref={elObserverRef}
          className={classNames("inline-block", {
            "about-intro-animate": isElIntersecting,
            "border-0!": isAnimtionEnded,
          })}
          onAnimationEnd={() => {
            setTimeout(() => setIsAnimtionEnded(true), 1500);
          }}
        >
          Hi! I&apos;m monu :&#41;
        </span>
      </div>
      <div className="text-2xl mt-4 leading-10 max-lg:text-xl max-lg:leading-8 max-md:text-base max-md:leading-6 max-md:mt-2">
        A software engineer crafting end-to-end web applications with purpose. I
        believe great technology makes life better—driven by curiosity and
        learning.
      </div>
    </>
  );
}
