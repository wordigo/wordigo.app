// @ts-nocheck
import TooBadIcon from "images/faces/bad.svg?url";
import GoodIcon from "images/faces/good.svg?url";
import NotBadIcon from "images/faces/not_bad.svg?url";
import BadIcon from "images/faces/very_bad.svg?url";
import VeryGoodIcon from "images/faces/very_good.svg?url";
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
      imageSrc: TooBadIcon,
      level: 1,
    },
    {
      title: t("general.bad"),
      imageSrc: BadIcon,
      level: 2,
    },
    {
      title: t("general.not_bad"),
      imageSrc: NotBadIcon,
      level: 3,
    },
    {
      title: t("general.good"),
      imageSrc: GoodIcon,
      level: 4,
    },
    {
      title: t("general.very_good"),
      imageSrc: VeryGoodIcon,
      level: 5,
    },
  ];
};

export default useFeedbacks;
