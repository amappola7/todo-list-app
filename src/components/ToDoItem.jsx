import React from 'react';
import './styles/ToDoItem.css'

function ToDoItem(props) {
  const onComplete = () => alert(`You have completed ${props.text}`);

  const onDelete = () => alert(`You have deleted ${props.text}`);

  return (
    <li>
      <span onClick={onComplete}><i className="fa-solid fa-check"></i></span>
      <p>{props.text}</p>
      <span onClick={onDelete}><i className="fa-solid fa-xmark"></i></span>
    </li>
  );
}

export { ToDoItem };