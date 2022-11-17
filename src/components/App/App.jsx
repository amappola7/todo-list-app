import { Fragment , useState} from 'react';
import {
  ToDoCounter,
  ToDoSearch,
  ToDoList,
  ToDoItem,
  CreateToDoButton
} from '../components.js';
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
  let searchedToDos = [];

  if (searchValue.length === 0) {
    searchedToDos = toDoList;
  } else  {
    const lowerSearchValue = searchValue.toLowerCase();
    searchedToDos = toDoList.filter((toDo) => {
      toDo.text = toDo.text.toLowerCase()
      return toDo.text.includes(lowerSearchValue);
    })
  }

  return (
    <div>
      <ToDoCounter pendingToDos={toDoList.length} completedToDos={completedToDos}/>
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <ToDoList>
        {searchedToDos.map(todo => (<ToDoItem key={todo.text} text={todo.text}/>))}
      </ToDoList>
      <CreateToDoButton/>
    </div>
  )
}

export { App };