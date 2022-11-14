import { Fragment } from 'react';
import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from './components/components.js';
import './App.css'

const todos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];

function App() {
  return (
    <div>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {todos.map(todo => (<ToDoItem key={todo.text} text={todo.text}/>))}
      </ToDoList>
      <CreateToDoButton/>
    </div>
  )
}

export { App };