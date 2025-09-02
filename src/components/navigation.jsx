import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">MyApp</div>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/about" className="hover:underline">
          About
        </Link>
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/signin" className="hover:underline">
          Sign In
        </Link>
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
