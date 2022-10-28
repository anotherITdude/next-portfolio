import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

export default function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative"
    >
      <h3 className="body__heading">Projects</h3>
      <div className="body__main">
        <div
          className="relative w-full flex overflow-x-scroll overflow-y-hidden
snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 "
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-screen flex-shrink-0 snap-center snap-mandatory
  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.span
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  alt="skill"
                  width={300}
                  height={300}
                  src="https://via.placeholder.com/666"
                />
              </motion.span>
              <div>
                <h4>
                  Case Study {index + 1} of {projects.length}: UPS clone
                </h4>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full absolute  top-[21%] md:top-[30%]
bg-[#F7Ab0A]/10 left-0 h-[500px] -skew-y-12"
        ></div>
      </div>
    </motion.div>
  );
}
