import Animation from "@/components/Animation";
import { useTranslation } from "next-i18next";

import About from "./about.constant";

export default function index() {
  const { t } = useTranslation();
  return (
    <Animation>
      <div className="max-w-screen-8xl w-full m-auto my-10">
        <div className="flex flex-col items-center justify-center">
          <span className="flex gap-6 items-center justify-center flex-wrap flex-col">
            <h1 className="text-3xl font-bold tracking-tight py-2 opacity-80">{t(`nav_${About.heading}`)}</h1>
            <p className="w-[680px] text-lg text-center">{t(`nav_${About.description}`)}</p>
          </span>
        </div>
      </div>
    </Animation>
  );
}
