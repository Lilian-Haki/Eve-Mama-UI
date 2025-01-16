import React, { useState, useEffect } from "react";

const FinanceManagerSection = () => {
  const [patientPayments, setPatientPayments] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);
  const [filter, setFilter] = useState("patient-pending");

  // Sample data for payments (replace with API integration)
  useEffect(() => {
    const fetchPayments = async () => {
      const patientData = [
        { id: 1, name: "John Doe", amount: 1000, date: "2024-12-20", status: "pending" },
        { id: 2, name: "Jane Smith", amount: 2000, date: "2024-12-18", status: "approved" },
        { id: 3, name: "Michael Brown", amount: 1500, date: "2024-12-17", status: "completed" },
      ];

      const supplierData = [
        { id: 1, supplier: "ABC Supplies", amount: 5000, date: "2024-12-20", status: "pending" },
        { id: 2, supplier: "XYZ Pharma", amount: 3000, date: "2024-12-18", status: "approved" },
        { id: 3, supplier: "HealthMed", amount: 7000, date: "2024-12-17", status: "completed" },
      ];

      setPatientPayments(patientData);
      setSupplierPayments(supplierData);
    };

    fetchPayments();
  }, []);

  // Determine which list to filter and display
  const isPatient = filter.includes("patient");
  const filteredPayments = isPatient
    ? patientPayments.filter((payment) => payment.status === filter.split("-")[1])
    : supplierPayments.filter((payment) => payment.status === filter.split("-")[1]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Finance Manager</h1>

        {/* Tabs for Patient and Supplier Payments */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setFilter("patient-pending")}
            className={`px-4 py-2 font-medium rounded-md ${
              filter.includes("patient")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Patient Payments
          </button>
          <button
            onClick={() => setFilter("supplier-pending")}
            className={`px-4 py-2 font-medium rounded-md ${
              filter.includes("supplier")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Supplier Payments
          </button>
        </div>

        {/* Filter Tabs for Pending, Approved, Completed */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setFilter(`${filter.split("-")[0]}-pending`)}
            className={`px-4 py-2 font-medium rounded-md ${
              filter.endsWith("pending")
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter(`${filter.split("-")[0]}-approved`)}
            className={`px-4 py-2 font-medium rounded-md ${
              filter.endsWith("approved")
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter(`${filter.split("-")[0]}-completed`)}
            className={`px-4 py-2 font-medium rounded-md ${
              filter.endsWith("completed")
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Payments List */}
        <div className="space-y-4">
          {filteredPayments.length > 0 ? (
            filteredPayments.map((payment) => (
              <div
                key={payment.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {isPatient ? payment.name : payment.supplier}
                  </p>
                  <p className="text-sm text-gray-600">Amount: ${payment.amount}</p>
                  <p className="text-sm text-gray-600">Date: {payment.date}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    payment.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : payment.status === "approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No payments found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FinanceManagerSection;
