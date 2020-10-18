import React from "react";
import TodoListItem from "../todo-list-item";

const TodoList = ({todoData, deleteItem}) => {
    const elements = todoData.map(({id, ...items}) => {
        return (
            <TodoListItem
                {...items}
                key={id}
                deleteItem={() => deleteItem(id)}/>
        )
    });
    return <ul className='todo-list'>{elements}</ul>;
};
export default TodoList;