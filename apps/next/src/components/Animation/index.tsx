import React, { createRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.95 },
};

interface DashboardLayoutProps {
  children?: React.ReactNode;
  className?: string;
}

export default function index({ children, className }: DashboardLayoutProps) {
  const ref = createRef();
  const control = useAnimation();
  const isInView = useInView(ref as never);

  useEffect(() => {
    if (isInView) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <motion.div className={className} initial="hidden" variants={boxVariant} animate={control} ref={ref as never}>
      {children}
    </motion.div>
  );
}
