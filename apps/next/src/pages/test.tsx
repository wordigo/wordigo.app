import { ChevronDown, Copy, Settings, Volume2 } from "lucide-react";

import { AllCountryLanguages } from "@wordigo/common";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ScrollArea,
  Separator,
} from "@wordigo/ui";
import LanguageSelector from "@wordigo/ui/components/ui/language-selector";

export default function test() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Card tabIndex={1} className="flex-col flex w-[600px] h-60">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-2">
          <div className="flex flex-row gap-x-1">
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Volume2 size={18} />
            </Button>
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Copy size={18} />
            </Button>
            <Button className="h-9 w-9" variant="outline" size="icon">
              <Settings size={18} />
            </Button>
          </div>
          <CardTitle className="!text-lg">Wordigo</CardTitle>
          <div className="flex gap-x-2">
            <LanguageSelector defaultValue={"tr"} onSelect={() => {}} className="w-[150px] !h-9" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild={true}>
                <Button variant="outline" size="default" className="rounded-md !h-9 !w-26 flex justify-between items-center gap-x-2">
                  Turkish
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent id="el-language-container">
                <ScrollArea className="w-full h-60 rounded-md">
                  {AllCountryLanguages.map((lang) => {
                    return <DropdownMenuItem key={lang[0]}>{lang[1]}</DropdownMenuItem>;
                  })}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <Separator />
      </Card>
    </div>
  );
}
