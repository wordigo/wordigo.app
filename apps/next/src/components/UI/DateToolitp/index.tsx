import { Tooltip, TooltipContent, TooltipTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import moment from "moment";
import { useMemo } from "react";

export interface IDateTooltip {
  date: string;
  mode?: "absolute" | "relative";
  className?: string;
}

const DateTooltip: React.FC<IDateTooltip> = ({
  date,
  mode = "absolute",
  className,
}) => {
  const formattedDate = useMemo(() => {
    const newDate = new Date(date);
    const now = new Date();
    const diff = now.getTime() - newDate.getTime();
    const diffInDays = Math.floor(diff / (1000 * 3600 * 24));

    const formattedDate = {
      label: "",
      tooltip: "",
    };

    if (mode === "absolute") {
      if (diffInDays < 1) {
        formattedDate.label = moment(date).format("HH:mm");
        formattedDate.tooltip = moment(date).format("HH:mm");
      } else if (diffInDays < 7) {
        formattedDate.label = moment(date).format("dddd");
        formattedDate.tooltip = moment(date).format("dddd");
      } else {
        formattedDate.label = moment(date).format("DD/MM/YYYY");
        formattedDate.tooltip = moment(date).format("DD/MM/YYYY");
      }
    } else if (mode === "relative") {
      if (diffInDays < 1) {
        formattedDate.label = moment(date).fromNow();
        formattedDate.tooltip = moment(date).format("HH:mm");
      } else if (diffInDays < 7) {
        formattedDate.label = moment(date).fromNow();
        formattedDate.tooltip = moment(date).format("dddd");
      } else {
        formattedDate.label = moment(date).fromNow();
        formattedDate.tooltip = moment(date).format("DD/MM/YYYY");
      }
    }

    return formattedDate;
  }, [date, mode]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className={cn("text-sm", className)}>{formattedDate.label}</span>
      </TooltipTrigger>
      <TooltipContent side="top" align="start">
        <span className={cn("text-sm", className)}>
          {formattedDate.tooltip}
        </span>
      </TooltipContent>
    </Tooltip>
  );
};

export default DateTooltip;
