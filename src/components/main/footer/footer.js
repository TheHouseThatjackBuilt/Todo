import React from "react";
import TaskFilter from "./TasksFilter";

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