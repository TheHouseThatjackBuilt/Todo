import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '../todo-list-item';

const TodoList = ({
  todoData, deleteItem, toggleDone, onEdit, editItemLabel,
}) => {
  const elements = todoData.map(({ id, ...items }) => (
    <TodoListItem
      {...items}
      key={id}
      deleteItem={() => deleteItem(id)}
      toggleDone={() => toggleDone(id)}
      onEdit={() => onEdit(id)}
      editItemLabel={() => editItemLabel(id)}
    />
  ));
  return <ul className="todo-list">{elements}</ul>;
};
export default TodoList;

TodoList.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired, // the array of todoData objects
  deleteItem: PropTypes.func.isRequired, // to remove todoItem
  toggleDone: PropTypes.func.isRequired, // toggle "Done" property
  onEdit: PropTypes.func.isRequired, // toggle "Edit" property
  editItemLabel: PropTypes.func.isRequired, // edit "label" property on todoData obj
};
