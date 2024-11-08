import React from "react";

const TaskCard = ({task}) => {
  return (
    <div className="p-4 bg-white rounded shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.status}</p>
      {/* <h2 className="text-md text-gray-800 font-semibold"></h2> */}
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded text-sm">Mark as completed</button>
    </div>
  );
};

export default TaskCard;
