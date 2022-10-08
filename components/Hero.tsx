import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Abhimanyu Baidya",
      "I love <javascript />",
      "presently commited to React",
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 5,
  });
  return (
    <motion.div className="h-screen flex flex-col md:space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 object-cover mx-auto"
        width={150}
        height={150}
        alt="profile"
        src="profile.jpeg"
      />

      <div className="z-20 ">
        <h2 className="py-5 text-l uppercase text-gray-500 pb-2 tracking-[8px]  md:tracking-[15px]">
          Frontend developer
        </h2>
        <h1 className="text-2xl md:text-5xl font-semibold px-10 h-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#ffffff" />
        </h1>

        <div className="md:pt-6 ">
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
