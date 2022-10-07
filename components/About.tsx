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
        className="absolute top-28 uppercase tracking-[30px]
       text-gray-500 text-2xl mb-20  z-20 w-screen text-center"
      >
        about
      </h3>
      <div
        className="h-screen flex flex-col relative text-center md:text-left
     md:flex-row max-w-7xl px-10 md:justify-between mx-auto items-center
   "
      >
        <div className="left mt-20 md:mt-10">
          <div
            className="mb-20 w-92 h-92   flex-shrink-0 pt-32
          rounded-full object-cover md:rounded-lg md:pt-0
          md:mb-0 md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] flex
           justify-center items-center "
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
          <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-3xl font-semibold">
              here is a
              <span className="underline decoration-[#f7ab0a]"> little </span>
              background
            </h4>
            <p className="text-base">
              • 12+ Years of experience as a Web application and UI/UX
              developer. • Proficiency in backend frameworks like Laravel,
              CodeIgniter, and frontend frameworks like React and Vue. •
              Experience, in architecting scalable web applications and database
              designs. • Proficient in MySQL and relational database design. •
              Proficient in building and consuming REST web services and
              third-party Rest API integrations. • Working experience on Dubai
              property and educational portals. • A strong team player with
              collaboration and team-building skills. • Ability to handle a team
              of developers and coordinate smooth delivery of the project.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
