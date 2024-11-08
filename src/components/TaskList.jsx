import React from "react";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: "Design Dashboard",
      status: "To do",
    },
    {
      id: 2,
      title: "Develop Auth module",
      status: "In progress",
    },
    
  ];
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tasks.map((task, id) => (
        <TaskCard key={id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
