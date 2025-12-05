import React from "react";
import { Button as Btn } from "primereact/button";

export default function Button({ className, onClick, disabled, children }) {
  return (
    <Btn
      unstyled
      pt={{
        root: {
          className: `bg-primary-600 rounded-sm py-2 px-4 text-white font-medium tracking-wide focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:outline-none hover:cursor-pointer hover:bg-primary-500 transition-colors ${className}`,
        },
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Btn>
  );
}
