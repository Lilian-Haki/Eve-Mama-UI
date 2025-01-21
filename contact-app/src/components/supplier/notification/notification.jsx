import React, { useState } from "react";

const NotificationsSection = () => {
  // Sample notification data
  const [notifications, setNotifications] = useState([
    { id: 1, title: "Appointment Confirmed", content: "Your appointment on 2024-12-22 is confirmed.", read: false, timestamp: "2024-12-20 09:00" },
    { id: 2, title: "New Lab Results", content: "Your lab results are now available. Please review them.", read: false, timestamp: "2024-12-19 14:30" },
    { id: 3, title: "Payment Reminder", content: "Your payment for the last visit is pending. Please pay before 2024-12-25.", read: true, timestamp: "2024-12-18 16:00" },
  ]);
  // const [filter, setFilter] = useState("all");

  // const filteredNotifications = notifications.filter((notif) => {
  //   if (filter === "unread") return !notif.read;
  //   if (filter === "read") return notif.read;
  //   return true;
  // });
  
  // Mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  // Delete a notification
  const deleteNotification = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notif) => notif.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Notifications</h1>

        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-4 border rounded-md shadow ${
                  notif.read ? "bg-gray-100 border-gray-300" : "bg-blue-50 border-blue-400"
                }`}
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold text-gray-800">{notif.title}</p>
                    <p className="text-sm text-gray-700">{notif.content}</p>
                    <p className="text-xs text-gray-500 mt-1">{notif.timestamp}</p>
                  </div>
                  {!notif.read && (
                    <button
                      onClick={() => markAsRead(notif.id)}
                      className="text-blue-500 text-sm hover:underline"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
                <button
                  onClick={() => deleteNotification(notif.id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsSection;
