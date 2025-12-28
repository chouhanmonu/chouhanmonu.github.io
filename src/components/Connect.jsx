"use client";

import React from "react";
import Button from "./Button";
import { EMAIL } from "@/utils/consts";

export default function Connect() {
  return (
    <div className="border border-primary-950 rounded-md bg-primary-950/15 text-center p-10 space-y-6 max-w-[800px] mx-auto max-md:py-6">
      <div className="font-heading text-4xl font-bold leading-12 max-lg:text-3xl max-md:text-2xl max-md:leading-8">
        Wanna Build Something
        <span className="text-primary-500"> Together?</span>
      </div>
      <p className="max-w-[52ch] mx-auto">
        If you have some idea that you would like to share with me so that I can
        contribute to it in any way, please reach out to me.
      </p>
      <Button
        onClick={() => (window.location.href = `mailto:${EMAIL}`)}
        className="font-medium"
      >
        Let&apos;s collaborate!
      </Button>
    </div>
  );
}
