import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-4">Welcome to MyApp</h1>
      <p className="text-xl text-gray-700">This is the Home Page</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
};

export default Home;
