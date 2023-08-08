import React from "react";

import { Button, DropdownMenuSeparator } from "@wordigo/ui";

import Description from "./Component/description";
import Images from "./Component/image";
import Link from "./Component/link";
import Title from "./Component/title";
import { SettingsData } from "./settings.constant";

export default function index() {
  const handleSave = () => {
    console.log("aynen");
  };

  return (
    <main>
      <section className="mb-7 flex items-center justify-between">
        <span>
          <h1 className="text-lg font-semibold leading-7">{SettingsData.page_title}</h1>
          <h1 className="text-sm text-[hsl(var(--muted-foreground))] font-semibold leading-7">{SettingsData.page_description}</h1>
        </span>
        <span >
          <Button onClick={handleSave} variant="outline" className="font-semibold text-sm mr-1">
            Cancle
          </Button>
          <Button onClick={handleSave} variant="default" className="font-semibold text-sm">
            Save
          </Button>
        </span>
      </section>
      <section className="w-full">
        <DropdownMenuSeparator />
        <Link />
        <DropdownMenuSeparator />
        <Title />
        <DropdownMenuSeparator />
        <Description />
        <DropdownMenuSeparator />
        <Images />
      </section>
    </main>
  );
}
