import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Description from '../description';
import { classnameFunc } from '../../../utils';

const TodoListItem = ({
  label, done, edit, deleteItem, toggleDone, onEdit, editItemLabel, dateCreated,
}) => {
  const [text, setText] = useState(label);

  const onLabelChange = (event) => setText(event.target.value);

  const onSubmitLabel = (event) => {
    event.preventDefault();

    if (text.length < 1) return;
    editItemLabel()(text);
    setText('');
    onEdit();
  };

  const classname = classnameFunc(done, edit);

  return (
    <li className={classname}>
      <div className="view">
        <input type="checkbox" className="toggle" onClick={toggleDone} defaultChecked={done} />
        <Description label={label} dateCreated={dateCreated} />
        <button label="icon-edit" type="button" className="icon icon-edit" onClick={onEdit} />
        <button label="icon-destroy" type="button" className="icon icon-destroy" onClick={deleteItem} />
      </div>
      <form onSubmit={onSubmitLabel}>
        <input className={classname === 'editing' ? 'edit' : 'hidden'} onChange={onLabelChange} value={text} />
      </form>
    </li>
  );
};

export default TodoListItem;

TodoListItem.propTypes = {
  label: PropTypes.string.isRequired, // property from todoData item
  done: PropTypes.bool.isRequired, // property from todoData item
  edit: PropTypes.bool.isRequired, // property from todoData item
  deleteItem: PropTypes.func.isRequired, // to remove todoItems
  toggleDone: PropTypes.func.isRequired, // toggle "Done" property
  onEdit: PropTypes.func.isRequired, // toggle "Edit" property
  editItemLabel: PropTypes.func.isRequired, // edit func
  dateCreated: PropTypes.number.isRequired, // property from todoData item
};
