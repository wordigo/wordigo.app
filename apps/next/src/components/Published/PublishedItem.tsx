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
      href={`/library/${item.slug}`}
      key={item.id}
      className="max-md:min-w-[325px] max-md:max-w-[405px] max-w-[405px]"
    >
      <div className="flex w-full flex-col justify-between h-full">
        <div>
          <div className="w-full h-60 relative">
            <Image
              alt=""
              src={item.image || "/images/dictionary_banner.jpg"}
              fill
              className="rounded-2xl"
            />
          </div>
          <span className="py-1 inline-flex items-center pl-1 pr-2.5 rounded-[0.625rem] text-xs mt-6 font-medium border">
            <span className="px-1.5 inline-flex items-center py-0.5 rounded-md border mr-2">
              <Star fill="currentColor" className="h-3 w-3 mr-1" />
              {item.rate}
            </span>
            {item.numberOfWords} {t("general.words")}
          </span>
          <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
          <h4 className="text-base text-muted-foreground mt-2">
            {item.description}
          </h4>
        </div>
        <span className="flex items-center mt-6">
          <Avatar className="relative h-10 w-10 mr-3 md:h-12 md:w-12">
            <AvatarImage
              className="w-10 h-10 md:h-12 md:w-12"
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
