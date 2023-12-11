import { Tooltip, TooltipContent, TooltipTrigger } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import moment from "moment";
import { useMemo } from "react";

export enum IDateMode {
  absolute,
  relative,
}

export interface IDateTooltip {
  date: string;
  mode?: IDateMode;
  className?: string;
}

const DateTooltip: React.FC<IDateTooltip> = ({
  date,
  mode = IDateMode.absolute,
  className,
}) => {
  const formattedDate = useMemo(() => {
    const relative = moment(date).fromNow();
    const absolute = moment(date).format("DD MMMM YYYY");

    const formattedDate = {
      label: mode === IDateMode.absolute ? absolute : relative,
      tooltip: mode === IDateMode.relative ? absolute : relative,
    };

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
