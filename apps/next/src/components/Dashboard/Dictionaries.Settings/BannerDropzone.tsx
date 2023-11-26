import { Label, toast } from "@wordigo/ui";
import { useTranslation } from "next-i18next";
import React, { useEffect, useState } from "react";

export interface IBannerDropzoneProps {
  image?: string;
  setImage: (image: string) => void;
}

export default function BannerDropzone({
  image,
  setImage,
}: IBannerDropzoneProps) {
  const [selectedImage, setSelectedImage] = useState(image ?? null);
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

  useEffect(() => {
    setImage(selectedImage);
  }, [selectedImage]);

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
      <label htmlFor="imageUpload" className="cursor-pointer mr-8">
        <label
          htmlFor="dropzone-file"
          style={backgroundImageStyle}
          className="flex flex-col items-center justify-center w-[512px] h-64 border-2 border-input border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            onChange={handleImageChange}
            id="dropzone-file"
            type="file"
            className="hidden"
            accept="image/jpeg, image/png, image/gif"
          />
        </label>
      </label>
    </main>
  );
}
