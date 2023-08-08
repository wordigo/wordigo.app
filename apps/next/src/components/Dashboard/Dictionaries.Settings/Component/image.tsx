import React, { useState } from "react";

import { Label, toast } from "@wordigo/ui";

import { Images } from "../settings.constant";

export default function ImageComponent({...field}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const img = new Image();
          img.src = reader?.result as string;
          img.onload = () => {
            if (img.width === 675 && img.height === 480) {
              setSelectedImage(img.src);
            } else {
              toast({
                title: "Error",
                description: "Please select an image with dimensions of 675x480 pixels.",
              });
            }
          };
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Error",
          description: "Please select an image file (JPEG, PNG, or GIF).",
        });
      }
    } else {
      setSelectedImage(null)
    }
  };

  const backgroundImageStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
  };

  return (
    <main className="grid grid-cols-3 gap-4 my-5 w-full">
      <Label className="max-w-[280px] min-w-[280px] mr-8">{Images.label}</Label>
      <label htmlFor="imageUpload" className="cursor-pointer max-w-[280px] min-w-[280px] mr-8">
        <div
          className="flex flex-col items-center justify-center py-4 px-6 border rounded-md border-gray-300 dark:border-gray-800 w-[512px] h-[364.09px]"
          style={backgroundImageStyle}
        >
          <section className="border border-[#EAECF0] dark:bg-[#0208174c] bg-[#ffffff4c] rounded-md w-fit p-[10px] mb-3">
            <Images.Icon className="text-black dark:text-white" />
            <input {...field} type="file" id="imageUpload" accept="image/jpeg, image/png, image/gif" onChange={handleImageChange} className="sr-only" />
          </section>
          <div className="image-component font-semibold dark:bg-[#0208174c] bg-[#ffffff4c] px-2 py-1 rounded-md">
            <h1>
              <span>{Images.color_title}</span> {Images.title}
            </h1>
            <h1>{Images.description}</h1>
          </div>
        </div>
      </label>
    </main>
  );
}
