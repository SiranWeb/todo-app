import React, { useState } from 'react';
import './App.css';

import TodoItem from './Components/TodoItem';

let todosList = [
  {descrp: 'Eat', id: 1},
  {descrp: 'Sleep', id: 2},
  {descrp: 'Code', id: 3}
  ];

function App() {
  const [todos, setTodos] = useState(todosList.map(item => <TodoItem todo={item} key={item.id} />));

  function addNewTodo() {
    const descrp = document.querySelector('#new-todo-text').value;
    const id = todosList[todosList.length - 1].id + 1 || 1; 
    todosList.push({descrp, id});
    setTodos(todosList.map(item => <TodoItem todo={item} key={item.id} />));
  };

  return (
    <div className="app">
      <h1>My Todo App on React</h1>
      <div className="add-todo">
        <input type="text" placeholder="Insert text..." id="new-todo-text"/>
        <button id="add-todo-btn" onClick={addNewTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        {todos}
      </div>
    </div>
  );
}

export default App;
