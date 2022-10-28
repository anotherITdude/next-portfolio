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
      <h3 className="body__heading">about</h3>
      <div className="body__main">
        <div className="left mt-[5.5rem] sm:mt-32 md:mt-0">
          <div className="about__image">
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
