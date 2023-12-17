import commentConstants, { type ITeam } from "./team.constants";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 xl:gap-16">
      <div className="text-center max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          {t("about.team.heading")}
        </h2>
      </div>

      <div className="w-full md:w-3/4 mx-auto grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-14 xl:gap-y-16 max-lg:grid-cols-3 max-md:grid-cols-2">
        {commentConstants.map((item) => (
          <TeamSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

TeamSection.Item = ({ github, linkedin, name, src, title, twitter }: ITeam) => {
  return (
    <div className="flex flex-col items-center justify-between gap-y-4">
      <div className="flex flex-col items-center gap-y-4 text-center">
        <div className="relative w-24 h-24">
          <Image className="rounded-full" alt="" src={src} fill></Image>
        </div>

        <h3 className="text-lg font-semibold">{name}</h3>

        <p className="text-muted-foreground">{title}</p>
      </div>

      <div className="grid grid-flow-col gap-x-4 text-muted-foreground">
        {twitter && (
          <Link
            href={twitter}
            target="_blank"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-all"
          >
            <Twitter fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
        {linkedin && (
          <Link
            href={linkedin}
            target="_blank"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-all"
          >
            <Linkedin fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            className="hover:text-gray-600 dark:hover:text-gray-300 transition-all"
          >
            <Github fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
