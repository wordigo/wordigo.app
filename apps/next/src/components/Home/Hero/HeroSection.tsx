import { motion } from "framer-motion";
import { FaCloudDownloadAlt, FaLanguage } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

import ArrowIcon from "./ArrowIcon";

export default function HeroSection() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="ml-[30px] mt-5 w-full">
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.5,
        }}
        className="mt-20 text-[#333549] dark:text-white"
      >
        <p className="font-semibold text-[14px] text-primary-blue">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

        <div className="my-5 text-5xl font-bold">
          <h1>Lorem Ipsum is simply</h1>
          <h1 className="mt-3.5">
            dummy text of the <span className="text-primary-blue ">printing!</span>
          </h1>
        </div>

        <div className="font-semibold text-base opacity-70">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <p>and typesetting industry.</p>
        </div>

        {/* Data Information */}
        <motion.div variants={container} initial="hidden" animate="visible" className="mt-10 flex flex-col gap-4">
          <motion.span variants={item} className="flex gap-3 items-center">
            <div className="rounded-lg text-3xl text-center">
              <FaLanguage></FaLanguage>
            </div>
            <span>
              <h1 className="font-semibold text-sm">+10 Language</h1>
            </span>
          </motion.span>

          <motion.span variants={item} className="flex gap-3 items-center">
            <div className="rounded-lg text-[30px] text-center">
              <FaPeopleGroup></FaPeopleGroup>
            </div>
            <span>
              <h1 className="font-semibold text-sm">+99 Learner</h1>
            </span>
          </motion.span>

          <motion.span variants={item} className="flex gap-3 items-center">
            <div className="rounded-lg text-[30px] text-center">
              <FaCloudDownloadAlt></FaCloudDownloadAlt>
            </div>
            <span>
              <h1 className="font-semibold text-sm">+99 Downloads</h1>
            </span>
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2.2,
          }}
          className="w-full relative bg-black  mt-[-100px]"
        >
          <span className="absolute right-0">
            <ArrowIcon />
          </span>

          <div className="right-[170px] mt-[130px] absolute bg-gray-400 py-[10px] px-[25px] rounded-lg w-[320px] h-[120px]"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
