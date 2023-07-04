import React from "react";
import Image from "next/image";



import { Button } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";





export default function Steps_Card({
  buttons_left,
  buttons_right,
  title_1,
  text_1,
  title_2,
  text_2,
  images,
  classNames,
  classImage,
  text_Class,
  buttonClass,
  button_text,
}: {
  buttons_right?: boolean;
  buttons_left?: boolean;
  title_1?: string;
  text_1?: string;
  title_2?: string;
  text_2?: string;
  images: string;
  classNames?: string;
  classImage?: string;
  text_Class?: string;
  buttonClass?: string;
  button_text?: string;
}) {
  return (
    <div className={cn(classNames)}>
      <div className="flex flex-col gap-5">
        <div className={cn(text_Class)}>
          <h1 className="font-semibold text-[30px]">{title_1}</h1>
          <p>{text_1}</p>
        </div>

        {buttons_left && (
          <Button variant="default" size="sm" className={cn(buttonClass)}>
            {button_text}
          </Button>
        )}
      </div>

      <div>
        <Image className={cn("w-[500px] h-[250px] bg-gray-500 rounded-xl", classImage)} alt="steps" src={images} width={250} height={100}></Image>
      </div>

      <div className="flex flex-col gap-5">
        <div className={cn(text_Class)}>
          <h1 className="font-semibold text-[30px]">{title_2}</h1>
          <p>{text_2}</p>
        </div>

        {buttons_right && (
          <Button variant="default" size="sm" className={cn(buttonClass)}>
            {button_text}
          </Button>
        )}
      </div>
    </div>
  );
}