import useFeedbacksConstants, {
  type IFeedbackType,
} from "./Feedback.constants";
import CButton from "@/components/UI/Button";
import { usePostFeedBackMutation } from "@/store/feedback/api";
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
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

const Feedback = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState();
  const feedbacks = useFeedbacksConstants();
  const [inputValue, setInputValue] = useState<string>("");
  const [isFeedbackShow, setFeedbackShow] = useState(false);
  const [FeedBack, { isLoading }] = usePostFeedBackMutation();

  const handleSubmitFeedback = () => {
    void FeedBack({
      description: inputValue,
      rate: active,
    })
      .then(() => {
        toast.success(t("notifications.success"), {
          description: t("feedback.success"),
        });
        setFeedbackShow(false);
      })
      .catch(() => {
        toast.error(t("notifications.error"), {
          description: t("feedback.error"),
        });
      });
  };

  return (
    <Popover open={isFeedbackShow} onOpenChange={setFeedbackShow}>
      <PopoverTrigger asChild>
        <Button variant="outline">{t("feedback.title")}</Button>
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
              <Feedback.Item
                key={index}
                active={active}
                setActive={setActive}
                {...feedback}
              />
            ))}
          </div>
          <CButton loading={isLoading} onClick={handleSubmitFeedback}>
            {t("feedback.submit")}
          </CButton>
        </div>
      </PopoverContent>
    </Popover>
  );
};

type IFeedbackItem = IFeedbackType & { active: any; setActive: any };

Feedback.Item = ({
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

export default Feedback;
