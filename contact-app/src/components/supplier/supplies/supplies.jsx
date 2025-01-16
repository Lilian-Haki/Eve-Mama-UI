import React, { useState, useEffect } from "react";

const SupplierSection = () => {
  const [supplies, setSupplies] = useState([]);
  const [filter, setFilter] = useState("pending");

  // Sample data for supplies (replace with API integration)
  useEffect(() => {
    const fetchSupplies = async () => {
      const data = [
        { id: 1, supplier: "ABC Supplies", item: "Syringes", date: "2024-12-20", status: "pending" },
        { id: 2, supplier: "XYZ Pharma", item: "Gloves", date: "2024-12-18", status: "approved" },
        { id: 3, supplier: "HealthMed", item: "Masks", date: "2024-12-17", status: "completed" },
        { id: 4, supplier: "MediTech", item: "Bandages", date: "2024-12-16", status: "pending" },
        { id: 5, supplier: "Quick Supplies", item: "IV Fluids", date: "2024-12-15", status: "completed" },
      ];
      setSupplies(data);
    };
    fetchSupplies();
  }, []);

  // Filter supplies based on status
  const filteredSupplies = supplies.filter((supply) => supply.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Supplies</h1>

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

        {/* Supplies List */}
        <div className="space-y-4">
          {filteredSupplies.length > 0 ? (
            filteredSupplies.map((supply) => (
              <div
                key={supply.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{supply.supplier}</p>
                  <p className="text-sm text-gray-600">Item: {supply.item}</p>
                  <p className="text-sm text-gray-600">Date: {supply.date}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    supply.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : supply.status === "approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {supply.status.charAt(0).toUpperCase() + supply.status.slice(1)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No supplies found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierSection;
