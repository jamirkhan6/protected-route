import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Read raw value from localStorage
      const raw = localStorage.getItem("signupData");
      let existing = [];

      if (raw) {
        // Try to parse; if parsing fails, we fallback to []
        try {
          const parsed = JSON.parse(raw);

          // If parsed is an array, use it.
          // If parsed is an object (older code stored single object), wrap it in an array.
          if (Array.isArray(parsed)) existing = parsed;
          else if (parsed && typeof parsed === "object") existing = [parsed];
          else existing = [];
        } catch (parseError) {
          console.warn(
            "Could not parse existing signupData, overwriting with new array.",
            parseError
          );
          existing = [];
        }
      }

      // Optional: add id/timestamp so entries are distinguishable
      const newUser = { ...formData, id: Date.now() };

      const updated = [...existing, newUser];

      localStorage.setItem("signupData", JSON.stringify(updated));
      console.log("Saved users:", updated);

      // Reset form
      setFormData({ username: "", email: "", password: "" });

      // Navigate after saving
      navigate("/signin");
    } catch (err) {
      console.error("Error saving signup data:", err);
      alert("Something went wrong while saving. See console for details.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/signin" className="text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
