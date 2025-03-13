import React from "react";
import { Teacher } from "@/app/(dashboard)/list/teachers/page";

const Table = ({
  columns,
  rendRow,
  data, // added data prop
}: {
  columns: { header: string; accessor: string; ClassName?: string }[];
  rendRow: (item:Teacher) => React.ReactNode; // Define rendRow function properly
  // data: Teacher[]; // Define data prop
  data: any[]
}) => {
  return (
    <table className="w-fll mt-4">
      <thead className="">
        <tr className="text-left text-gray-500 text-sm">
          {columns.map((col) => (
            <th key={col.accessor}> {col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) =>
          // Render rows for each teacher
          rendRow(item)
        )}
      </tbody>
    </table>
  );
};

export default Table;
