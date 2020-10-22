import React from "react";
import Description from "../description";

const TodoListItem = ({ label, done, edit, deleteItem, toggleDone, onEdit }) => {
    const classnameFunc = (complete, editing) => {
        if (complete) return 'completed' ;
        if (editing) return 'editing' ;
        return null
    };
    let classname = classnameFunc(done, edit);
    return (
        <li className={classname}>
            <div className="view">
                <input type="checkbox" className="toggle" onClick={toggleDone} />
                <Description label={label} />
                <button className="icon icon-edit" onClick={onEdit} />
                <button className="icon icon-destroy" onClick={deleteItem} />
            </div>
            <input className={classname === 'editing' ? 'edit' : 'hidden'} />
        </li>
    )
};
export default TodoListItem;




