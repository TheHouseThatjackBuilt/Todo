import React, { useState } from 'react';
import { func } from 'prop-types';

const NewTaskForm = ({ addItem }) => {
  const [label, setLabel] = useState('');

  const onLabelChange = (event) => setLabel(event.target.value);

  const onSubmitLabel = (event) => {
    event.preventDefault();
    if (label.length < 1) return;
    addItem(label);
    setLabel('');
  };

  return (
    <form onSubmit={onSubmitLabel}>
      <input
        type="text"
        name="onInput"
        onChange={onLabelChange}
        placeholder="What needs to be done?"
        className="new-todo"
        value={label}
      />
    </form>
  );
};

NewTaskForm.propTypes = {
  addItem: func.isRequired,
};

export default NewTaskForm;
