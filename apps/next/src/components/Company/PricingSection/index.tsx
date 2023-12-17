import prices, { type Price } from "./pricing.constant";
import { Badge, Button } from "@wordigo/ui";
import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "next-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

const Pricing = () => {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      className="px-20 py-24 flex flex-col items-center max-lg:py-16 max-md:px-4"
    >
      <h2 className="text-5xl font-semibold text-center max-lg:text-4xl">
        {t("pricing.heading")}
      </h2>
      <p className="text-xl mt-6 text-muted-foreground max-lg:mt-5">
        {t("pricing.description")}
      </p>
      <Swiper
        className="mt-20 w-full"
        wrapperClass="w-full mt-4"
        spaceBetween={32}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
        }}
        initialSlide={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
      >
        {prices.map((price, index) => (
          <SwiperSlide key={index}>
            <Pricing.Card key={index} {...price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

Pricing.Card = ({
  Icon,
  planName,
  popular,
  price,
  priceDescription,
  features,
}: Price) => {
  const { t } = useTranslation();

  return (
    <div
      className={`p-8 pt-12 rounded-2xl border flex flex-col items-center relative h-fit ${
        popular && "border-foreground"
      }`}
    >
      {popular && (
        <Badge
          className="text-sm bg-foreground text-primary-foreground font-medium px-2.5 py-1 top-[-0.9375rem] absolute"
          variant="outline"
        >
          {t("pricing.popular_badge")}
        </Badge>
      )}
      <Icon className="w-5 h-5 box-content p-2.5 border rounded-[0.625rem]" />
      <h3 className="text-xl font-semibold mt-5">{planName}</h3>
      <span className="text-5xl font-semibold mt-4">{price}</span>
      <p className=" text-base text-muted-foreground mt-2">
        {priceDescription}
      </p>
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
