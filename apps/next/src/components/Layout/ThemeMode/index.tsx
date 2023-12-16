import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeMode({
  className,
  showLabel = true,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const currentTheme = resolvedTheme ?? "light";

  const getThemeLabel = () => {
    switch (currentTheme) {
      case "dark":
        return <p className="text-[12px]">Dark</p>;
      case "light":
        return <p className="text-[12px]">Light</p>;
      case "system":
        return <p className="text-[12px]">System</p>;
      default:
        return <p className="text-[12px]">Toggle theme</p>;
    }
  };

  const getThemeIcon = () => {
    switch (currentTheme) {
      case "dark":
        return <MoonIcon size={14} />;
      case "light":
        return <SunIcon size={14} />;
      case "system":
        return <LaptopIcon size={14} />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-fit px-2 !h-7 bg-transparent", className)}
        >
          <span className={cn("text-xs", showLabel ? "mr-1" : "")}>
            {getThemeIcon()}
          </span>
          {showLabel && (
            <span className="rotate-0  scale-100 transition-all">
              {getThemeLabel()}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="min-w-fit text-[12px]">
        <DropdownMenuItem
          className="text-[12px]"
          onClick={(e) => {
            e.stopPropagation();
            setTheme("light");
          }}
        >
          <SunIcon className="mr-2 h-3 w-3" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-[12px]"
          onClick={(e) => {
            e.stopPropagation();
            setTheme("dark");
          }}
        >
          <MoonIcon className="mr-2 h-3 w-3" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-[12px]"
          onClick={(e) => {
            e.stopPropagation();
            setTheme("system");
          }}
        >
          <LaptopIcon className="mr-2 h-3 w-3" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
