import useFeedbacksConstants, {
  type IFeedbackType,
} from "@/components/Layout/MainLayout/Header/Feedback/Feedback.constants";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { Star } from "lucide-react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";

const DictionaryRating = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState();
  const feedbacks = useFeedbacksConstants();
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmitFeedback = () => {};

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button type="button" variant="outline" size="icon">
          <Star className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="grid gap-2">
            <div className="flex flex-col items-center gap-4">
              <Textarea
                id="width"
                placeholder={t("feedback.placeholder")}
                className="col-span-2 h-8"
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-x-2 items-center justify-center">
            {feedbacks?.map((feedback, index) => (
              <DictionaryRating.Item
                key={index}
                active={active}
                setActive={setActive}
                {...feedback}
              />
            ))}
          </div>
          <Button onClick={() => handleSubmitFeedback()}>
            {t("feedback.submit")}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

type IFeedbackItem = IFeedbackType & { active: any; setActive: any };

DictionaryRating.Item = ({
  title,
  imageSrc,
  active,
  setActive,
  level,
}: IFeedbackItem) => {
  const handleclick = () => {
    setActive(level);
  };

  const isActive = active === level;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={handleclick}
            className={cn(
              "rounded-full transition-all duration-25",
              isActive ? " !bg-blue-100" : ""
            )}
            size="icon"
            variant="outline"
          >
            <Image src={imageSrc} width={32} height={32} alt={title} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DictionaryRating;
