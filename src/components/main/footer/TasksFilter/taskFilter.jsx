import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TaskFilter extends Component {
  button = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  static propTypes = {
    filter: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]).isRequired, // filter for displayed items
    filterHandler: PropTypes.func.isRequired, // handler for filter
  };

  render() {
    const { button } = this;
    const { filter, filterHandler } = this.props;
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
  }
}
