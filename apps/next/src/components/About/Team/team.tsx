import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "next-i18next";

import commentConstants, { type ITeam } from "./team.constants";

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col items-center px-20 py-24 max-lg:px-9 max-lg:py-12 max-md:px-0">
      <span className="px-32 w-full flex flex-col max-lg:px-20 max-md:px-4">
        <h2 className="text-4xl font-semibold text-center max-lg:text-3xl">{t("about.team.heading")}</h2>
        <p className="text-xl text-muted-foreground mt-5 text-center max-lg:text-lg">{t("about.team.subheading")}</p>
      </span>
      <div className="mt-16 w-full grid grid-cols-4 grid-rows-2 gap-x-8 gap-y-16 max-lg:grid-cols-3 max-md:grid-cols-2">
        {commentConstants.map((item) => (
          <TeamSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

TeamSection.Item = ({ github, linkedin, name, src, title, twitter }: ITeam) => {
  return (
    <div className="flex flex-col items-center justify-between p-6">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <Image className="rounded-full" alt="" src={src} fill></Image>
        </div>
        <h3 className="text-lg font-semibold mt-5 text-center">{name}</h3>
        <p className="mt-2 text-base text-muted-foreground text-center">{title}</p>
      </div>
      <div className="mt-4 grid grid-flow-col gap-x-4 text-muted-foreground">
        {twitter && (
          <Link href={twitter} target="_blank">
            <Twitter fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target="_blank">
            <Linkedin fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
        {github && (
          <Link href={github} target="_blank">
            <Github fill="currentColor" className="w-5 h-5" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamSection;
