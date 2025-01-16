import React, { useState } from "react";

const MessagesSection = () => {
  // Sample conversation data
  const [messages, setMessages] = useState([
    { id: 1, sender: "Patient", content: "Hello, I need help with my prescription.", timestamp: "2024-12-20 09:00" },
    { id: 2, sender: "Staff", content: "Sure! What seems to be the issue?", timestamp: "2024-12-20 09:05" },
    { id: 3, sender: "Patient", content: "I didn't receive the correct dosage instructions.", timestamp: "2024-12-20 09:10" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  // Function to send a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === "") return; // Prevent empty messages

    const newMessageObj = {
      id: messages.length + 1,
      sender: "Patient", // Assume current user is the patient
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    };

    setMessages((prevMessages) => [...prevMessages, newMessageObj]);
    setNewMessage(""); // Clear the input box
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Messages</h1>

        {/* Messages Display */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-md border border-gray-200">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === "Patient"
                  ? "text-right"
                  : "text-left"
              }`}
            >
              <p
                className={`inline-block p-3 rounded-lg ${
                  message.sender === "Patient"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {message.content}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {message.timestamp}
              </p>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="mt-4 flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessagesSection;
