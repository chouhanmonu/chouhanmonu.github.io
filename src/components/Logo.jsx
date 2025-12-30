"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Logo() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setTimeout(() => setStartAnimation(true), 1600);
  }, []);
  return (
    <Link href="/" className="font-light text-4xl font-title max-md:text-2xl">
      <div className="flex items-center">
        <span>m</span>
        <span
          className={classNames({
            "logo-animate": startAnimation,
          })}
        >
          onu
        </span>
        <span className="text-primary-500">.</span>
      </div>
    </Link>
  );
}
