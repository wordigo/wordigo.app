import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import InfiniteScroll from "react-infinite-scroll-component";

import Rating from "./Rating";
import { type IPublished } from "./published.constan";

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
      <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} loader={<h4>Loading...</h4>} className="flex gap-2 flex-wrap">
        {data.map((item: IPublished) => (
          <div key={item.id} onClick={() => router.push(`/dictionaries/${item.id}`)}>
            {item.user.name && (
              <div className="flex flex-col gap-2 max-w-[318px] h-fit px-2 py-2 rounded-xl dark:bg-[#141420] bg-[#F3F4FE] border-[#e9eafe]  text-light_text border dark:text-white dark:border-[rgb(33,32,44)] shadow-md dark:shadow-black">
                {!item.src ? (
                  <Image alt="" src="/images/dictionary_banner.jpg" width={300} height={180} className="rounded-xl w-[300px] h-[180px]"></Image>
                ) : (
                  <div className="w-[300px] h-[180px] bg-gray-500 rounded-xl"></div>
                )}
                <span className="flex flex-col">
                  <div className="font-semibold">{item.title}</div>
                  <h1 className="opacity-60 text-sm">{item.description}</h1>
                </span>
                <span className="flex items-center justify-between">
                  <div>
                    <Rating rating={item.rating} />
                  </div>
                  <span className="flex items-center gap-3">
                    {item.user.profil_avatar ? (
                      <Image alt="" src={""} width={30} height={30} className="rounded-full"></Image>
                    ) : (
                      <div className="w-[30px] h-[30px] bg-gray-500 rounded-full"></div>
                    )}
                    <div>{item.user.name}</div>
                  </span>
                </span>
              </div>
            )}
          </div>
        ))}
      </InfiniteScroll>
    </>
  );
}
