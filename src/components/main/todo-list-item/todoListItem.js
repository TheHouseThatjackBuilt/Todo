import React from "react";
import './todoListItem.css';
import Description from "../description";

const TodoListItem = ({ todo }) => {
    return todo.map(({ label, classname, id }) => {
        return (
            <li key={id} className={classname}>
                <div className="view">
                    <input type="checkbox" className="toggle"/>
                    <Description label={label} />
                    <button className="icon icon-edit"/>
                    <button className="icon icon-destroy"/>
                </div>
            </li>
        )
    })
};
export default TodoListItem;