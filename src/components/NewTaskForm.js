import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

const[newTask, setNewTask] = useState({
  text: "",
  category: "Code"
})

function handleCatChange(e){
  setNewTask({
    ...newTask, 
    category:e.target.value})
}
function handleChange(e){
  setNewTask({
    ...newTask,
    text:e.target.value
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  onTaskFormSubmit(newTask)
}
const newCategory=categories.slice(1)

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} value={newTask.details}/>
      </label>
      <label>
        Category
        <select name="category" onChange = {handleCatChange}>
          {newCategory.map((category, index)=>(
            <option key={index}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;
