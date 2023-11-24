import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const ReactTable = ({ columns, defaultData }) => {
  const [data, setData] = React.useState(() => [...defaultData]);
  const rerender = React.useReducer(() => ({}), {})[1];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="min-w-full overflow-x-scroll  rounded-lg ">
      <thead className="w-full">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            className="bg-white py-5 px-3 flex justify-between items-center w-full "
            key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                className="text-emdmsPrimary font-semibold text-center w-full"
                key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="px-3">
        {table.getRowModel().rows.map((row) => (
          <tr
            className="odd:bg-[#0056561A] even:bg-white py-4 flex justify-between items-center"
            key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className="text-center w-full text-xs" key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReactTable;
