import React,{useState} from "react";

function CategoryFilter({categories, selected, setSelected }) {

function handleClick(e){
  setSelected(e.target.value)
}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category, index) => (
        <button key={index} className = { selected === category ? 'selected' : '' } value = {category} onClick={handleClick}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
