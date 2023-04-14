import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {ToDoList} from './features/ToDoList/ToDoList'
import {AddToDo} from './features/ToDoList/AddToDo'

import {IItem} from './features/types/todo'

const App: React.FC = () => {
  const [toDos, setToDos] = useState<IItem[]>([]);

  const toDoAddHandler = (toDo: IItem) => {
    setToDos((prevToDos) => {
      return [
        ...prevToDos,
        {
          id: Math.random().toString(),
          title: toDo.title
        }
      ]
    })
  }

  const toDoDeleteHandler = (id: string) => {
    setToDos((prevToDos) => {
      return prevToDos.filter((el) => {
        return el.id !== id;
      })
    })
  }
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <h2>.tsx</h2>
        <ToDoList toDos={toDos} onDeleteToDo={toDoDeleteHandler} />
        <AddToDo onAddToDo={toDoAddHandler} />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {/* <span> */}
          {/* <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span> */}
      </header>
    </div>
  );
}

export default App;
