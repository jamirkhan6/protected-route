import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./navigation";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <Navigation />
      <main className="flex-grow bg-gray-100">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white text-center p-4">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
