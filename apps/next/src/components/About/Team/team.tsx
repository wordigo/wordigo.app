import Image from "next/image";
import Link from "next/link";
import Animation from "@/components/Animation";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";

import { cn } from "@wordigo/ui/lib/utils";

import commentConstants, { type ITeam } from "./team.constants";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <Animation>
      <section className="max-w-screen-8xl w-full m-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl opacity-80 font-bold tracking-tight">{t("nav_teams")}</h1>
          <div className="gap-3 justify-center items-center py-8 mx-auto max-w-screen-xl flex lg:py-16 lg:px-6">
            {commentConstants.map((item) => (
              <TeamSection.Item key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Animation>
  );
};

TeamSection.Item = ({ github, linkedin, name, src, title, twitter }: ITeam) => {
  return (
    <Animation>
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
    </Animation>
  );
};

export default TeamSection;
