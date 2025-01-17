import React, { useState } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"

const LabTestsList = () => {
  // Sample data for lab tests
  const [labTests, setLabTests] = useState([
    {
      id: 1,
      testName: "Complete Blood Count (CBC)",
      date: "2024-12-10",
      result: "Normal",
      note: "All parameters within normal range.",
    },
    {
      id: 2,
      testName: "Liver Function Test (LFT)",
      date: "2024-12-11",
      result: "Elevated ALT levels",
      note: "Indicates mild liver inflammation. Follow-up recommended.",
    },
    {
      id: 3,
      testName: "Cholesterol Test",
      date: "2024-12-12",
      result: "High LDL cholesterol",
      note: "Consider dietary changes and consult a specialist.",
    },
    {
      id: 4,
      testName: "Blood Sugar Test",
      date: "2024-12-13",
      result: "Normal",
      note: "Fasting and post-meal levels are within range.",
    },
  ]);

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen bg-gray-100 px-8 py-24">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lab Tests Performed</h1>

        {labTests.length > 0 ? (
          <div className="space-y-4">
            {labTests.map((test) => (
              <div
                key={test.id}
                className="p-4 bg-gray-50 border border-gray-200 rounded-md shadow"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {test.testName}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Date:</span> {test.date}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Result:</span> {test.result}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">Note:</span> {test.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No lab tests performed.</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default LabTestsList;
