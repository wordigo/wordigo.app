import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "next-i18next";

import { Badge, Button } from "@wordigo/ui";

import Prices, { type Price } from "./pricing.constant";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="px-20 py-24 flex flex-col items-center">
      <h2 className="text-5xl font-semibold text-center">{t("pricing.heading")}</h2>
      <p className="text-xl mt-6 text-muted-foreground text-center">{t("pricing.description")}</p>
      <div className="mt-24 grid grid-cols-3 gap-x-8 w-full">
        {Prices.map(({ Icon, planName, popular, price, priceDescription, features }, index) => (
          <Pricing.Card
            key={index}
            Icon={Icon}
            planName={planName}
            popular={popular}
            price={price}
            priceDescription={priceDescription}
            features={features}
          />
        ))}
      </div>
    </section>
  );
};

Pricing.Card = ({ Icon, planName, popular, price, priceDescription, features }: Price) => {
  const { t } = useTranslation();

  return (
    <div className={`p-8 pt-12 rounded-2xl border flex flex-col items-center relative ${popular && "border-foreground"}`}>
      {popular && (
        <Badge className="text-sm bg-foreground text-primary-foreground font-medium px-2.5 py-1 top-[-0.9375rem] absolute" variant="outline">
          {t("pricing.popular_badge")}
        </Badge>
      )}
      <Icon className="w-5 h-5 box-content p-2.5 border rounded-[0.625rem]" />
      <h3 className="text-xl font-semibold mt-5">{planName}</h3>
      <span className="text-5xl font-semibold mt-4">{price}</span>
      <p className=" text-base text-muted-foreground mt-2">{priceDescription}</p>
      <div className="mt-8 grid gap-y-4 mr-auto mb-10">
        {features.map((item, index) => {
          return (
            <span key={index} className="flex items-center">
              <CheckCircle2 className="w-6 h-6 mr-3" />
              <span className="text-base text-muted-foreground">{item}</span>
            </span>
          );
        })}
      </div>
      <div className="mt-auto w-full">
        <Button type="button" className="w-full">
          {t("pricing.get_started")}
        </Button>
        <Button variant="outline" type="button" className="w-full mt-3">
          {t("pricing.learn_more")}
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
