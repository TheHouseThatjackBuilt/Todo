import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './Todo-list';
import Footer from './footer';

const Main = ({
  todoData,
  deleteItem,
  toggleDone,
  onEdit,
  editItemLabel,
  counter,
  filter,
  filterHandler,
  clear,
}) => (
  <section className="main">
    <TodoList
      todoData={todoData}
      deleteItem={deleteItem}
      toggleDone={toggleDone}
      onEdit={onEdit}
      editItemLabel={editItemLabel}
    />
    <Footer counter={counter} filter={filter} filterHandler={filterHandler} clear={clear} />
  </section>
);
export default Main;

Main.propTypes = {
  todoData: PropTypes.arrayOf(PropTypes.object).isRequired, // the array of todoData objects
  deleteItem: PropTypes.func.isRequired, // to remove todoItems
  toggleDone: PropTypes.func.isRequired, // toggle "Done" property
  onEdit: PropTypes.func.isRequired, // toggle "Edit" property
  editItemLabel: PropTypes.func.isRequired, // edit "label" property on todoData obj
  counter: PropTypes.number.isRequired, // counter items
  filter: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]), // filter for displayed items
  filterHandler: PropTypes.func.isRequired, // handler for filter
  clear: PropTypes.func.isRequired, // clear done-list
};
