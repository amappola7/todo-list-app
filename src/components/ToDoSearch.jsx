import React from 'react';
import './styles/ToDoSearch.css'

function ToDoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <input
      placeholder='Search your To Do'
      type='text'
      onChange={onSearchValueChange}
    />
  );
}

export { ToDoSearch };