import React, { useState } from "react";

function Task({tasks,handleDeleteTask}) {

  //map over the tasks and create div cards for each
   const TaskCard = 
    tasks.map((task)=>(
      <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
        <button className="delete" onClick={()=>handleDeleteTask(task.text)}>X</button>
      </div>
   ))
  //return JSX of the cards
  return (
    <>{TaskCard}</>
  )
}

export default Task;
