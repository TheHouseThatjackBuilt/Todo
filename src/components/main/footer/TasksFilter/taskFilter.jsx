import React from 'react';
import { string, func } from 'prop-types';

const TaskFilter = ({ filter, filterHandler }) => {
  const button = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  const buttons = button.map(({ name, label }) => {
    const classname = filter === name ? 'selected' : null;
    return (
      <li key={name}>
        <button type="button" key={name} className={classname} onClick={() => filterHandler(name)}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className="filters">{buttons}</ul>;
};

export default TaskFilter;

TaskFilter.propTypes = {
  filter: string.isRequired, // filter for displayed items
  filterHandler: func.isRequired, // handler for filter
};
