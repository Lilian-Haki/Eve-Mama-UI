import React, { useState, useEffect } from "react";

const LabTestsSection = () => {
  const [labTests, setLabTests] = useState([]);
  const [filter, setFilter] = useState("pending");
//Action button
// const markAsCompleted = (id) => {
//   setLabTests((prev) =>
//     prev.map((test) =>
//       test.id === id ? { ...test, status: "completed" } : test
//     )
//   );
// };

  // Sample data for lab tests (replace with API integration)
  useEffect(() => {
    const fetchLabTests = async () => {
      const data = [
        { id: 1, patient: "John Doe", test: "Blood Test", date: "2024-12-20", status: "pending" },
        { id: 2, patient: "Jane Smith", test: "Urine Analysis", date: "2024-12-19", status: "completed" },
        { id: 3, patient: "Michael Brown", test: "X-Ray", date: "2024-12-18", status: "pending" },
        { id: 4, patient: "Alice Green", test: "CT Scan", date: "2024-12-17", status: "completed" },
      ];
      setLabTests(data);
    };
    fetchLabTests();
  }, []);

  // Filter lab tests based on status
  const filteredLabTests = labTests.filter((test) => test.status === filter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lab Tests</h1>

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

        {/* Lab Tests List */}
        <div className="space-y-4">
          {filteredLabTests.length > 0 ? (
            filteredLabTests.map((test) => (
              <div
                key={test.id}
                className="p-4 border rounded-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-medium text-gray-800">{test.patient}</p>
                  <p className="text-sm text-gray-600">Test: {test.test}</p>
                  <p className="text-sm text-gray-600">Date: {test.date}</p>
                </div>
                <span
                  className={`px-3 py-1 text-sm font-medium rounded-md ${
                    test.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {test.status.charAt(0).toUpperCase() + test.status.slice(1)}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No lab tests found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LabTestsSection;
