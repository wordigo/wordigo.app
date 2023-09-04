import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Star } from "lucide-react";
import InfiniteScroll from "react-infinite-scroll-component";
import { type IPublished } from "./published.constants";
import Link from "next/link";

export default function Published({ items }: { items: IPublished[] }) {
  const router = useRouter();
  const [data, setData] = useState<any>(items);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchMoreData = () => {
    const newData = [...data, ...items];
    if (newData.length >= 2) {
      setHasMore(false);
    }
    setData(newData);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        className="grid grid-cols-3 gap-x-8 gap-y-16 mt-24 max-xl:mt-10 w-full max-xl:justify-center max-xl:flex max-xl:flex-wrap max-xl:px-2 max-xl:grid-cols-2"
      >
        {data.map((item: IPublished) => (
          <Link href={`/library/${item.id}`} key={item.id} className="max-md:min-w-[325px] max-md:max-w-[405px] max-w-[405px]">
            {item.user.name && (
              <div className="flex w-full flex-col justify-between h-full">
                <div>
                  {!item.src ? (
                    <div className="w-full h-60 relative">
                      <Image alt="" src="/images/dictionary_banner.jpg" fill className="rounded-2xl"></Image>
                    </div>
                  ) : (
                    <div className="w-[300px] h-[180px] bg-gray-500 rounded-xl"></div>
                  )}
                  <span className="py-1 inline-flex items-center pl-1 pr-2.5 rounded-[0.625rem] text-xs mt-6 font-medium border">
                    <span className="px-1.5 inline-flex items-center py-0.5 rounded-md border mr-2">
                      <Star fill="currentColor" className="h-3 w-3 mr-1" />
                      {item.rating}
                    </span>
                    {item.words_length} Words
                  </span>
                  <h3 className="text-2xl font-semibold mt-4">{item.title}</h3>
                  <h4 className="text-base text-muted-foreground mt-2">{item.description}</h4>
                </div>
                {item.user.name && item.user.profil_avatar && (
                  <span className="flex items-center mt-6">
                    <div className="relative h-10 w-10 mr-3">
                      <Image src={item.user.profil_avatar} alt="" fill className="rounded-full"></Image>
                    </div>
                    <span className="text-sm font-semibold">{item.user.name}</span>
                  </span>
                )}
              </div>
            )}
          </Link>
        ))}
      </InfiniteScroll>
    </>
  );
}
