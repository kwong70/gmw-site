import { time } from "console";
import React from "react";

const Calendar = ({handleClick}: any) => {
  // Generate time slots from 8am to 5pm
  const timeSlots = [
    {
      day: "Monday",
      time: ["8:00am", "9:00am", "10:00am", "11:00am", "1:00pm", "2:00pm"]
    },
    {
      day: "Tuesday",
      time: ["8:00am", "9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm", "2:00pm", "3:00pm"]
    },
    {
      day: "Wednesday",
      time: ["8:00am", "12:30pm", "3:00pm", "4:00pm"]
    },
    {
      day: "Thursday",
      time: ["8:00am", "9:00am", "11:00am", "12:00pm", "2:00pm", "3:00pm", "4:00pm"]
    },
    {
      day: "Friday",
      time: ["8:00am", "9:00am", "10:00am", "1:00pm", "2:00pm", "3:00pm"]
    }
  ];

  // Render the calendar
  return (
    <div className="flex flex-col w-full ml-8">
      {/* Rows for each workday */}
      {timeSlots.map((day) => (
        <div className="mb-4 flex" key={day.day}>
          <div className="p-2 w-[100px]">{day.day}</div>
          {day.time.map((timeSlot, index) => (
            <a onClick={() => handleClick({ day: day.day, time: timeSlot})} className="p-2 border border-blue-300 cursor-pointer mx-2 rounded-lg hover:bg-blue-100" key={index}>
                <p className="w-1/2">{timeSlot}</p>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Calendar;
