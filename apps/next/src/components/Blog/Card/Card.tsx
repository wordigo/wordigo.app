import { type IBlog } from "@/utils/blog";
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
    <div className="group sm:flex rounded-xl dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[200px] sm:w-[250px] sm:h-[350px]">
        <Image
          src={`/images/blogs/${thumbnail}`}
          className="absolute top-0 start-0 object-cover hover:scale-105 transition-all duration-500 ease-in-out"
          alt="Picture of the author"
          fill
        />
      </div>

      <div className="grow">
        <div className="p-4 flex flex-col h-full sm:p-6">
          <div className="mb-3">
            <p className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200">
              Business
            </p>
          </div>
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>

          <div className="mt-5 sm:mt-auto">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-[2.875rem] w-[2.875rem] rounded-full"
                  src={avatar}
                  alt="Image Description"
                />
              </div>
              <div className="ms-2.5 sm:ms-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                  {author}
                </h4>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
