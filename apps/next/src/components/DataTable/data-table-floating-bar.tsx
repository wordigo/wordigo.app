"use client";

import { type Table } from "@tanstack/react-table";
import { Button } from "@wordigo/ui";
import { cn } from "@wordigo/ui/lib/utils";
import { CrossIcon, TrashIcon } from "lucide-react";

interface DataTableFloatingBarProps<TData>
  extends React.HTMLAttributes<HTMLElement> {
  table: Table<TData>;
}

export function DataTableFloatingBar<TData>({
  table,
  className,
  ...props
}: DataTableFloatingBarProps<TData>) {
  if (table.getFilteredSelectedRowModel().rows.length <= 0) return null;

  function updateTasksStatus(table: Table<TData>, status: string) {
    const selectedRows = table.getFilteredSelectedRowModel()
      .rows as unknown as { original: any }[];

    selectedRows.map(async (row) => {
      // await updateTaskStatusAction({
      //   id: row.original.id,
      //   status: status as Task["status"],
      // });
    });
  }

  function updateTasksPriority(table: Table<TData>, priority: string) {
    // const selectedRows = table.getFilteredSelectedRowModel()
    //   .rows as unknown as { original: Task }[];
    // selectedRows.map(async (row) => {
    //   await updateTaskPriorityAction({
    //     id: row.original.id,
    //     priority: priority as Task["priority"],
    //   });
    // });
  }

  return (
    <div
      className={cn(
        "mx-auto flex w-fit items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 text-white",
        className
      )}
      {...props}
    >
      <Button
        aria-label="Clear selection"
        className="h-auto bg-transparent p-1 text-white hover:bg-zinc-700"
        onClick={() => table.toggleAllRowsSelected(false)}
      >
        <CrossIcon className="h-4 w-4" aria-hidden="true" />
      </Button>
      {table.getFilteredSelectedRowModel().rows.length} row(s) selected
      {/*       <Select onValueChange={(value) => updateTasksStatus(table, value)}>
        <SelectTrigger asChild>
          <Button
            aria-label="Delete selected rows"
            className="h-auto bg-transparent p-1 text-white hover:bg-zinc-700"
          >
            <CircleDotIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </SelectTrigger>
        <SelectContent align="center">
          <SelectGroup>
            {tasks.status.enumValues.map((status) => (
              <SelectItem key={status} value={status} className="capitalize">
                {status}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}
      {/* <Select onValueChange={(value) => updateTasksPriority(table, value)}>
        <SelectTrigger asChild>
          <Button
            aria-label="Delete selected rows"
            className="h-auto bg-transparent p-1 text-white hover:bg-zinc-700"
          >
            <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </SelectTrigger>
        <SelectContent align="center">
          <SelectGroup>
            {tasks.priority.enumValues.map((priority) => (
              <SelectItem
                key={priority}
                value={priority}
                className="capitalize"
              >
                {priority}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}
      <Button
        aria-label="Change status of selected rows"
        className="h-auto bg-transparent p-1 text-white hover:bg-zinc-700"
        onClick={() => {
          console.log(
            table.getFilteredSelectedRowModel().rows.map((row) => row.id)
          );
        }}
      >
        <TrashIcon className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  );
}
