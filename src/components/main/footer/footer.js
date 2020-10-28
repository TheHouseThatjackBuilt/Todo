import React from "react";
import TaskFilter from "./TasksFilter";
import PropTypes from 'prop-types';

const Footer = ({ counter, filter, filterHandler, clear }) => {
    return (
        <footer className="footer">
            <span className="todo-count">{ counter } items left</span>
            <TaskFilter
                filter={filter}
                filterHandler={filterHandler}/>
            <button className="clear-completed" onClick={clear}>Clear completed</button>
        </footer>

    )
};
export default Footer;

Footer.propTypes = {
    counter: PropTypes.number.isRequired,                      // counter items
    filter:
        PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.oneOf([null]).isRequired]),       // filter for displayed items
    filterHandler: PropTypes.func.isRequired,                  // handler for filter
    clear: PropTypes.func.isRequired                           // clear done-list
};