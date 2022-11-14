import React from 'react';

function ToDoItem(props) {
  return (
    <li>
      <span><i className="fa-solid fa-check"></i></span>
      <p>{props.text}</p>
      <span><i className="fa-solid fa-xmark"></i></span>
    </li>
  );
}

export { ToDoItem };