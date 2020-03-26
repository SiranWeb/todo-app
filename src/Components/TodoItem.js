import React from 'react';

function TodoItem(props) {
    return(
        <div className="todo-item">
            <input type="checkbox" className="todo-checkbox" checked={props.todo.isChecked}/>
            <p className="todo-descrp">{props.todo.descrp}</p>
        </div>
    );
};

export default TodoItem;