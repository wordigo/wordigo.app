import { CheckCircle2 } from "lucide-react";

import { Badge, Button } from "@wordigo/ui";

import Prices, { type Price } from "./pricing.constant";

const Pricing = () => {
  return (
    <section id="pricing" className="px-20 py-24 flex flex-col items-center">
      <h2 className="text-5xl font-semibold text-center">We love keeping things simple</h2>
      <p className="text-xl mt-6 text-muted-foreground text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, itaque consequuntur ut ea placeat maiores.
      </p>
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
  return (
    <div className={`p-8 rounded-2xl border flex flex-col items-center ${popular && "border-foreground"}`}>
      <Icon className="w-5 h-5 box-content p-2.5 border rounded-[0.625rem]" />
      <h3 className="text-xl font-semibold mt-5">{planName}</h3>
      {popular && (
        <Badge className="text-sm font-medium px-2.5 mt-4 py-1" variant="outline">
          Most Popular
        </Badge>
      )}
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
      <Button type="button" className="w-full mt-auto">
        Get Started
      </Button>
    </div>
  );
};

export default Pricing;
