import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem("loggedIn");

    // Optional: clear signup data too if you want
    // localStorage.removeItem("signupData");

    // Redirect to signin page
    navigate("/signin");
  };

  return (
    <div className="p-12 bg-gray-50 min-h-screen">
      {/* Header with title and logout */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>

      {/* Dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
          <p className="text-gray-600">View your site analytics and reports.</p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Users</h2>
          <p className="text-gray-600">
            Manage your users and their permissions.
          </p>
        </div>
        <div className="p-6 bg-white shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Settings</h2>
          <p className="text-gray-600">
            Configure your app settings and preferences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
