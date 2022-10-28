import React from "react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative xl:flex-row max-w-[2000px] xl:px-10 min-h-screen"
    >
      <h3 className="body__heading">Skills</h3>
      <h3
        className="body__heading tracking-[3px] top-36 md:top-40
       text-gray-500 text-xs justify-items-center"
      >
        Hover over a skill for current proficiency
      </h3>

      <div className="body__main  justify-center items-center top-10 md:top-0">
        <div
          className="grid w-full grid-cols-3 md:grid-cols-4 gap-2 md:gap-5 
         content-center ml-0 md:ml-[10%] lg:ml-[15%] xl:ml-[18%] top-10 md:top-0"
        >
          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />

          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />

          <SkillCard />
          <SkillCard />
          <SkillCard />
          <SkillCard />

          <SkillCard />
          <SkillCard />
          <SkillCard />
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
