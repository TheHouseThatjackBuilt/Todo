import React from 'react';
import PropTypes from 'prop-types';
import TaskFilter from './TasksFilter';

const Footer = ({
  counter, filter, filterHandler, clear,
}) => (
  <footer className="footer">
    <span className="todo-count">
      {counter}
      {' '}
      items left
    </span>
    <TaskFilter filter={filter} filterHandler={filterHandler} />
    <button type="button" className="clear-completed" onClick={clear}>
      Clear completed
    </button>
  </footer>
);
export default Footer;

Footer.propTypes = {
  counter: PropTypes.number.isRequired, // counter items
  filter: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]).isRequired, // filter for displayed items
  filterHandler: PropTypes.func.isRequired, // handler for filter
  clear: PropTypes.func.isRequired, // clear done-list
};
