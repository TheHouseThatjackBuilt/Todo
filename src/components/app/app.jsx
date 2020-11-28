import React, { useState } from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';

const App = () => {
  const [todoData, setTodoData] = useState([]);
  const [filter, setFilter] = useState('all');

  const createTodoItem = (label) => ({
    label,
    done: false,
    edit: false,
    dateCreated: Date.now(),
    id: `${Date.now()}${label}`,
  });

  const addItem = (label) => {
    const newItem = createTodoItem(label);
    setTodoData([...todoData, newItem]);
  };

  const toggleProperty = (arr, index, property) => {
    const newData = [...arr];
    const newItem = newData.find(({ id }) => id === index);
    newItem[property] = !newItem[property];
    return newData;
  };

  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  };

  const checkingDoneProperty = (index) => todoData.find(({ id }) => id === index);

  const onEdit = (id) => {
    const onDone = checkingDoneProperty(id);
    if (onDone.done) return;
    setTodoData(toggleProperty(todoData, id, 'edit'));
  };

  const editItemLabel = (index) => (value) => {
    const newData = [...todoData];
    const newItem = newData.find(({ id }) => id === index);
    newItem.label = value;

    setTodoData(newData);
  };

  const deleteItem = (index) => {
    const newData = [...todoData];
    const findIndex = newData.findIndex(({ id }) => id === index);
    newData.splice(findIndex, 1);

    setTodoData(newData);
  };

  const filterTodoData = (items, theFilter) => {
    switch (theFilter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((el) => !el.done);
      case 'completed':
        return items.filter((el) => el.done);
      default:
        return items;
    }
  };

  const filterHandler = (theFilter) => setFilter(theFilter);

  const clearCompleteItems = () => {
    const newData = todoData.filter((item) => !item.done);
    setTodoData(newData);
  };
  const completeTask = todoData.filter((el) => !el.done).length;
  const show = filterTodoData(todoData, filter);

  return (
    <section className="app">
      <Header addItem={addItem} />
      <Main
        todoData={show}
        deleteItem={deleteItem}
        toggleDone={onToggleDone}
        onEdit={onEdit}
        editItemLabel={editItemLabel}
        counter={completeTask}
        filter={filter}
        filterHandler={filterHandler}
        clear={clearCompleteItems}
      />
    </section>
  );
};

export default App;
