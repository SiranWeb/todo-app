import React, { useState } from 'react';
import './App.css';

import TodoItem from './Components/TodoItem';

let todosList = [
  {descrp: 'Eat', id: 1, isChecked: false},
  {descrp: 'Sleep', id: 2, isChecked: false},
  {descrp: 'Code', id: 3, isChecked: false}
  ];

if (JSON.parse(localStorage.getItem('storageTodosList'))) {
  todosList = JSON.parse(localStorage.getItem('storageTodosList'));
}

function App() {
  function updateTodosView() {
    setTodos(todosList.map(item =>
    <TodoItem
      todo={item}
      key={item.id}
      removeTodoProp={removeTodo}
      setCheckProp={setCheck}
    />));
  };

  const [todos, setTodos] = useState(todosList.map(item =>
  <TodoItem
      todo={item}
      key={item.id}
      removeTodoProp={removeTodo}
      setCheckProp={setCheck}
    />));

  function addNewTodo() {
    const descrp = document.querySelector('#new-todo-text').value;
    document.querySelector('#new-todo-text').value = '';
    const id = todosList.length ? todosList[todosList.length - 1].id + 1 : 1;
    if (descrp) {
      todosList.push({descrp, id, isChecked: false});
    }
    updateStorageTodosList()
    updateTodosView();
  };

  function removeTodo(elem) {
    const updatedTodosList = todosList.filter(item => item.id !== +elem.id);
    todosList = updatedTodosList;
    updateStorageTodosList()
    updateTodosView();
  };

  function setCheck(elem) {
    for (let i = 0; i < todosList.length; i++) {
      if (+todosList[i].id === +elem.parentNode.parentNode.id) {
        todosList[i].isChecked = elem.checked;
        break;
      }
      
    }
    updateStorageTodosList()
    updateTodosView();
  }

  function updateStorageTodosList() {
    localStorage.setItem('storageTodosList', JSON.stringify(todosList));
  }

  document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addNewTodo();
    }
  });
  
  
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
