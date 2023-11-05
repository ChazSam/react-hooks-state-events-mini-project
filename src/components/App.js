import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
const [selected, setSelected] = useState("All")
const [tasks, setTasks] = useState(TASKS)

function onTaskFormSubmit(newTask){
  setTasks([...tasks, newTask])
}

 const newTaskList =  tasks.filter((item) => selected === "All" ? item : item.category === selected)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelected={setSelected}  />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={newTaskList} setTasks={setTasks} />
    </div>
  );
  }
  export default App;

