import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

import { Badge, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

import featuresConstants, { type IFeature } from "./features.constants";

const FeatureSection = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="px-20 py-24">
      <div className="flex flex-col items-center">
        <Badge className="text-sm font-medium px-2.5 py-1 w-fit" variant="outline">
          {t("features.badge")}
        </Badge>
        <h2 className="text-4xl font-semibold mt-3">{t("features.heading")}</h2>
        <p className="text-xl mt-5 text-muted-foreground">{t("features.description")}</p>
      </div>
      <div className="mt-24 grid gap-y-24">
        {featuresConstants.map((item) => (
          <FeatureSection.Item key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

FeatureSection.Item = ({
  Icon,
  title,
  description,
  primaryButtonName,
  primaryButtonLink,
  secondaryButtonName,
  secondaryButtonLink,
  SecondaryButtonIcon,
  image,
  positionLeft,
}: IFeature) => {
  const classes = cn("px-8 w-full", positionLeft ? "flex flex-row-reverse" : "flex");

  return (
    <section className={classes}>
      <div className="flex flex-col justify-center">
        <Icon className="h-6 w-6 p-3 box-content border rounded-[0.625rem]" />
        <h2 className="text-3xl font-semibold mt-6">{title}</h2>
        <p className="text-lg text-muted-foreground mt-4">{description}</p>
        <div className="mt-8 grid grid-cols-2 w-fit gap-x-3">
          <Link className={buttonVariants({ variant: "outline", size: "lg" })} href={secondaryButtonLink}>
            <SecondaryButtonIcon className="w-4 h-4 mr-2" />
            {secondaryButtonName}
          </Link>
          <Link className={buttonVariants({ variant: "default", size: "lg" })} href={primaryButtonLink}>
            {primaryButtonName}
          </Link>
        </div>
      </div>
      <div className={cn("min-w-[35rem] relative w-full h-[25rem]", positionLeft ? "mr-24" : "ml-24")}>
        <Image src={image} fill alt="" className="object-cover rounded-3xl" />
      </div>
    </section>
  );
};

export default FeatureSection;
