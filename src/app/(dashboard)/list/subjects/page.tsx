import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import Link from "next/link";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

export type Subjects = {
    id: number,
    name: string,
    teachers: string[],
  
};




const SubjectsListPage = () => {
  const columns = [
    {
      header: "Subject Name",
      accessor: "info",
    },
    {
        header: "Teachers",
        accessor: "teachers",
        className: "hidden lg:table-cell",
    },
 
    {
      header: "Actions",
      accessor: "action",
      className: "hidden lg:table-cell",
    },
  ];

  const rendRow = (item: Subjects) => {
    return (
        <div className="">
      <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 tx-sm hover:bg-purple-50">
        <td className="flex items-center gap-4 p-4">
          <div className="flex flex-co">
            <h3 className="font-semibold">{item.name}</h3>
          </div>
        </td>

        <td className="hidden md:table-cell">{item.teachers.join(" | ")}</td>
       
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/subjects/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-200">
                <Image src="/view.png" alt="" width={16} height={16} />
              </button>
            </Link>
            {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple-300">
                <Image src="/delete.png" alt="" width={16} height={16} />
              </button>
            )}
          </div>
        </td>
      </tr>
      </div>
    );
  };
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4s mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full  md:w-auto">
          <TableSearch />
          <div className=" flex item-center  gap-4 self-end">
            <button className="w-8 h-8  flex item-center justify-center rounded-full bg-yellow-200">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8  flex item-center justify-center rounded-full bg-yellow-200">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
             { role === "admin" &&  <button className="w-8 h-8  flex item-center justify-center rounded-full bg-yellow-200">
              <Image src="/plus.png" alt="" width={14} height={14} />
            </button> }
          </div>
        </div>
      </div>
      {/* LIST */}
      <div className="">
        <Table columns={columns} rendRow={rendRow} data={subjectsData} />
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default SubjectsListPage;
