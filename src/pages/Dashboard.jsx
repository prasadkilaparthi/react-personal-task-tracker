import React from "react";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* sidebar */}
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">My Tasks</h1>
        <TaskList />
      </div>
    </div>
  );
};

export default Dashboard;
