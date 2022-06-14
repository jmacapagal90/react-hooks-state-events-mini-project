import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
//console.log("Here's the data you're working with");
//console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTasks] = useState(TASKS);
  const [selectedCategory,setSelectedCategory] = useState("All")

  function handleDeleteTask(deletedTaskText){ 
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }
  function handleFilter(categoryText){
    //setCategory(categories.filter({category => category.category === category}))
    setSelectedCategory(categoryText)
  }
  
  const visibleTasks = tasks.filter((task)=> selectedCategory === "All" || task.category === selectedCategory)
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleFilter={handleFilter}/>
      <NewTaskForm />
      <TaskList tasks={visibleTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
