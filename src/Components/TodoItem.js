import React from 'react';

function TodoItem(props) {
    function handleRemoveTodo(e) {
        props.removeTodoProp(e.target.parentNode);
    }

    function handleSetCheck(e) {
        props.setCheckProp(e.target);
    }

    return(
        <div className="todo-item" id={props.todo.id}>
            <div>
            <input type="checkbox" className="todo-checkbox" onClick={handleSetCheck} defaultChecked={props.todo.isChecked}/>
            <p className="todo-descrp">{props.todo.descrp}</p>
            </div>
            <button className="remove-btn" onClick={handleRemoveTodo}>X</button>
        </div>
    );
};

export default TodoItem;