import classNames from "classnames";
import React from "react";

export default function Button({ className, children, onClick }) {
  return (
    <button
      className={classNames(
        "inline-flex gap-2 items-center justify-center bg-primary-700 rounded-md py-2.5 px-4 hover:cursor-pointer transition-colors hover:bg-primary-800 max-md:gap-1 max-md:py-2 max-md:px-2.5 light:text-white",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
