import React, { useState } from "react";

const SettingsSection = () => {
  // State for user settings
  const [settings, setSettings] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    password: "",
    notifications: true,
    theme: "light",
  });
  //Select darkmode theme
  useEffect(() => {
    document.documentElement.classList.toggle("dark", settings.theme === "dark");
  }, [settings.theme]);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission (e.g., save settings)
  const handleSaveSettings = (e) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
    alert("Settings have been updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>

        <form onSubmit={handleSaveSettings} className="space-y-6">
          {/* Profile Information */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Profile</h2>
            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={settings.name}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Password Update */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Change Password</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="password"
                value={settings.password}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Notifications */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>
            <div className="mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="notifications"
                  checked={settings.notifications}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Enable email notifications</span>
              </label>
            </div>
          </div>

          {/* Theme Preference */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Theme</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Choose Theme</label>
              <select
                name="theme"
                value={settings.theme}
                onChange={handleInputChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SettingsSection;
