import React, { Component } from "react";
import Description from "../description";

export default class TodoListItem extends Component {
    state = { done: false, edit: false };

    closeTask = () => {
        this.setState(state => {
            return { done: !state.done }
        })
    };
    editTask = () => {
        this.setState(state => {
            return { edit: !state.edit }
        })
    };
    render() {
        const { done, edit } = this.state;
        let { label, deleteItem } = this.props;
        const { closeTask, editTask } = this;
        let classname;

        if (done) classname = 'completed';
        else classname = null;

        if (edit) classname = 'editing';
        else classname = null;
        return (
            <li className={classname}>
                <div className="view">
                    <input type="checkbox" className="toggle" onClick={closeTask} />
                    <Description label={label} />
                    <button className="icon icon-edit" onClick={editTask} />
                    <button className="icon icon-destroy" onClick={deleteItem} />
                </div>
                <input className={classname === 'editing' ? 'edit' : 'hidden'} />
            </li>
        )
    }
}
