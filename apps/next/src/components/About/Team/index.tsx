import Comment from "@/components/Home/Comments/Comment";
import { useTranslation } from "next-i18next";

export default function index() {
  const { t } = useTranslation();
  return (
    <div className="max-w-screen-8xl w-full m-auto">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl opacity-80 font-bold tracking-tight px-10 pb-10">{t("nav_teams")}</h1>
        <span className="flex gap-6 items-center justify-center flex-wrap">
          <Comment
            description=""
            name="Ali Osman Delişmen"
            src="https://avatars.githubusercontent.com/u/106361546?v=4"
            title="Full Stack Developer"
            teams
            github="https://github.com/osmandlsmn"
            linkedin="https://www.linkedin.com/in/ali-osman-delismen/"
            twitter="https://twitter.com/osmandlsmn"
          />
          <Comment
            description=""
            name="Yusuf Güneş"
            src="https://media.licdn.com/dms/image/C4D03AQE69stnfq0hLg/profile-displayphoto-shrink_800_800/0/1644590087439?e=1694649600&v=beta&t=ktid4pHV_4W8eiFPXmQ9xZyt3Ohrn9nDY-qMHMk-2ck"
            title="Frontend Developer"
            teams
            github="https://github.com/yusufgns"
            linkedin="https://www.linkedin.com/in/yusufgunes/"
            twitter="https://twitter.com/yusugunes9"
          />
          <Comment
            description=""
            name="Muhammet Sefa Kapısız"
            src="https://avatars.githubusercontent.com/u/62629437?v=4"
            title="Backend Developer"
            teams
            github="https://github.com/sefakpsz"
            linkedin="https://www.linkedin.com/in/muhammet-sefa-kap%C4%B1s%C4%B1z-26b136143/"
            twitter=""
          />
          <Comment
            description=""
            name="Fatih Yıldız"
            src="https://avatars.githubusercontent.com/u/47571500?v=4"
            title="UI Designer"
            teams
            github="https://github.com/0fatihyildiz"
            linkedin="https://www.linkedin.com/in/fatih-y%C4%B1ld%C4%B1z-b216b31b2/"
            twitter="https://twitter.com/0fatihyildiz"
          />
        </span>
      </div>
    </div>
  );
}
