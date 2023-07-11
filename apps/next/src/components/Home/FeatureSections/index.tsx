import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const Box = ({ num }: { num: number }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const title_1 = "Lorem Ipsum";
  const description_1_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_1_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const title_2 = "Lorem Ipsum";
  const description_2_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_2_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  const title_3 = "Lorem Ipsum";
  const description_3_01 =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const description_3_02 = "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

  useEffect(() => {
    if (isInView) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <section>
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" ref={ref}>
        {num === 1 && (
          <motion.div variants={boxVariant} initial="hidden" animate={control} className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </motion.div>
        )}

        {num === 3 && (
          <motion.div variants={boxVariant} initial="hidden" animate={control} className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </motion.div>
        )}

        <motion.div variants={boxVariant} initial="hidden" animate={control} className="font-light text-[#333549] dark:text-white">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">{num === 1 ? title_1 : num === 2 ? title_2 : title_3}</h2>
          <p className="mb-4 opacity-80">{num === 1 ? description_1_01 : num === 2 ? description_2_01 : description_3_01}</p>
          <p className="opacity-80">{num === 1 ? description_1_02 : num === 2 ? description_2_02 : description_3_02}</p>
        </motion.div>

        {num === 2 && (
          <motion.div variants={boxVariant} initial="hidden" animate={control} className="grid grid-cols-2 gap-4 mt-8">
            <div className="w-[580px] h-[380px] bg-[#9CA3AF] rounded-xl"></div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="App">
      <Box num={1}></Box>
      <Box num={2}></Box>
      <Box num={3}></Box>
    </div>
  );
}
