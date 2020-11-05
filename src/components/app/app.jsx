import React, { Component } from 'react';
import './app.css';
import Header from '../header';
import Main from '../main';

export default class App extends Component {
  id = 0;

  state = {
    todoData: [],
    filter: 'all',
  };

  createTodoItem = (label) => ({
    label,
    done: false,
    edit: false,
    id: this.id++,
    dateCreated: Date.now(),
  });

  addItem = (label) => {
    const newItem = this.createTodoItem(label);
    this.setState(({ todoData }) => ({ todoData: [...todoData, newItem] }));
  };

  toggleProperty = (arr, index, property) => {
    const newData = [...arr];
    const newItem = newData.find(({ id }) => id === index);
    newItem[property] = !newItem[property];
    return newData;
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => ({ todoData: this.toggleProperty(todoData, id, 'done') }));
  };

  checkingEditProperty = () => {
    const { todoData } = this.state;
    return todoData.filter((element) => element.edit === true);
  };

  onEdit = (id) => {
    this.setState(({ todoData }) => ({ todoData: this.toggleProperty(todoData, id, 'edit') }));
  };

  editItemLabel = (index) => (value) => {
    this.setState(({ todoData }) => {
      const newData = [...todoData];
      const newItem = newData.find(({ id }) => id === index);
      newItem.label = value;
      return { todoData: [...newData] };
    });
  };

  deleteItem = (index) => {
    this.setState(({ todoData }) => {
      const newData = [...todoData];
      const findIndex = newData.findIndex(({ id }) => id === index);
      newData.splice(findIndex, 1);
      return { todoData: [...newData] };
    });
  };

  filterTodoData = (items, filter) => {
    switch (filter) {
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

  filterHandler = (filter) => this.setState({ filter });

  clearCompleteItems = () => {
    this.setState(({ todoData }) => {
      const newData = todoData.filter((item) => item.done === false);
      return { todoData: newData };
    });
  };

  render() {
    const { todoData, filter } = this.state;
    const {
      deleteItem,
      onToggleDone,
      onEdit,
      addItem,
      editItemLabel,
      filterTodoData,
      filterHandler,
      clearCompleteItems,
    } = this;
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
  }
}
