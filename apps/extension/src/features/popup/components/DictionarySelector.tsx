import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Skeleton,
} from "@wordigo/ui";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import trpc from "~libs/trpc";

const DictionarySelector = () => {
  const { mutate, data, isLoading } =
    trpc.dictionary.getUserDictionariesMutation.useMutation();
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => {
    const targetValue = !showMenu;

    if (targetValue) {
      mutate();
    }

    setShowMenu(!showMenu);
  };

  const handleAddLibrary = () => {};

  return (
    <DropdownMenu open={showMenu} onOpenChange={handleOpenMenu}>
      <DropdownMenuTrigger asChild className="w-[180px]">
        <Button
          variant="outline"
          size="default"
          className="rounded-md !h-9 !w-26 !px-3 flex justify-between items-center gap-x-2"
        >
          Dictionary
          <ChevronDown size={14} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[180px]" id="el-popup-container">
        {isLoading ? (
          <DictionarySelector.Loader />
        ) : (
          data?.data?.map((item) => (
            <DropdownMenuItem key={item.id}>{item.title}</DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

DictionarySelector.Loader = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
      <Skeleton className="h-5 w-full rounded" />
    </div>
  );
};

export default DictionarySelector;
