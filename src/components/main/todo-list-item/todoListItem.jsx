import React, { Component } from 'react';
import Description from '../description';
import PropTypes from 'prop-types';

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
    label: PropTypes.string, // property from todoData item
    done: PropTypes.bool, // property from todoData item
    edit: PropTypes.bool, // property from todoData item
    deleteItem: PropTypes.func, // to remove todoItems
    toggleDone: PropTypes.func, // toggle "Done" property
    onEdit: PropTypes.func, // toggle "Edit" property
    dateCreated: PropTypes.object, // property from todoData item
    classnameFunc: PropTypes.func, // toggle className property on li
  };
  onLabelChange = (e) => this.setState({ text: e.target.value });

  onSubmitLabel = (e) => {
    e.preventDefault();
    const { text } = this.state;
    const { editItemLabel, onEdit } = this.props;

    if (text.length < 1) return;
    editItemLabel()(text);
    this.setState({ text: '' });
    onEdit();
  };
  render() {
    const {
      label,
      done,
      edit,
      deleteItem,
      toggleDone,
      onEdit,
      dateCreated,
      classnameFunc,
    } = this.props;
    const { onLabelChange, onSubmitLabel } = this;
    const { text } = this.state;
    const classname = classnameFunc(done, edit);

    return (
      <li className={classname}>
        <div className="view">
          <input type="checkbox" className="toggle" onClick={toggleDone} defaultChecked={done} />
          <Description label={label} dateCreated={dateCreated} />
          <button className="icon icon-edit" onClick={onEdit} />
          <button className="icon icon-destroy" onClick={deleteItem} />
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
    );
  }
}
