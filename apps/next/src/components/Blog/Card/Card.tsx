import { type BlogCardProperties } from "./Card.constant";

export default function BlogCard({
  blogType,
  title,
  info,
  userName,
  date,
  readTime,
}: BlogCardProperties) {
  return (
    <div>
      <div className=" rounded-2xl text-[#101828]">
        <div className="flex flex-col gap-2 p-3 bg-white border cursor-pointer hover:bg-slate-100 rounded">
          <div className="pt-2 pb-2">
            <div className="bg-black h-[290px] rounded-lg"></div>
          </div>
          {blogType && (
            <span className="py-1 w-fit flex items-center px-2 rounded-[0.625rem] text-xs font-medium border justify-center">
              {blogType}
            </span>
          )}
          <div className="font-bold text-xl">{title}</div>
          <div className="text-gray-700">{info}</div>
          <div className="flex items-center gap-3 pt-2">
            <div className="bg-black w-[40px] h-[40px] rounded-full"></div>
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
