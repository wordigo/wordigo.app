import { useTranslation } from "next-i18next";

export interface IFeedbackType {
  title: string;
  imageSrc: string;
  level: number;
}

const useFeedbacks = (): IFeedbackType[] => {
  const { t } = useTranslation();

  return [
    {
      title: t("general.too_bad"),
      imageSrc: "/images/faces/very_bad.svg",
      level: 1,
    },
    {
      title: t("general.bad"),
      imageSrc: "/images/faces/very_bad.svg",
      level: 2,
    },
    {
      title: t("general.not_bad"),
      imageSrc: "/images/faces/not_bad.svg",
      level: 3,
    },
    {
      title: t("general.good"),
      imageSrc: "/images/faces/good.svg",
      level: 4,
    },
    {
      title: t("general.very_good"),
      imageSrc: "/images/faces/very_good.svg",
      level: 5,
    },
  ];
};

export default useFeedbacks;
