import { cn } from "@wordigo/ui/lib/utils";
import * as React from "react";

const Table = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(({ className, ...props }, ref) => (
  <div className="ui-overflow-auto ui-w-full ui-flex item-center">
    <table ref={ref} className={cn("caption-bottom ui-text-sm ui-w-full", className)} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => <thead ref={ref} className={cn("[&_tr]:ui-border-b", className)} {...props} />);
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => <tbody ref={ref} className={cn("[&_tr:last-child]:ui-border-0", className)} {...props} />);
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(({ className, ...props }, ref) => <tfoot ref={ref} className={cn("bg-primary ui-font-medium text-primary-foreground", className)} {...props} />);
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(({ className, ...props }, ref) => <tr ref={ref} className={cn("ui-border-b ui-transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)} {...props} />);
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => <th ref={ref} className={cn("w-fit ui-h-12 ui-text-left ui-align-middle ui-font-medium text-muted-foreground", className)} {...props} />);
TableHead.displayName = "TableHead";

const TableHeadWord = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => <th ref={ref} className={cn("w-fit ui-h-12 ui-text-center ui-align-middle ui-font-medium text-muted-foreground", className)} {...props} />);
TableHead.displayName = "TableHeadWord";

const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(({ className, ...props }, ref) => <td ref={ref} className={cn("ui-py-4 ui-pl-4 ui-align-middle [&:has([role=checkbox])]:ui-pr-0 ui-pr-4", className)} {...props} />);
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(({ className, ...props }, ref) => <caption ref={ref} className={cn("ui-mt-4 ui-text-sm text-muted-foreground", className)} {...props} />);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption, TableHeadWord };
