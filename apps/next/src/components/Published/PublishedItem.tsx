import DateTooltip from "../UI/DateToolitp";
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
      className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-18.5px)] max-w-sm sm:max-w-none group"
    >
      <div className="w-full h-full">
        <div className="h-full flex flex-col rounded-lg border group-hover:border-gray-300/95 dark:group-hover:border-[#2e3d56] transition-colors">
          <div className="relative h-60">
            <Image
              alt={item.title}
              src={item.image || "/images/dictionary_banner.jpg"}
              className="object-cover rounded-t-lg"
              placeholder="blur"
              blurDataURL={item.image || "/images/dictionary_banner.jpg"}
              fill
            />
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 justify-between grow p-4">
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="py-1 w-fit flex items-center pl-1 pr-2.5 rounded-[0.625rem] text-xs font-medium border">
                <span className="px-1.5 inline-flex items-center py-0.5 rounded-md border mr-2">
                  <Star fill="currentColor" className="h-3 w-3 mr-1" />
                  {item.rate}
                </span>
                {roundToFiveOrTen(item.numberOfWords)}+ {t("general.words")}
              </div>

              <div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <h4 className="text-base text-muted-foreground mt-3 text-ellipsis line-clamp-2">
                  {item.description}
                </h4>
              </div>
            </div>

            <span className="flex items-center">
              <Avatar className="relative w-8 md:w-10 h-8 md:h-10">
                <AvatarImage
                  className="w-full h-full"
                  src={item.author.avatar_url}
                  alt={"@" + item.author.name}
                />
                <AvatarFallback>{computedName}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center ml-3 text-sm">
                <span className="font-semibold">{item.author.name}</span>
                <DateTooltip
                  date={item.createdDate}
                  mode="absolute"
                  className="text-muted-foreground text-xs"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PublishedItem;
