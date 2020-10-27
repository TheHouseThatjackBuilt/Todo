import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({ todoData, deleteItem, toggleDone, onEdit, editItemLabel }) => {

    const elements = todoData.map(({id, ...items}) => {
        return (
            <TodoListItem
                {...items}
                key={id}
                deleteItem={() => deleteItem(id)}
                toggleDone={() => toggleDone(id)}
                onEdit={() => onEdit(id)}
                editItemLabel={() => editItemLabel(id)}
            />
        )
    });
    return <ul className='todo-list'>{elements}</ul>;
};
export default TodoList;