import CommentConstant, { type IComment } from "./comments.constant";
import { Star } from "lucide-react";
import Image from "next/image";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Comments = () => {
  return (
    <Swiper
      className="w-full h-[500px]"
      grid={{ rows: 1, fill: "row" }}
      spaceBetween={32}
      autoplay={{ delay: 3000 }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 32,
        },
      }}
      modules={[Grid, Pagination]}
    >
      {CommentConstant.map((item) => (
        <SwiperSlide className="h-full" key={item.title}>
          <Comments.Item {...item} key={item.title} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

Comments.Item = ({
  description,
  name,
  image,
  title,
  userDescription,
}: IComment) => {
  return (
    <div className="border p-8 rounded-2xl w-full flex flex-col justify-between h-[450px]">
      <div className="flex flex-col">
        <div className="grid grid-flow-col gap-x-1 w-fit">
          {[1, 2, 3, 4, 5].map((index) => (
            <Star className="h-4 w-4" fill="currentColor" key={index} />
          ))}
        </div>
        <span className="text-xl font-semibold mt-4">{title}</span>
        <span className="text-base  mt-4 text-muted-foreground w-full line-clamp-6 md:line-clamp-7">
          {description}
        </span>
      </div>
      <div className="mt-6 flex items-center">
        <div className="min-w-[3.5rem] min-h-[3.5rem] relative mr-4">
          <Image
            className="rounded-full grayscale hover:grayscale-0"
            fill
            alt={name}
            src={image}
          ></Image>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-xs md:text-sm text-muted-foreground overflow-hidden line-clamp-1">
            {userDescription}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
