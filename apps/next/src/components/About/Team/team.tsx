import commentConstants, { type ITeam } from "./team.constants";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20">
      <h2 className="text-center font-semibold text-2xl sm:text-3xl md:text-4xl">
        {t("about.team.heading")}
      </h2>
      <div className="w-full grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-16 max-lg:grid-cols-3 max-md:grid-cols-2">
        {commentConstants.map((item) => (
          <TeamSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

TeamSection.Item = ({ github, linkedin, name, src, title, twitter }: ITeam) => {
  return (
    <div className="flex flex-col items-center justify-between p-4">
      <div className="flex flex-col items-center">
        <div className="relative w-36 h-36">
          <Image className="rounded-full" alt="" src={src} fill></Image>
        </div>
        <h3 className="text-lg font-semibold mt-5 text-center">{name}</h3>
        <p className="mt-2 text-base text-muted-foreground text-center">
          {title}
        </p>
      </div>
      <div className="mt-4 grid grid-flow-col gap-x-4 text-muted-foreground">
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
