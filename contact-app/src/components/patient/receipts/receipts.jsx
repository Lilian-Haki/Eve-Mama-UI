import React, { useRef } from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"
import { useReactToPrint } from "react-to-print";

const ReceiptList = () => {
  // Sample receipt data
  const receipts = [
    {
      id: 1,
      date: "2024-12-15",
      patientName: "Sophia Johnson",
      amount: "200 USD",
      details: "Consultation and medications",
    },
    {
      id: 2,
      date: "2024-12-12",
      patientName: "Liam Williams",
      amount: "150 USD",
      details: "Routine check-up",
    },
    {
      id: 3,
      date: "2024-12-10",
      patientName: "Emma Brown",
      amount: "250 USD",
      details: "Blood tests and prescription",
    },
  ];

  // Ref for printing specific content
  const printRef = useRef();

  // Print handler using react-to-print
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <div>
    <TopNav/>
    <SideNav/>    
    <div className="ml-[270px] min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Receipts</h1>

        <div ref={printRef}>
          {receipts.map((receipt) => (
            <div
              key={receipt.id}
              className="p-4 mb-4 bg-gray-50 border border-gray-200 rounded-md shadow"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {receipt.patientName}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Date:</span> {receipt.date}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Amount:</span> {receipt.amount}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-bold">Details:</span> {receipt.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handlePrint}
          className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
        >
          Print Receipts
        </button>
      </div>
    </div>
    </div>
  );
};

export default ReceiptList;
