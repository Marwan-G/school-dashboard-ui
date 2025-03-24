import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import Table from "@/components/Table";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { role, studentsData } from "@/lib/data";

export type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo?: string;
  phone: string;
  grade: string;
  class: string;
  address: string;
};

const StudentListPage = () => {
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
        header: "Name",
        accessor: "name",
        className: "hidden md:table-cell",
      },
    {
      header: "Grade",
      accessor: "grade",
      className: "hidden md:table-cell",
    },
    {
      header: "Class",
      accessor: "class",
      className: "hidden md:table-cell",
    },
   
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

  const rendRow = (item: Student) => {
    return (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 tx-sm hover:bg-purple-50">
               <td className="flex items-center gap-4 p-4">

          <Image
            src={item.photo || "/default-avatar.png"}
            alt={`${item.name}'s photo`}  // Improve accessibility with meaningful alt text
            width={40}
            height={40}
            className="md:hidden xl:block w-10 h-10 rounded-full object-cover "
          />
          <div className="flex flex-co">
            <span className="hidden md:table-cell">{item.name}</span>
            <h3 className="font-semibold">{item.class}</h3>
          </div>
        </td>
        <td className="hidden md:table-cell">{item.studentId}</td>
        <td className="hidden md:table-cell">{item.grade}</td>

        <td className="hidden md:table-cell">{item.phone}</td>
        <td className="hidden md:table-cell">{item.address}</td>
        <td>
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
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
    );
  };
  return (
    <div className=" bg-white p-4 rounded-md flex-1 m-4s mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
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
        <Table columns={columns} rendRow={rendRow} data={studentsData} />
      </div>
      {/* PAGINATION */}
      <div className="">
        <Pagination />
      </div>
    </div>
  );
};

export default StudentListPage;
