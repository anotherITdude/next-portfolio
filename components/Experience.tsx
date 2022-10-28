import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

type Props = {};

function Experience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative"
    >
      <h3 className="body__heading">Experience</h3>
      <div className="body__main  justify-center">
        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-smandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
