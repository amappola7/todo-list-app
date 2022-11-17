import React from 'react';
import './styles/ToDoCounter.css'


function ToDoCounter(props) {
  return (
    <h1>You have completed {props.completedToDos} of {props.pendingToDos} To Do's</h1>
  );
}

export { ToDoCounter };