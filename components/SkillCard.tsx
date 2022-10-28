import Image from "next/image";
import React, { useState, useEffect } from "react";

type Props = {};

function SkillCard({}: Props) {
  return (
    <div className="group w-24 h-24 xl:w-32 relative cursor-pointer">
      <Image
        alt="skill"
        width={100}
        height={100}
        src="https://via.placeholder.com/100"
        className="rounded-full object-center border border-red-500
        w-24 h-24 xl:w-32 group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute top-8 xs:top-4 left-6 opacity-0 
      group-hover:opacity-80 transition duration-300 ease-in-out
     group-hover:bg-white/5"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
