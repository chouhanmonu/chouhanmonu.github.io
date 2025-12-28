import classNames from "classnames";
import React from "react";

export default function SectionTitle({ className, children }) {
  return (
    <div
      className={classNames(
        "font-heading tracking-tight  text-3xl font-semibold leading-12 max-lg:text-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}
