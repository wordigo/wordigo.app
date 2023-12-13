import { Images } from "../settings.constant";
import { Label, toast } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import React, { Fragment, useState } from "react";

export default function ImageComponent({ ...field }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();
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
            console.log(reader.result);

            // if (img.width === 675 && img.height === 480) {
            setSelectedImage(img.src);

            // } else {
            //   toast({
            //     title: "Error",
            //     description: "Please select an image with dimensions of 675x480 pixels.",
            //   });
            // }
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
      setSelectedImage(null);
    }
  };

  const backgroundImageStyle = {
    backgroundImage: selectedImage ? `url(${selectedImage})` : "none",
  };

  return (
    <main className="grid grid-cols-3 w-full">
      <span className="max-w-[280px] min-w-[280px] mr-8 word-break">
        <Label>
          <h1>{t("image")}</h1>
        </Label>
        <p className="text-[hsl(var(--muted-foreground))] text-sm">
          {t("dictionaries_settings.images.image_notes")}
        </p>
      </span>
      <label
        htmlFor="imageUpload"
        className="cursor-pointer mr-8 p-[0.5px] border rounded-md border-dashed border-gray-300 dark:border-gray-800 w-[512px] h-[364.09px]"
      >
        <div
          className="flex flex-col items-center justify-center rounded-md py-4 w-full h-full px-6 bg-no-repeat object-cover bg-cover bg-center"
          style={backgroundImageStyle}
        >
          <input
            {...field}
            type="file"
            id="imageUpload"
            accept="image/jpeg, image/png, image/gif"
            onChange={handleImageChange}
            className="sr-only"
          />
          {!selectedImage && (
            <Fragment>
              <section className="border border-gray-300 dark:border-gray-800 dark:bg-[#0208174c] bg-[#ffffff4c] rounded-md w-fit p-[10px] mb-3">
                <Images.Icon className="dark:text-white border-gray-300 dark:border-gray-800 text-[hsl(var(--muted-foreground))]" />
              </section>
              <div className="image-component text-sm dark:bg-[#0208174c] text-[hsl(var(--muted-foreground))] bg-[#ffffff4c] px-2 py-1 rounded-md text-center">
                <h1>
                  <span>
                    {t("dictionaries_settings.images.image_color_title")}
                  </span>{" "}
                  {t("dictionaries_settings.images.image_title")}
                </h1>
                <h1>{t("dictionaries_settings.images.image_resolution")}</h1>
              </div>
            </Fragment>
          )}
        </div>
      </label>
    </main>
  );
}
