import { Fragment , useState} from 'react';
import { AppUI } from './AppUI'

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
    <AppUI
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    toDoList={toDoList}
    setToDoList={setToDoList}
    searchedToDos={searchedToDos}
    completedToDos={completedToDos}
    />
  )
}

export { App };