import React from 'react';

function TodoItem(props) {
    function handleRemoveTodo(e) {
        props.removeTodoProp(e.target.parentNode);
    }

    return(
        <div className="todo-item" id={props.todo.id}>
            <input type="checkbox" className="todo-checkbox" checked={props.todo.isChecked}/>
            <p className="todo-descrp">{props.todo.descrp}</p>
            <button onClick={handleRemoveTodo}>X</button>
        </div>
    );
};

export default TodoItem;