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
      className="flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10"
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

      <div className="flex flex-col gap-y-8 sm:gap-y-9 md:gap-y-10 lg:gap-y-11 xl:gap-y-12">
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
    "w-full max-xl:flex-col max-xl:items-center max-xl:justify-center",
    positionLeft ? "flex xl:flex-row-reverse" : "flex"
  );

  return (
    <section className={`${classes} `}>
      <div className="flex flex-col justify-center">
        <Icon className="h-6 w-6 p-3 box-content border rounded-[0.625rem]" />
        <h2 className="text-3xl font-semibold mt-6 max-lg:text-2xl">{title}</h2>
        <p className="text-lg text-muted-foreground mt-4 max-lg:text-base">
          {description}
        </p>
        <div className="mt-8 grid grid-cols-2 w-fit gap-x-3">
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
          "lg:min-w-[35rem] h-[25rem] lg:w-[40rem] lg:h-[28rem] md:w-[30rem] md:h-[24rem] max-md:w-[340px] max-md:h-[240px] relative",
          positionLeft ? "xl:mr-24 max-xl:mr-0" : "xl:ml-24 max-xl:ml-0"
        )}
      >
        <Image src={image} fill alt="" className="object-cover rounded-3xl" />
      </div>
    </section>
  );
};

export default FeatureSection;
