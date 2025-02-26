"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/20/solid";

const events = [
  {
    id: 0,
    title: "Festival of Lights",
    description: "A vibrant celebration featuring lanterns and fireworks.",
    time: "5:00 PM",
    date: "January 10th, 2022",
    datetime: "2022-01-10T17:00",
  },
  {
    id: 1,
    title: "Music Under the Stars",
    description: "An outdoor concert series showcasing local artists.",
    time: "5:00 PM",
    date: "January 10th, 2022",
    datetime: "2022-01-10T17:00",
  },
  {
    id: 2,
    title: "Cultural Heritage Day",
    description: "Explore traditions and crafts from around the world.",
    time: "5:00 PM",
    date: "January 10th, 2022",
    datetime: "2022-01-10T17:00",
  },
];
const days = [
  { date: "2021-12-27" },
  { date: "2021-12-28" },
  { date: "2021-12-29" },
  { date: "2021-12-30" },
  { date: "2021-12-31" },
  { date: "2022-01-01", isCurrentMonth: true },
  { date: "2022-01-02", isCurrentMonth: true },
  { date: "2022-01-03", isCurrentMonth: true },
  { date: "2022-01-04", isCurrentMonth: true },
  { date: "2022-01-05", isCurrentMonth: true },
  { date: "2022-01-06", isCurrentMonth: true },
  { date: "2022-01-07", isCurrentMonth: true },
  { date: "2022-01-08", isCurrentMonth: true },
  { date: "2022-01-09", isCurrentMonth: true },
  { date: "2022-01-10", isCurrentMonth: true },
  { date: "2022-01-11", isCurrentMonth: true },
  { date: "2022-01-12", isCurrentMonth: true, isToday: true },
  { date: "2022-01-13", isCurrentMonth: true },
  { date: "2022-01-14", isCurrentMonth: true },
  { date: "2022-01-15", isCurrentMonth: true },
  { date: "2022-01-16", isCurrentMonth: true },
  { date: "2022-01-17", isCurrentMonth: true },
  { date: "2022-01-18", isCurrentMonth: true },
  { date: "2022-01-19", isCurrentMonth: true },
  { date: "2022-01-20", isCurrentMonth: true },
  { date: "2022-01-21", isCurrentMonth: true },
  { date: "2022-01-22", isCurrentMonth: true, isSelected: true },
  { date: "2022-01-23", isCurrentMonth: true },
  { date: "2022-01-24", isCurrentMonth: true },
  { date: "2022-01-25", isCurrentMonth: true },
  { date: "2022-01-26", isCurrentMonth: true },
  { date: "2022-01-27", isCurrentMonth: true },
  { date: "2022-01-28", isCurrentMonth: true },
  { date: "2022-01-29", isCurrentMonth: true },
  { date: "2022-01-30", isCurrentMonth: true },
  { date: "2022-01-31", isCurrentMonth: true },
  { date: "2022-02-01" },
  { date: "2022-02-02" },
  { date: "2022-02-03" },
  { date: "2022-02-04" },
  { date: "2022-02-05" },
  { date: "2022-02-06" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div>
      {/* <div className="flex justify-between">
        <h2 className="text-base font-semibold text-gray-900"> Events</h2>
        <Menu
          as="div"
          className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
        >
          <div>
            <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>
          </div>
        </Menu>
      </div> */}

      <div className="flex flex-col gap-4">
        <div className="mt-10 text-center  lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="size-5" aria-hidden="true" />
            </button>
            <div className="flex-auto text-sm font-semibold">January</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="size-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs/6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm ring-1 shadow-sm ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  "py-1.5 hover:bg-gray-100 focus:z-10",
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                  (day.isSelected || day.isToday) && "font-semibold",
                  day.isSelected && "text-white",
                  !day.isSelected &&
                    day.isCurrentMonth &&
                    !day.isToday &&
                    "text-gray-900",
                  !day.isSelected &&
                    !day.isCurrentMonth &&
                    !day.isToday &&
                    "text-gray-400",
                  day.isToday && !day.isSelected && "text-indigo-600",
                  dayIdx === 0 && "rounded-tl-lg",
                  dayIdx === 6 && "rounded-tr-lg",
                  dayIdx === days.length - 7 && "rounded-bl-lg",
                  dayIdx === days.length - 1 && "rounded-br-lg"
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    "mx-auto flex size-7 items-center justify-center rounded-full",
                    day.isSelected && day.isToday && "bg-indigo-600",
                    day.isSelected && !day.isToday && "bg-gray-900"
                  )}
                >
                  {day.date.split("-").pop().replace(/^0/, "")}
                </time>
              </button>
            ))}
          </div>
          {/* <button
            type="button"
            className="mt-8 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add event
          </button> */}
        </div>
        <div className="flex justify-between ">
        <h2 className="text-base font-semibold text-gray-900"> Events</h2>
        <Menu
          as="div"
          className="absolute top-6 right-0 xl:relative xl:top-auto xl:right-auto xl:self-center"
        >
          <div>
            <MenuButton className="-m-2 flex items-center rounded-full p-2 text-gray-500 hover:text-gray-600">
              <span className="sr-only">Open options</span>
              <EllipsisHorizontalIcon className="size-5" aria-hidden="true" />
            </MenuButton>
          </div>
        </Menu>
      </div>
        <ol className="mt-4 divide-y divide-gray-100 text-sm/6 lg:col-span-7 xl:col-span-8">
          {events.map((event) => (
            <li
              key={event.id}
              className="relative flex gap-x-6 py-2 xl:static border-t-2 odd:border-purple-200 even:border-yellow-200"
            >
              <div className="flex-auto">
                <dl className="mt-2 flex flex-col text-gray-500 xl:flex-row gap-1">
                  <h3 className="pr-10 font-semibold text-gray-900 xl:pr-0">
                    {event.title}
                  </h3>
                  <div className="flex items-start gap-x-3">
                    <dt className="mt-0.5 text-sm">
                      <span className="sr-only">Date</span>
                      <CalendarIcon
                        className="size-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="">
                      <time dateTime={event.datetime}>
                        {event.date} at {event.time}
                      </time>
                    </dd>
                  </div>
                </dl>
                <div className="justify-between">{event.description}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
