"use client";
import { useState } from "react";
import Calendar from "react-calendar";
import Image from "next/image";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];
const event = [
  {
    Id: 0,
    title: "Festival of Lights",
    description: "A vibrant celebration featuring lanterns and fireworks.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    Id: 1,
    title: "Music Under the Stars",
    description: "An outdoor concert series showcasing local artists.",
    time: "12:00 PM - 2:00 PM",
  },
  {
    Id: 2,
    title: "Cultural Heritage Day",
    description: "Explore traditions and crafts from around the world.",
    time: "12:00 PM - 2:00 PM",
  },
];
const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="p-4 bg-white ">
      <div className="p-4 rounded-md">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className=" flex items-center justify-between ">
        <h1 className="text-xl font-semibold ">Event</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className="mr-8"
        />
      </div>
      <div className=" flex flex-col gap-4">

      {event.map((item) => (
        <div className="p-5 border-2 border-gray-300 rounded border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple justify-between" key={item.Id}>
          <div className="flex  justify-between items-center">
            <h3 className=" text-gray-600 font-semibold">{item.title}</h3>
            <span className="text-gray-300 text-xs">{item.time}</span>
          </div>
          <div>
            <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
export default EventCalendar;
