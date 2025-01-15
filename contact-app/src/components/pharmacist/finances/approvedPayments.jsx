import React, { useState, useEffect } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const ApprovedPayments = () => {
  // Sample approved payments data
  const [approvedPayments, setApprovedPayments] = useState([
    {
      id: 1,
      patientName: "Sophia Johnson",
      paymentDate: "2024-12-15",
      amount: "$150.00",
      description: "Consultation Fee",
    },
    {
      id: 2,
      patientName: "Liam Williams",
      paymentDate: "2024-12-18",
      amount: "$200.00",
      description: "Dental Cleaning",
    },
    {
      id: 3,
      patientName: "Emma Brown",
      paymentDate: "2024-12-20",
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
    }, 1000); // Simulated 1-second delay
  }, []);

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] -mt-[570px] min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Approved Payments</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading approved payments...</p>
        ) : approvedPayments.length > 0 ? (
          <ul className="space-y-4">
            {approvedPayments.map((payment) => (
              <li
                key={payment.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {payment.patientName}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Payment Date:</span> {payment.paymentDate}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Amount:</span> {payment.amount}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Description:</span> {payment.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No approved payments found.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default ApprovedPayments;
