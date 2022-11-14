import { Fragment } from 'react';
import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from './components/components.js';

function App() {
  return (
    <Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList/>
      <ToDoItem/>
      <CreateToDoButton/>
    </Fragment>
  )
}

export { App };