import { type IBlog } from "@/utils/blog";
import { Badge } from "@wordigo/ui";
import Image from "next/image";

export default function BlogCard({
  title,
  date,
  author,
  avatar,
  description,
  thumbnail,
}: IBlog) {
  return (
    <div>
      <div className="text-slate-800 dark:text-slate-200 ">
        <div className="flex flex-col gap-2 px-4 pt-2 pb-5 bg-white dark:bg-DarkBackground border cursor-pointer hover:bg-slate-100 rounded-xl">
          <div className="pt-2 pb-2">
            <div className="bg-black h-64 rounded-xl">
              {thumbnail && (
                <Image
                  src={`/images/blogs/${thumbnail}`}
                  className="h-full w-full rounded-xl"
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </div>
          <div className="flex gap-1">
            {["#javascript", "#react", "#nextjs"].map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="font-bold text-xl">{title}</div>
          <div className="text-gray-700 dark:text-gray-400 h-10 overflow-hidden text-ellipsis leading-relaxed">
            {description}
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black w-10 h-10 rounded-full">
              {avatar && (
                <Image
                  className="h-full rounded-full border-none w-full"
                  alt=""
                  width={40}
                  height={40}
                  src={avatar}
                />
              )}
            </div>
            <div>
              <div>{author}</div>
              <div className="text-sm">{date} · 5m read</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
