import React from "react";

const ApprovedAppointments = () => {
  // Sample approved appointments data
  const approvedAppointments = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2024-12-25",
      time: "10:00 AM",
      description: "Routine checkup",
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2024-12-26",
      time: "2:00 PM",
      description: "Follow-up consultation",
    },
    {
      id: 3,
      patientName: "Mark Wilson",
      date: "2024-12-27",
      time: "11:00 AM",
      description: "Dental cleaning",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Approved Appointments</h1>

        {/* Appointments List */}
        {approvedAppointments.length > 0 ? (
          <ul className="space-y-4">
            {approvedAppointments.map((appointment) => (
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
                  <button
                    className="bg-red-500 text-white font-medium py-1 px-4 rounded-md shadow hover:bg-red-600 transition"
                    onClick={() => alert(`Cancel appointment for ${appointment.patientName}?`)}
                  >
                    Cancel
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-center">No approved appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default ApprovedAppointments;
