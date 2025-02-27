     
"use client";
import { useState } from "react";
import EventCalendar from "@/components/EventCalendar";
import AnnouncmentChart from "@/components/AnnouncmentChart";
import CalendarHeader from "@/components/calendar-components/CalendarHeader";
import DayView from "@/components/calendar-components/DayView";
import MonthView from "@/components/calendar-components/MonthView";

const page = () => {
  const [view, setView] = useState<string>("Month view");

  return (
    <div className="p-4 h-screen flex gap-4 md:flex-row ">
      {/* LEFT    */}
      <div className="w-full  lg:w-2/3  bg-white p-4  rounded-md">
        {/* <h1 className="text-xl font-semibold">schedule (A4)</h1> */}
        <CalendarHeader selectedOption={view} onChangeView={setView} />
        {view === "Month view" ? <MonthView /> : <DayView />}
      </div>
      {/* RIGHT CHART  */}
      <div className="w-full flex-col lg:w-1/3 flex gap-8">
        <AnnouncmentChart />
      </div>
    </div>
  );
};

export default page;
