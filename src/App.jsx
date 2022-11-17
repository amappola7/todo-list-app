import { Fragment , useState} from 'react';
import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from './components/components.js';
import './App.css'

const defaultTodos=[
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:true}
];

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [toDoList, setToDoList] = useState(defaultTodos)

  const completedToDos = toDoList.filter(toDo => toDo.completed).length;

  return (
    <div>
      <ToDoCounter pendingToDos={toDoList.length} completedToDos={completedToDos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {toDoList.map(todo => (<ToDoItem key={todo.text} text={todo.text}/>))}
      </ToDoList>
      <CreateToDoButton/>
    </div>
  )
}

export { App };