import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from '../description';

export default class TodoListItem extends Component {
  state = { text: '' };

  static defaultProps = {
    classnameFunc: (complete, editing) => {
      if (complete) return 'completed';
      if (editing) return 'editing';
      return null;
    },
  };

  static propTypes = {
    label: PropTypes.string.isRequired, // property from todoData item
    done: PropTypes.bool.isRequired, // property from todoData item
    edit: PropTypes.bool.isRequired, // property from todoData item
    deleteItem: PropTypes.func.isRequired, // to remove todoItems
    toggleDone: PropTypes.func.isRequired, // toggle "Done" property
    onEdit: PropTypes.func.isRequired, // toggle "Edit" property
    editItemLabel: PropTypes.func.isRequired, // etit func
    dateCreated: PropTypes.shape({ root: PropTypes.string.isRequired }).isRequired, // property from todoData item
    classnameFunc: PropTypes.func, // toggle className property on li
  };

  onLabelChange = (event) => this.setState({ text: event.target.value });

  onSubmitLabel = (event) => {
    event.preventDefault();
    const { text } = this.state;
    const { editItemLabel, onEdit } = this.props;

    if (text.length < 1) return;
    editItemLabel()(text);
    this.setState({ text: '' });
    onEdit();
  };

  render() {
    const {
      label, done, edit, deleteItem, toggleDone, onEdit, dateCreated, classnameFunc,
    } = this.props;
    const { onLabelChange, onSubmitLabel } = this;
    const { text } = this.state;
    const classname = classnameFunc(done, edit);

    return (
      <li className={classname}>
        <div className="view">
          <input type="checkbox" className="toggle" onClick={toggleDone} defaultChecked={done} />
          <Description label={label} dateCreated={dateCreated} />
          <button label="icon-edit" type="button" className="icon icon-edit" onClick={onEdit} />
          <button label="icon-delete" type="button" className="icon icon-destroy" onClick={deleteItem} />
        </div>
        <form onSubmit={onSubmitLabel}>
          <input className={classname === 'editing' ? 'edit' : 'hidden'} onChange={onLabelChange} value={text} />
        </form>
      </li>
    );
  }
}
