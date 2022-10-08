import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

const Header: React.FC = (props: Props) => {
  return (
    <header className="sticky top-0 items-start flex p-3 md:p-5 mx-auto max-w-7xl justify-between z-20 xl:items-center">
      <motion.div
        initial={{ x: -200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/abhimanyu-baidya/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/c/AbhiKaZayka"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.facebook.com/abhimanyu.baidya"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/abhi.baidya/"
          fgColor="gray"
          bgColor="transparent
        "
        />
        <SocialIcon
          url="https://github.com/anotherITdude"
          fgColor="gray"
          bgColor="transparent
        "
        />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center flex-row text-gray-500 cursor-pointer"
      >
        <SocialIcon
          url="mailto:abhi.baidya@gmail.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
