import { createRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

import { cn } from "@wordigo/ui/lib/utils";

import commentConstants, { type ITeam } from "./team.constants";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TeamSection = () => {
  return (
    <section>
      <div className="gap-3 justify-center items-center py-8 mx-auto max-w-screen-xl flex lg:py-16 lg:px-6">
        {commentConstants.map((item) => (
          <TeamSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

TeamSection.Item = ({ github, linkedin, name, src, title, twitter }: ITeam) => {
  const ref = createRef();
  const control = useAnimation();
  const isInView = useInView(ref as never);
  // const classes = cn("gap-4 mt-8 flex gap-x-10", positionRight ? "flex-row-reverse" : "");

  useEffect(() => {
    if (isInView) {
      void control.start("visible");
    } else {
      void control.start("hidden");
    }
  }, [control, isInView]);

  return (
    <motion.div initial="hidden" variants={boxVariant} className={""} animate={control} ref={ref as never}>
      <div className="max-w-[420px] h-fit px-8 py-5 rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-lg dark:shadow-black">
        <span className={cn("flex items-center gap-3 flex-col")}>
          <span className="border-2 border-gray-600 rounded-full">
            <Image className="rounded-full m-1" alt="" src={src} width={128} height={128}></Image>
            {!src && <div className="rounded-full m-1 w-[84px] h-[84px] bg-sky-500"></div>}
          </span>
          <h1>{name}</h1>
          <p>{title}</p>
        </span>
        <div className="mt-2 flex items-center justify-center">
          <div className="flex gap-1 items-center">
            {github && (
              <Link href={github} target="_blank" className="dark:bg-[#020817] p-2 rounded-full hover:opacity-80">
                <Github className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
            {twitter && (
              <Link href={twitter} target="_blank" className="dark:bg-[#020817]  p-2 rounded-full hover:opacity-80">
                <Twitter className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
            {linkedin && (
              <Link href={linkedin} target="_blank" className="dark:bg-[#020817]  p-2 rounded-full hover:opacity-80">
                <Linkedin className="text-sm w-[15px] h-[15px]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamSection;
