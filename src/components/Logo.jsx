import { NAME, NAME_SHORT } from "@/utils/consts";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="font-light text-4xl font-title">
      {NAME_SHORT.toLowerCase()}.
    </Link>
  );
}
