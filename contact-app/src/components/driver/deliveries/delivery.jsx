import React, { useState, useEffect } from "react";

const DeliveriesSection = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState("pending");

  // Sample data for deliveries (replace with API integration)
  useEffect(() => {
    const fetchDeliveries = async () => {
      const data = [
        { id: 1, customer: "John Doe", date: "2024-12-20", status: "pending" },
        { id: 2, customer: "Jane Smith", date: "2024-12-18", status: "approved" },
        { id: 3, customer: "Michael Brown", date: "2024-12-17", status: "completed" },
        { id: 4, customer: "Alice Green", date: "2024-12-16", status: "pending" },
        { id: 5, customer: "Bob White", date: "2024-12-15", status: "completed" },
      ];
      setDeliveries(data);
    };
    fetchDeliveries();
  }, []);

  // Filter deliveries based on status
  const filteredDeliveries = deliveries.filter((delivery) => delivery.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Deliveries</h1>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 font-medium rounded-md ${
              filter === "pending"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("approved")}
            className={`px-4 py-2 font-medium rounded-md ${
              filter === "approved"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Approved
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 font-medium rounded-md ${
              filter === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Completed
          </button>
        </div>

        {/* Deliveries List */}
        <div className="space-y-4">
          {filteredDeliveries.length > 0 ? (
            filteredDeliveries.map((delivery) => (
              <div
                key={delivery.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {delivery.customer}
                  </p>
                  <p className="text-sm text-gray-600">Date: {delivery.date}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    delivery.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : delivery.status === "approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No deliveries found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveriesSection;
