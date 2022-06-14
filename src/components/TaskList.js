import React from "react";
import Task from "./Task";

function TaskList({tasks,handleDeleteTask}) {

  return (
    <div className="tasks">
      <Task key={tasks.text} tasks={tasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default TaskList;
