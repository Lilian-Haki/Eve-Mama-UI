import React, { useState, useEffect } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const CompletedAppointments = () => {
  // Sample completed appointments data
  const [completedAppointments, setCompletedAppointments] = useState([
    {
      id: 1,
      patientName: "Sophia Johnson",
      date: "2024-12-15",
      time: "10:00 AM",
      description: "Follow-up consultation",
      notes: "Discussed recovery plan.",
    },
    {
      id: 2,
      patientName: "Liam Williams",
      date: "2024-12-18",
      time: "2:30 PM",
      description: "Dental cleaning",
      notes: "Advised regular flossing.",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      date: "2024-12-20",
      time: "11:15 AM",
      description: "Routine checkup",
      notes: "No issues found.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Simulate fetching data (replace with actual API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated 1-second API delay
  }, []);

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen bg-gray-100 px-8 py-24">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Completed Appointments</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading completed appointments...</p>
        ) : completedAppointments.length > 0 ? (
          <ul className="space-y-4">
            {completedAppointments.map((appointment) => (
              <li
                key={appointment.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {appointment.patientName}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Date:</span> {appointment.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Time:</span> {appointment.time}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Description:</span> {appointment.description}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Notes:</span> {appointment.notes}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No completed appointments found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default CompletedAppointments;
