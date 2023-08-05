import { LaptopIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@wordigo/ui";

export default function ThemeMode() {
  const { setTheme, resolvedTheme } = useTheme();

  const getThemeLabel = () => {
    switch (resolvedTheme) {
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
    switch (resolvedTheme) {
      case "dark":
        return <MoonIcon className="h-3 w-3" />;
      case "light":
        return <SunIcon className="h-3 w-3" />;
      case "system":
        return <LaptopIcon className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-fit w-fit px-3 py-1">
          <span className="mr-2 text-xs">{getThemeIcon()}</span>
          <span className="rotate-0  scale-100 transition-all">{getThemeLabel()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="max-w-[25px] min-w-fit text-[12px]">
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
