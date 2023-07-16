import { createRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { cn } from "@wordigo/ui/lib/utils";

import featuresConstants, { type IFeature } from "./features.constants";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const FeatureSection = () => {
  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col lg:py-16 lg:px-6">
        {featuresConstants.map((item) => (
          <FeatureSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

FeatureSection.Item = ({ title, description, positionRight }: IFeature) => {
  const ref = createRef();
  const control = useAnimation();
  const isInView = useInView(ref as never);
  const classes = cn("gap-4 mt-8 flex gap-x-10", positionRight ? "flex-row-reverse" : "");

  useEffect(() => {
    if (isInView) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <motion.div initial="hidden" variants={boxVariant} className={classes} animate={control} ref={ref as never}>
      <div className="min-w-[580px] h-[380px] shadow-2xl dark:shadow-slate-800 dark:shadow-2xl bg-[#9CA3AF] rounded-xl"></div>
      <div className="flex flex-col gap-y-1 justify-center">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold">{title}</h2>
        <p className="mb-4 opacity-80">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
