import React from "react";
const announcement = [
  {
    Id: 0,
    title: "Festival of Lights",
    description: "A vibrant celebration featuring lanterns and fireworks.",
    time: "1-01-2025",
  },
  {
    Id: 1,
    title: "Music Under the Stars",
    description: "An outdoor concert series showcasing local artists.",
    time: "1-01-2025",
  },
  {
    Id: 2,
    title: "Cultural Heritage Day",
    description: "Explore traditions and crafts from around the world.",
    time: "1-01-2025",
  },
];

const AnnouncmentChart = () => {
  return (
    <div className="p-4 bg-white  flex flex-col gap-4">
        <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Annouoncment</h1>
        <span className="text-xs text-gray-400">View All</span>
        </div>

      {announcement.map((item) => (
        <div key={item.Id} className="rounded-md px-5 py-1 odd:bg-purple-50 even:bg-lamaSkyLight">
          <div className="flex items-center justify-between">
            <h2 className="font-medium  text-gray-600">{item.title}</h2>
            <span className="text-xs  bg-lamaYellowLight m-2 rounded-[4px] text-gray-300 ">{item.time}</span>
          </div>
          <p className="text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AnnouncmentChart;
