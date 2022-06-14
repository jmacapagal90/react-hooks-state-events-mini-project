import React from "react";

function CategoryFilter({categories,selectedCategory,handleFilter}) {

  const CategoryButton = categories.map((category) =>  {
      const className = category === selectedCategory ? "selected" : null
      return (
       <button className={className} onClick={()=>handleFilter(category)}>{category}</button>
  )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CategoryButton}
    </div>
  );
}

export default CategoryFilter;
