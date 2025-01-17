import React, { useState, useEffect } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const PendingAppointments = () => {
  // Sample pending appointments data
  const [pendingAppointments, setPendingAppointments] = useState([
    {
      id: 1,
      patientName: "Emily Carter",
      date: "2024-12-28",
      time: "9:00 AM",
      description: "Initial consultation",
    },
    {
      id: 2,
      patientName: "Michael Brown",
      date: "2024-12-29",
      time: "1:30 PM",
      description: "Lab results discussion",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Simulate fetching data (can replace with real API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a 1-second API call
  }, []);

  // Approve appointment
  const approveAppointment = (id) => {
    const updatedAppointments = pendingAppointments.filter((appointment) => appointment.id !== id);
    setPendingAppointments(updatedAppointments);
    alert(`Appointment ${id} has been approved!`);
  };

  // Reject appointment
  const rejectAppointment = (id) => {
    const updatedAppointments = pendingAppointments.filter((appointment) => appointment.id !== id);
    setPendingAppointments(updatedAppointments);
    alert(`Appointment ${id} has been rejected!`);
  };

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen bg-gray-100 px-8 py-24">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Pending Appointments</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading pending appointments...</p>
        ) : pendingAppointments.length > 0 ? (
          <ul className="space-y-4">
            {pendingAppointments.map((appointment) => (
              <li
                key={appointment.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
              >
                <div className="flex justify-between items-center">
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
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="bg-green-500 text-white font-medium py-1 px-4 rounded-md shadow hover:bg-green-600 transition"
                      onClick={() => approveAppointment(appointment.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-500 text-white font-medium py-1 px-4 rounded-md shadow hover:bg-red-600 transition"
                      onClick={() => rejectAppointment(appointment.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No pending appointments found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PendingAppointments;
