import React, { useState, useEffect } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const PendingPayments = () => {
  // Sample pending payments data
  const [pendingPayments, setPendingPayments] = useState([
    {
      id: 1,
      patientName: "Sophia Johnson",
      dueDate: "2024-12-25",
      amount: "$150.00",
      description: "Consultation Fee",
    },
    {
      id: 2,
      patientName: "Liam Williams",
      dueDate: "2024-12-28",
      amount: "$200.00",
      description: "Dental Cleaning",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      dueDate: "2024-12-30",
      amount: "$100.00",
      description: "Follow-up Checkup",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Simulate fetching data (can be replaced with API call)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Simulating a 1-second delay
  }, []);

  // Process payment
  const processPayment = (id) => {
    const updatedPayments = pendingPayments.filter((payment) => payment.id !== id);
    setPendingPayments(updatedPayments);
    alert(`Payment for ID ${id} has been processed!`);
  };

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] -mt-[570px] min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Pending Payments</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading pending payments...</p>
        ) : pendingPayments.length > 0 ? (
          <ul className="space-y-4">
            {pendingPayments.map((payment) => (
              <li
                key={payment.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">
                      {payment.patientName}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Due Date:</span> {payment.dueDate}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Amount:</span> {payment.amount}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-bold">Description:</span> {payment.description}
                    </p>
                  </div>
                  <button
                    className="bg-blue-500 text-white font-medium py-1 px-4 rounded-md shadow hover:bg-blue-600 transition"
                    onClick={() => processPayment(payment.id)}
                  >
                    Process Payment
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No pending payments found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default PendingPayments;
