import { type BlogCardProperties } from "./Card.constant";

export default function BlogCard({
  thumbnail,
  blogType,
  title,
  info,
  userName,
  date,
  readTime,
  profilePicture,
}: BlogCardProperties) {
  return (
    <div>
      <div className="  text-slate-800">
        <div className="flex flex-col gap-2 px-4 pt-2 pb-5 bg-white border cursor-pointer hover:bg-slate-100 rounded-xl">
          <div className="pt-2 pb-2">
            <div className="bg-black h-64 rounded-xl">
              {thumbnail && (
                <img className="h-full w-full rounded-xl" src={thumbnail} />
              )}
            </div>
          </div>
          {blogType && (
            <span className="py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center">
              {blogType}
            </span>
          )}
          <div className="font-bold text-xl">{title}</div>
          <div className="text-gray-700 h-20 overflow-hidden text-ellipsis  ">
            {info}
          </div>
          <div className="flex items-center gap-3 pt-2">
            <div className="bg-black w-[40px] h-[40px] rounded-full">
              {profilePicture && (
                <img
                  className="h-full rounded-full border-none w-full"
                  src={profilePicture}
                />
              )}
            </div>
            <div>
              <div>{userName}</div>
              <div className="text-sm">
                {date} · {readTime} read
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
