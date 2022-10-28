import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <motion.article
      initial={{ y: -100, opacity: 0 }}
      transition={{ duration: 1.2 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col rounded-lg items-center 
          space-y-7 flex-shrink-0 w-[500px] md:w-[600px]  snap-center
          bg-[#292929] p-10  opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200
      "
    >
      <Image
        alt="/"
        width={150}
        height={150}
        src="https://via.placeholder.com/150"
      />
      <div className="text-left px-0 md:px-10">
        <h4 className="text-3xl font-light">CEO papercritics</h4>
        <p className="font-bold text-2xl mt-1">Awesome</p>
        <div className="flex space-x-2 my-2">
          <Image
            width={40}
            height={40}
            alt="spec"
            src="https://via.placeholder.com/45"
            className="h-8 w-10 rounded-full"
          />
          <Image
            width={40}
            height={40}
            alt="spec"
            src="https://via.placeholder.com/45"
            className="h-8 w-10 rounded-full"
          />
          <Image
            width={40}
            height={40}
            alt="spec"
            src="https://via.placeholder.com/45"
            className="h-8 w-10 rounded-full"
          />
          <Image
            width={40}
            height={40}
            alt="spec"
            src="https://via.placeholder.com/45"
            className="h-8 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          started work:, ended work: ...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Buller points</li>
          <li>Buller points</li>
          <li>Buller points</li>
          <li>Buller points</li>
          <li>Buller points</li>
        </ul>
      </div>
    </motion.article>
  );
}

export default ExperienceCard;
