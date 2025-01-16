import React, { useState, useEffect } from "react";

const PharmacistSection = () => {
  const [inventory, setInventory] = useState([]);
  const [supplies, setSupplies] = useState([]);
  const [activeTab, setActiveTab] = useState("inventory");
  const [filter, setFilter] = useState("stock");

  // Sample data for inventory and supplies (replace with API integration)
  useEffect(() => {
    const fetchPharmacistData = async () => {
      const inventoryData = [
        { id: 1, item: "Paracetamol", quantity: 100, expiryDate: "2024-12-31", status: "stock" },
        { id: 2, item: "Ibuprofen", quantity: 50, expiryDate: "2023-11-20", status: "expired" },
        { id: 3, item: "Cough Syrup", quantity: 30, expiryDate: "2024-05-15", status: "stock" },
      ];

      const supplyData = [
        { id: 1, supplier: "ABC Pharma", item: "Bandages", quantity: 500, status: "pending" },
        { id: 2, supplier: "XYZ Supplies", item: "Masks", quantity: 1000, status: "approved" },
        { id: 3, supplier: "HealthMed", item: "Gloves", quantity: 700, status: "completed" },
      ];

      setInventory(inventoryData);
      setSupplies(supplyData);
    };

    fetchPharmacistData();
  }, []);

  // Determine which list to filter and display
  const filteredList = activeTab === "inventory"
    ? inventory.filter((item) => item.status === filter)
    : supplies.filter((supply) => supply.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Pharmacist Section</h1>

        {/* Tabs for Inventory and Supplies */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => {
              setActiveTab("inventory");
              setFilter("stock");
            }}
            className={`px-4 py-2 font-medium rounded-md ${
              activeTab === "inventory"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Inventory
          </button>
          <button
            onClick={() => {
              setActiveTab("supplies");
              setFilter("pending");
            }}
            className={`px-4 py-2 font-medium rounded-md ${
              activeTab === "supplies"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            Supplies
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-6">
          {activeTab === "inventory" ? (
            <>
              <button
                onClick={() => setFilter("stock")}
                className={`px-4 py-2 font-medium rounded-md ${
                  filter === "stock"
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                In Stock
              </button>
              <button
                onClick={() => setFilter("expired")}
                className={`px-4 py-2 font-medium rounded-md ${
                  filter === "expired"
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Expired
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setFilter("pending")}
                className={`px-4 py-2 font-medium rounded-md ${
                  filter === "pending"
                    ? "bg-yellow-500 text-white"
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
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Completed
              </button>
            </>
          )}
        </div>

        {/* Display List */}
        <div className="space-y-4">
          {filteredList.length > 0 ? (
            filteredList.map((entry) => (
              <div
                key={entry.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {activeTab === "inventory" ? entry.item : entry.supplier}
                  </p>
                  <p className="text-sm text-gray-600">
                    {activeTab === "inventory"
                      ? `Quantity: ${entry.quantity} - Expiry: ${entry.expiryDate}`
                      : `Item: ${entry.item} - Quantity: ${entry.quantity}`}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    entry.status === "expired"
                      ? "bg-red-100 text-red-800"
                      : entry.status === "stock"
                      ? "bg-green-100 text-green-800"
                      : entry.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : entry.status === "approved"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {entry.status.charAt(0).toUpperCase() + entry.status.slice(1)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No records found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PharmacistSection;
