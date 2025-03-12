import React from "react";

const Table = ({
  columns,
}: {
  columns: { header: string; accessor: string; ClassName?: string }[];
}) => {
  return (
    <table className="w-fll mt-4 border-1">
      <thead className="">
        <tr className="text-left text-gray-500 text-sm ">
          {columns.map((col) => (
            <th  key={col.accessor}> {col.header}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
