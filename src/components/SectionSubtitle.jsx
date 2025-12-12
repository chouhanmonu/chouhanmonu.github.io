import classNames from "classnames";
import React from "react";

export default function SectionSubtitle({ className, children }) {
  return (
    <p className={classNames("text-gray-400 tracking-wider", className)}>
      {children}
    </p>
  );
}
