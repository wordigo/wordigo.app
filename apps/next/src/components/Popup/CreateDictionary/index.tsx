import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo/Logo";
import { api } from "@/libs/trpc";
import { HelpCircle } from "lucide-react";

import { Button, Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, Input, Label, Switch } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";

export function CreateDictionary({ label }: { label: string }) {
  const [publics, setPublic] = useState(false);
  const [name, setName] = useState("");

  const router = useRouter();

  const addQuery = api.dictionary.addDictionary.useMutation();
  const handleAddDictionary = () => {
    addQuery.mutate({
      title: name,
      published: publics,
    });
    setName("");
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div
          className={cn(
            "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-accent",
            label === "Add Dictionary" && "dark:bg-white dark:text-black dark:hover:bg-white font-semibold bg-accent hover:bg-accent",
          )}
        >
          {label}
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Dictionary</DialogTitle>
          <span className="flex flex-col items-center justify-center">
            <Logo component="AddComponent" className="w-[55px] h-[55px] mt-[15px]" />
          </span>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder="Dictionary Name"
              className="col-span-3"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Published
            </Label>
            <div className="flex items-center">
              <Switch id="airplane-mode" onClick={() => setPublic(!publics)} />
              <Dialog>
                <DialogTrigger asChild>
                  <button className="ml-4">
                    <HelpCircle />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-[#FFF9EC] text-[#F2A11A]">
                  It is the feature that allows you to share your dictionary publicly. It is only valid for the dictionary you have activated.
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddDictionary}>
            Save Dictionary
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
