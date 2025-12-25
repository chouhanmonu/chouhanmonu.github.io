import classNames from "classnames";
import React from "react";

export default function Tag({ children, color = "primary" }) {
  return (
    <div
      className={classNames(
        `inline-flex gap-2 py-1 px-5 rounded-md items-center font-semibold text-base leading-normal tracking-normal font-body border`,
        {
          "bg-primary-500 text-primary-950": color === "primary",
          "border-orange-500 text-orange-500": color === "orange",
          "border-sky-500 text-sky-500": color === "sky",
        }
      )}
    >
      {children}
    </div>
  );
}
