import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, Backpack, CheckCircle2Icon, CircleIcon, CrossIcon } from "lucide-react";
import { FaStopwatch } from "react-icons/fa";

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
];

export const statuses = [
  {
    value: "backlog",
    label: "Backlog",
    icon: Backpack,
  },
  {
    value: "todo",
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: "in progress",
    label: "In Progress",
    icon: FaStopwatch,
  },
  {
    value: "done",
    label: "Done",
    icon: CheckCircle2Icon,
  },
  {
    value: "canceled",
    label: "Canceled",
    icon: CrossIcon,
  },
];

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUpIcon,
  },
];
