"use client";
import Image from "next/image";
import React from "react";

export default function Card({ imageSrc, name }: any) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt="Next.js Logo"
        width={250}
        height={37}
        className="rounded-full mt-8"
        priority
      />
      <span className="font-semibold text-xl tracking-tight text-black m-8">
        {name}
      </span>
    </div>
  );
}
