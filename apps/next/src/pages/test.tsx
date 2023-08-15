import { zodResolver } from "@hookform/resolvers/zod";
import { BookMarked, ChevronDown, Copy, Languages, MoreVertical, Settings, SettingsIcon, Volume, Volume2, Volume2Icon, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, Input, Textarea } from "@wordigo/ui";

const FormSchema = z.object({
  translatedText: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const Logo = () => (
  <svg
    className="h-11 w-11 bg-transparent cursor-pointer hover:bg-gray-200 rounded"
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M45.0434 75.5553C36.7755 75.7597 28.4421 72.7071 22.1324 66.3974C9.90902 54.174 9.90902 34.3559 22.1324 22.1325C34.3559 9.90904 54.1739 9.90904 66.3974 22.1325C78.6208 34.3559 78.6208 54.174 66.3974 66.3974L71.8293 71.8293C73.0809 73.0809 72.2095 75.2217 70.4397 75.2434L45.0434 75.5553ZM62.0938 62.0939C52.2472 71.9405 36.2826 71.9405 26.436 62.0939C16.5893 52.2472 16.5893 36.2827 26.436 26.436C36.2826 16.5894 52.2472 16.5894 62.0938 26.436C71.9405 36.2827 71.9405 52.2472 62.0938 62.0939Z"
      fill="url(#paint0_linear_1_77)"
      fill-opacity="0.5"
    />
    <path
      d="M65.2049 47.692C65.2049 57.4716 56.0572 65.3996 44.7729 65.3996C33.4887 65.3996 24.341 57.4716 24.341 47.692C24.341 44.3011 33.4887 42.794 44.7729 42.794C56.0572 42.794 65.2049 44.3012 65.2049 47.692Z"
      fill="url(#paint1_linear_1_77)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M59.9835 46.6069C59.7746 54.7472 53.2851 61.2738 45.2067 61.759C53.4359 62.0186 60.3963 56.1457 60.9095 48.3596C60.9516 47.72 60.6213 47.1355 59.9835 46.6069Z"
      fill="white"
    />
    <g filter="url(#filter0_d_1_77)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M45.0434 75.5553C36.7755 75.7597 28.4421 72.7071 22.1324 66.3974C9.90902 54.174 9.90902 34.3559 22.1324 22.1325C34.3559 9.90904 54.1739 9.90904 66.3973 22.1325C78.6208 34.3559 78.6208 54.174 66.3973 66.3974C60.4836 72.3111 52.7923 75.3637 45.0434 75.5553ZM62.0938 62.0939C52.2472 71.9405 36.2826 71.9405 26.436 62.0939C16.5893 52.2472 16.5893 36.2827 26.436 26.436C36.2826 16.5894 52.2472 16.5894 62.0938 26.436C71.9405 36.2827 71.9405 52.2472 62.0938 62.0939Z"
        fill="url(#paint2_linear_1_77)"
        shape-rendering="crispEdges"
      />
    </g>
    <g clip-path="url(#clip0_1_77)">
      <path
        d="M78.2466 14.5371L76.9424 18.0149L73.4646 19.3191L76.9424 20.6233L78.2466 24.101L79.5507 20.6233L83.0285 19.3191L79.5507 18.0149L78.2466 14.5371Z"
        fill="#5282FF"
      />
    </g>
    <g clip-path="url(#clip1_1_77)">
      <path
        d="M14.7771 65.8344L13.4729 69.3122L9.99511 70.6163L13.4729 71.9205L14.7771 75.3983L16.0812 71.9205L19.559 70.6163L16.0812 69.3122L14.7771 65.8344Z"
        fill="#5282FF"
      />
    </g>
    <defs>
      <filter id="filter0_d_1_77" x="4.96487" y="6.9649" width="82.6" height="82.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dx="2" dy="4" />
        <feGaussianBlur stdDeviation="5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_77" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_77" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_1_77" x1="54.0945" y1="9.8296" x2="-30.3466" y2="115.913" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5282FF" />
        <stop offset="1" stop-color="#5282FF" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint1_linear_1_77" x1="24.341" y1="47.1413" x2="108.677" y2="67.1385" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5282FF" />
        <stop offset="1" stop-color="#5282FF" stop-opacity="0" />
      </linearGradient>
      <linearGradient id="paint2_linear_1_77" x1="52.7774" y1="8.51249" x2="-29.6394" y2="115.815" gradientUnits="userSpaceOnUse">
        <stop stop-color="#5282FF" />
        <stop offset="1" stop-color="#5282FF" stop-opacity="0" />
      </linearGradient>
      <clipPath id="clip0_1_77">
        <rect width="10.4333" height="10.4333" fill="white" transform="translate(73.0299 14.1024)" />
      </clipPath>
      <clipPath id="clip1_1_77">
        <rect width="10.4333" height="10.4333" fill="white" transform="translate(9.56039 65.3997)" />
      </clipPath>
    </defs>
  </svg>
);

export default function Test() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { translatedText: "destek" },
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center !font-sans font-normal">
      <div className="border-1 border-gray-300 shadow-md flex items-center space-x-1 rounded-md p-2 w-[500px] flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})} className="w-full space-y-3">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-x-1">
                <Logo />
                <h2 className="font-bold text-xl text-gray-950">Translate</h2>
              </div>
              <div className="flex items-center gap-x-1">
                <Button className="!h-8 !w-8 text-gray-500" variant="ghost" size="icon">
                  <X size={18} />
                </Button>
              </div>
            </div>
            <div className="mt-3 w-full gap-y-2 flex flex-col">
              <Input value="support" disabled className="rounded border-gray-300 border-[1.5px]" />
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-base text-black">Sonuç</p>
                  <div className="flex items-center gap-x-1">
                    <Button className="!w-7 !h-7 text-gray-500" variant="ghost" size="icon">
                      <Volume2 size={17} />
                    </Button>
                    <Button className="!w-7 !h-7 text-gray-500" variant="ghost" size="icon">
                      <Copy size={17} />
                    </Button>
                  </div>
                </div>
                <Textarea className="mt-1.5 border-gray-200 border-[1.5px] rounded" value="destek" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Button className="!h-8 !w-8 text-gray-500" variant="outline" size="icon">
                <SettingsIcon size={18} />
              </Button>
              <Button variant="default" size="sm" className="!h-8 flex items-center justify-between gap-x-2">
                Add Dictionary
                <ChevronDown size={16} />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
