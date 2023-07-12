import { HelpCircle } from "lucide-react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Switch,
} from "@wordigo/ui";

import Logo from "../../../Logo/Logo";

export function CreateDictionary() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Dictionary</Button>
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
            <Input id="name" value="" placeholder="Dictionary Name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Published
            </Label>
            <div className="flex items-center">
              <Switch id="airplane-mode" />
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
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
