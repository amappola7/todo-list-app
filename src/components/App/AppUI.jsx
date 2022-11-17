import React, { Fragment } from 'react';

import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from '../components.js';
import './AppUI.css'

function AppUI(
  {
    searchValue,
    setSearchValue,
    toDoList,
    setToDoList,
    searchedToDos,
    completedToDos,
  }
) {
  return (
    <Fragment>
      <ToDoCounter pendingToDos={toDoList.length} completedToDos={completedToDos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {searchedToDos.map(todo => (<ToDoItem key={todo.text} text={todo.text}/>))}
      </ToDoList>
      <CreateToDoButton/>
    </Fragment>
  )
}

export { AppUI };