import React from "react";
import Task from "./Task";

function TaskList({tasks, setTasks}) {

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index)=> 
        <Task key={index} text={task.text} category={task.category}  tasks={tasks} setTasks={setTasks}/> 
      )}
   
   </div>
  );
}

export default TaskList;



