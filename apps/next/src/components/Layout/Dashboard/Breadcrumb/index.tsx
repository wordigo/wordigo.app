import { cn } from "@wordigo/ui/lib/utils";
import { ChevronRight, HomeIcon } from "lucide-react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

interface BreadcrumbItemProps {
  href: string;
  name?: string;
  initial?: boolean;
  active: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({ href, name, initial, active }) => {
  const { t } = useTranslation();
  const hasInitial = initial || !name;

  const classes = cn(
    "ml-1 text-sm hover:text-gray-600 font-medium truncate whitespace-nowrap",
    active ? "text-gray-700 hover:text-gray-600" : "text-gray-500",
    hasInitial && "md:ml-2 dark:text-gray-400 dark:hover:text-white",
    !hasInitial && "md:ml-2 dark:text-gray-400"
  );

  return (
    <li className="inline-flex items-center">
      <div className="inline-flex items-center text-sm font-medium hover:text-gray-400 dark:text-gray-400 dark:hover:text-white">
        {hasInitial ? <HomeIcon size={16} /> : <ChevronRight size={16} />}

        {!hasInitial && (
          <Link href={href}>
            <span className={classes}>{t(`breadcrumbs.${name || "dashboad"}`, { defaultValue: name })}</span>
          </Link>
        )}
        {hasInitial && active && <span className={classes}>{t(`breadcrumbs.${name}`)}</span>}
      </div>
    </li>
  );
};

const Breadcrumb: React.FC = () => {
  const router = useRouter();
  const fullPath = router.asPath;
  const pathParts = fullPath.split("/");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {pathParts.map((part, index) => (
          <BreadcrumbItem key={index} href={`/${pathParts.slice(1, index + 1).join("/")}`} name={part} initial={index === 0} active={index === pathParts.length - 1} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
