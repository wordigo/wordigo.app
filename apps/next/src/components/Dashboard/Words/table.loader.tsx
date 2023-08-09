import { Fragment } from "react";

import { Skeleton, TableCell, TableRow } from "@wordigo/ui";

const TableColumLoader = () => {
  return (
    <Fragment>
      {[0, 1, 2, 3].map((item) => (
        <TableRow key={item}>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
          <TableCell>
            <Skeleton className="w-full h-7" />
          </TableCell>
        </TableRow>
      ))}
    </Fragment>
  );
};

export default TableColumLoader;
