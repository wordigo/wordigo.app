import BreadCrumbArrowSvg from "../../../../public/images/blogs/breadCrumbArrow.svg";
import HomeSvg from "../../../../public/images/blogs/home.svg";
import Link from "next/link";

export default function Breadcrumb({ data }) {
  return (
    <nav
      className="flex px-0 py-3 text-gray-700  items-center"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <HomeSvg className="w-3 mr-2 ml-4" />
            Home
          </a>
        </li>
        {data &&
          data.map(({ id, text, link }) => {
            return (
              <Link className="overflow-hidden" key={id} href={link}>
                <div className="flex items-center overflow-hidden">
                  <BreadCrumbArrowSvg className="w-2 md:mr-4 md:ml-4 mr-2 ml-2 text-gray-400" />
                  <div className="ms-1 text-sm font-medium text-gray-700 hover:text-black md:ms-2 dark:text-gray-400 dark:hover:text-white whitespace-nowrap ">
                    {text}
                  </div>
                </div>
              </Link>
            );
          })}
      </ol>{" "}
      <BreadCrumbArrowSvg className="w-2 ml-4 mr-4 text-gray-400" />
    </nav>
  );
}
