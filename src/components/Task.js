import React from "react";

function Task({text, category, tasks, setTasks}) {

  function deleteTask(e){
   const newTaskList =  tasks.filter((item)=> item.text !== e.target.value)
    setTasks(newTaskList)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteTask} value={text}>X</button>
    </div>
  );
}

export default Task;

