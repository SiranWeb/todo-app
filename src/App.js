import React, { useState } from 'react';
import './App.css';

import TodoItem from './Components/TodoItem';

let todosList = [
  {descrp: 'Eat', id: 1},
  {descrp: 'Sleep', id: 2},
  {descrp: 'Code', id: 3}
  ];

function App() {
  

  function updateTodosView() {
    setTodos(todosList.map(item => <TodoItem todo={item} key={item.id} removeTodoProp={removeTodo} />));
  };

  const [todos, setTodos] = useState(todosList.map(item => <TodoItem todo={item} key={item.id} removeTodoProp={removeTodo} />));

  function addNewTodo() {
    const descrp = document.querySelector('#new-todo-text').value;
    const id = todosList.length ? todosList[todosList.length - 1].id + 1 : 1;
    todosList.push({descrp, id});
    updateTodosView();
  };

  function removeTodo(elem) {
    const updatedTodosList = todosList.filter(item => item.id !== +elem.id);
    console.log(elem.id);
    todosList = updatedTodosList;
    updateTodosView();
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
