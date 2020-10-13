import React from "react";
import './todoList.css';
import TodoListItem from "../todo-list-item";

const TodoList = () => {
    const todoData = [
        {label: "Eat", classname: 'completed', id: 1},
        {label: "Drink", classname: 'editing', id: 2},
        {label: "Relax", classname: 'clean', id: 3},
    ];
    return (
        <ul className='todo-list'>
            <TodoListItem todo={todoData} />
        </ul>
    )
};
export default TodoList;