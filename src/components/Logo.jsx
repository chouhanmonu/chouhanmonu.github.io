import { NAME } from "@/utils/consts";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="font-light text-4xl tracking-tight font-title">
      {NAME.toLowerCase()}
    </Link>
  );
}
