import classNames from "classnames";
import React from "react";

export default function ButtonSecondary({
  className,
  onClick,
  disabled,
  children,
}) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "flex gap-2 items-center justify-center bg-gray-500 rounded-md py-2.5 px-4 hover:cursor-pointer transition-colors hover:bg-gray-600",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
