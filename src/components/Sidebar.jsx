import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 h-screen w-64 bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-semibold mb-4">Filter</h2>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded text-sm font-semibold">
        Add new task
      </button>
    </div>
  );
};

export default Sidebar;
