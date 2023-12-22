import featuresConstants, { type IFeature } from "./features.constants";
import { Badge, buttonVariants } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const FeatureSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="features"
      className="flex flex-col gap-y-12 sm:gap-y-14 md:gap-y-16 lg:gap-y-20"
    >
      <div className="max-w-sm sm:max-w-xl md:max-w-2xl mx-auto flex flex-col items-center gap-y-6 text-center">
        <Badge
          className="text-sm font-medium px-2.5 py-1 w-fit"
          variant="outline"
        >
          {t("features.badge")}
        </Badge>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
          {t("features.heading")}
        </h2>
        <p className="sm:text-lg lg:text-xl text-muted-foreground">
          {t("features.description")}
        </p>
      </div>

      <div className="flex flex-col gap-y-12 sm:gap-y-14">
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
  const classes = cn(
    "w-full flex flex-col lg:flex-row items-center gap-x-4 gap-y-6 sm:gap-y-7 md:gap-y-8",
    positionLeft ? "lg:flex-row-reverse" : ""
  );

  return (
    <section className={`${classes} `}>
      <div className="flex flex-col justify-center gap-y-6 sm:gap-y-7 md:gap-y-8">
        <div className="flex lg:flex-col items-center lg:items-start gap-6 sm:gap-7 md:gap-8">
          <Icon className="h-6 w-6 p-3 box-content border rounded-[0.625rem]" />
          <h2 className="text-3xl font-semibold max-lg:text-2xl">{title}</h2>
        </div>
        <p className="text-lg text-muted-foreground max-lg:text-base">
          {description}
        </p>
        <div className="grid grid-cols-2 w-fit gap-x-3">
          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href={secondaryButtonLink}
          >
            <SecondaryButtonIcon className="w-4 h-4 mr-2" />
            {secondaryButtonName}
          </Link>
          <Link
            className={buttonVariants({ variant: "default", size: "lg" })}
            href={primaryButtonLink}
          >
            {primaryButtonName}
          </Link>
        </div>
      </div>

      <div
        className={cn(
          "relative h-60 sm:h-80 md:h-96 lg:h-[402px] xl:h-[420px] w-80 sm:w-96 md:w-[456px] lg:min-w-[456px] xl:min-w-[35rem]",
          positionLeft ? "xl:mr-24 max-xl:mr-0" : "xl:ml-24 max-xl:ml-0"
        )}
      >
        <Image src={image} fill alt="" className="object-cover rounded-3xl" />
      </div>
    </section>
  );
};

export default FeatureSection;
