import { Fragment } from 'react';
import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from './components/components.js';

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {todos.map(todo => (<ToDoItem key={todo.text} text={todo.text}/>))}
      </ToDoList>
      <CreateToDoButton/>
    </Fragment>
  )
}

export { App };