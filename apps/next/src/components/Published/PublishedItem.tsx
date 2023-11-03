import { roundToFiveOrTen } from "@/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@wordigo/ui";
import { Star } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { type IDictionary } from "types/global";

const PublishedItem = (item: IDictionary) => {
  const { t } = useTranslation();
  const splittedText = item?.author?.name?.toUpperCase()?.split(" ");
  const computedName =
    (splittedText?.[0]?.[0] || "") + (splittedText?.[1]?.[0] || "");

  return (
    <Link
      href={{
        pathname: "/library/[slug]",
        query: { slug: item.slug },
      }}
      as={`/library/${item.slug}`}
      key={item.id}
      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-18.5px)] max-w-sm sm:max-w-none"
    >
      <div className="w-full h-full flex flex-col gap-3 sm:gap-4 md:gap-5 justify-between rounded-2xl">
        <div className="relative h-60">
          <Image
            alt={item.title}
            src={item.image || "/images/dictionary_banner.jpg"}
            className="object-cover rounded-lg"
            placeholder="blur"
            blurDataURL={item.image || "/images/dictionary_banner.jpg"}
            fill
          />
        </div>

        <div className="py-1 w-fit flex items-center pl-1 pr-2.5 rounded-[0.625rem] text-xs font-medium border">
          <span className="px-1.5 inline-flex items-center py-0.5 rounded-md border mr-2">
            <Star fill="currentColor" className="h-3 w-3 mr-1" />
            {item.rate}
          </span>
          {roundToFiveOrTen(item.numberOfWords)}+ {t("general.words")}
        </div>

        <div>
          <h3 className="text-2xl font-semibold">{item.title}</h3>
          <h4 className="text-base text-muted-foreground mt-2">
            {item.description}
          </h4>
        </div>

        <span className="flex items-center">
          <Avatar className="relative mr-3 h-10 md:h-12 w-10 md:w-12">
            <AvatarImage
              className="w-10 md:w-12 h-10 md:h-12"
              src={item.author.avatar_url}
              alt={"@" + item.author.name}
            />
            <AvatarFallback>{computedName}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-semibold">{item.author.name}</span>
        </span>
      </div>
    </Link>
  );
};

export default PublishedItem;
