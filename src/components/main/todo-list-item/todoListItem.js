import React, { Component } from "react";
import Description from "../description";

export default class TodoListItem extends Component {
    state = { complete: false, edit: false };

    classnameFunc = (complete, edit) => {
        if (complete) return 'completed' ;
        if (edit) return 'editing' ;
        return null
    };

    closeTask = () => {
        this.setState(state => {
            return { complete: !state.complete }
        })
    };
    editTask = () => {
        this.setState(state => {
            return { edit: !state.edit }
        })
    };
    render() {
        const { complete, edit } = this.state;
        let { label, deleteItem } = this.props;
        const { closeTask, editTask, classnameFunc } = this;
        let classname = classnameFunc(complete, edit);

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
