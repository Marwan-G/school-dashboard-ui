import React from "react";
import EventCalendar from "@/components/EventCalendar";
import AnnouncmentChart from "@/components/AnnouncmentChart";

const page = () => {
  return (
    <div className="p-4  h-screen flex gap-4  md:flex-row">
      {/* LEFT    */}
      <div className="w-full lg:w-2/3 ">
      <div className="bg-white p-4 rounded-md">
        <h1>schedule (A4)</h1>
      </div>
      </div>
      {/* RIGH  ChART  */}
      <div className="w-full flex-col lg:w-1/3 flex  gap-8 ">
        <EventCalendar />
        <AnnouncmentChart />
      </div>
    </div>
  );
};
export default page;
