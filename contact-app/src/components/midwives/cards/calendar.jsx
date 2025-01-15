import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const AppointmentsCalendar = () => {
  const [value, setValue] = useState(new Date());
  const appointments = {
    "2024-12-25": ["Meeting with John", "Doctor's Appointment"],
    "2024-12-26": ["Team Standup"],
  };

  const formatDate = (date) => date.toISOString().split("T")[0];

  return (
    <div>
      <h1>Appointments Calendar</h1>
      <Calendar className="w-[400px] rounded-lg" onChange={setValue} value={value} />
      <div>
        <h3>Appointments for {formatDate(value)}</h3>
        {appointments[formatDate(value)] ? (
          <ul>
            {appointments[formatDate(value)].map((appointment, index) => (
              <li key={index}>{appointment}</li>
            ))}
          </ul>
        ) : (
          <p>No appointments on this day.</p>
        )}
      </div>
    </div>
  );
};

export default AppointmentsCalendar;
