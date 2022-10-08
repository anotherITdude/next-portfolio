import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative"
    >
      <h3
        className="absolute text-gray-500 text-2xl mb-20  z-20 w-screen text-center
        top-[10%] uppercase tracking-[10px]
        md:tracking-[30px] md:top-28
       "
      >
        about
      </h3>
      <div
        className="h-screen flex flex-col relative text-center max-w-7xl px-10
        md:text-left md:flex-row  md:justify-between mx-auto items-center
   "
      >
        <div className="left mt-14 md:mt-10">
          <div
            className="mb-20 w-48 h-48 flex-shrink-0 pt-32
          rounded-full object-cover flex
          justify-center items-center
          md:rounded-lg md:pt-0  md:mb-0 md:w-[300px] md:h-[300px] 
          xl:w-[400px] xl:h-[400px]  "
          >
            <Image
              width={400}
              height={400}
              alt="profile"
              src="about_new.png"
              className="rounded-full"
            />
          </div>
        </div>

        <div className="right">
          <div className="px-0 md:space-y-10 md:px-10">
            <h4 className="text-2xl pb-2 md:pb-0 md:text-3xl font-semibold">
              Here is a&nbsp;
              <span className="underline decoration-[#f7ab0a]">little</span>
              &nbsp;background
            </h4>
            <p className="text-base">
              Originally from India, I am an engineer with over 12 years of
              experience in developing web applications. After working in India
              for around 2 years as a frontend developer, I moved to Dubai where
              I worked for around 10 years developing various real-estate,
              school, university, artgallery and payment portals. My weapons of
              choice are ReactJS, VueJS, Blade in the frontend and Laravel
              framework in the backend.
            </p>
            <p className="text-base">
              Currently in Sweden and loving the MERN stack. I also have
              experience with NextJS, typescript, state managers like Redux and
              the light weight Zustang
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
