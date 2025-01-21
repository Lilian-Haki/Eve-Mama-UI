import React, { useState } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const MidAddAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [form, setForm] = useState({
    date: "",
    time: "",
    description: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Add appointment
  const addAppointment = () => {
    if (form.date && form.time && form.description) {
      setAppointments([...appointments, form]);
      setForm({ date: "", time: "", description: "" }); // Reset form
    }
  };

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen py-[100px] px-8">
      <div className="max-w-1xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Manage Appointments</h1>

        {/* Appointment Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the reason for your appointment..."
            ></textarea>
          </div>

          <button
            onClick={addAppointment}
            className="w-full bg-purple-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-purple-600 transition"
          >
            Add Appointment
          </button>
        </div>

        {/* Appointment List */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Your Appointments</h2>
          {appointments.length > 0 ? (
            <ul className="space-y-4">
              {appointments.map((appointment, index) => (
                <li
                  key={index}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
                >
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Date:</span> {appointment.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Time:</span> {appointment.time}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Description:</span> {appointment.description}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">No appointments added yet.</p>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default MidAddAppointments;