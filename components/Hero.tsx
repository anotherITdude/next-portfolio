import React from "react";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: ["Hi, the name is Abhimanyu", "I am a frontend developer fuck yeah"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <motion.div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 object-cover mx-auto"
        width={150}
        height={150}
        alt="profile"
        src="profile.jpeg"
      />

      <div className="z-20">
        <h2 className="text- uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="hero__buttons">About</button>
          </Link>
          <Link href="#experience">
            <button className="hero__buttons">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="hero__buttons">Skills</button>
          </Link>
          <Link href="#contact">
            <button className="hero__buttons">Contact</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
