import React, { useState, useEffect } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const MidPrescriptionList = () => {
  // Sample data for prescriptions
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      patientName: "Sophia Johnson",
      date: "2024-12-15",
      description: "Antibiotics for infection",
      status: "new",
    },
    {
      id: 2,
      patientName: "Liam Williams",
      date: "2024-12-12",
      description: "Vitamin D supplements",
      status: "completed",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      date: "2024-12-20",
      description: "Painkillers for headache",
      status: "new",
    },
    {
      id: 4,
      patientName: "Noah Davis",
      date: "2024-12-10",
      description: "Insulin for diabetes",
      status: "completed",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Simulate fetching data (replace with API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulated 1-second delay
  }, []);

  // Function to mark a prescription as completed
  const markAsCompleted = (id) => {
    setPrescriptions((prevPrescriptions) =>
      prevPrescriptions.map((prescription) =>
        prescription.id === id
          ? { ...prescription, status: "completed" }
          : prescription
      )
    );
  };

  // Separate prescriptions into new and completed
  const newPrescriptions = prescriptions.filter(
    (prescription) => prescription.status === "new"
  );
  const completedPrescriptions = prescriptions.filter(
    (prescription) => prescription.status === "completed"
  );

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen px-8 py-24">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Prescription List</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading prescriptions...</p>
        ) : (
          <>
            {/* New Prescriptions */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-purple-800 mb-4">
                New Prescriptions
              </h2>
              {newPrescriptions.length > 0 ? (
                <ul className="space-y-4">
                  {newPrescriptions.map((prescription) => (
                    <li
                      key={prescription.id}
                      className="p-4 bg-blue-50 border border-blue-200 rounded-md shadow"
                    >
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {prescription.patientName}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">Date:</span> {prescription.date}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">Description:</span>{" "}
                          {prescription.description}
                        </p>
                      </div>
                      <button
                        onClick={() => markAsCompleted(prescription.id)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md hover:bg-green-600 transition"
                      >
                        Mark as Completed
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No new prescriptions.</p>
              )}
            </section>

            {/* Completed Prescriptions */}
            <section>
              <h2 className="text-xl font-semibold text-green-600 mb-4">
                Completed Prescriptions
              </h2>
              {completedPrescriptions.length > 0 ? (
                <ul className="space-y-4">
                  {completedPrescriptions.map((prescription) => (
                    <li
                      key={prescription.id}
                      className="p-4 bg-green-50 border border-green-200 rounded-md shadow"
                    >
                      <div>
                        <p className="text-lg font-semibold text-gray-800">
                          {prescription.patientName}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">Date:</span> {prescription.date}
                        </p>
                        <p className="text-sm text-gray-700">
                          <span className="font-bold">Description:</span>{" "}
                          {prescription.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500">No completed prescriptions.</p>
              )}
            </section>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default MidPrescriptionList;
