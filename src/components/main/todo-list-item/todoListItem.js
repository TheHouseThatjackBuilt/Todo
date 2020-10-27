import React, { Component } from "react";
import Description from "../description";

export default class TodoListItem extends Component {

    state = { text: '' };

    classnameFunc = (complete, editing) => {
        if (complete) return 'completed' ;
        if (editing) return 'editing' ;
        return null
    };
    onLabelChange = e => this.setState({ text: e.target.value });

    onSubmitLabel = e => {
        e.preventDefault();
        const { text } = this.state;
        const { editItemLabel, onEdit } = this.props;

        if (text.length < 1) return;
        editItemLabel()(text);
        this.setState({ text: ''});
        onEdit();
    };
    render() {
        const { label, done, edit, deleteItem, toggleDone, onEdit } = this.props;
        const { onLabelChange, onSubmitLabel, classnameFunc } = this;
        const { text } = this.state;
        let classname  = classnameFunc(done, edit);

        return (
            <li className={classname}>
                <div className="view">
                    <input type="checkbox"
                           className="toggle"
                           onClick={toggleDone}
                           defaultChecked={done} />
                    <Description label={label} />
                    <button className="icon icon-edit"
                            onClick={onEdit} />
                    <button className="icon icon-destroy"
                            onClick={deleteItem} />
                </div>
                <form onSubmit={onSubmitLabel}>
                    <input
                        className={classname === 'editing' ? 'edit' : 'hidden'}
                        onChange={onLabelChange}
                        value={text}
                        autoFocus
                    />
                </form>
            </li>
        )
    }
}

