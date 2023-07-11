import { motion } from "framer-motion";

import HeroBanner from "./HeroBanner";
import HeroSection from "./HeroSection";

export default function HeroContainer() {
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
    hidden: { y: -1000, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const item2 = {
    hidden: { x: -1000, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.main variants={container} initial="hidden" animate="visible" className="m-auto max-w-[1440px] flex justify-between mb-[80px] mt-4">
      <motion.section className="w-full mr-5" variants={item2}>
        <HeroSection />
      </motion.section>
    
      <motion.section className="item" variants={item}>
        <HeroBanner />
      </motion.section>
    </motion.main>
  );
}
