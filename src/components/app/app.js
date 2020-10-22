import React, { Component } from "react";
import './app.css';
import Header from "../header";
import Main from "../main";

export default class App extends Component {
    maxId = 1;
    createTodoItem = label => ({
        label,
        done: false,
        edit: false,
        id: this.maxId++
    });
    toggleProperty = (arr, index, property = null) => {
        const newData = [...arr];
        let newItem = newData.find(({ id }) => id === index);
        newItem[property] ? newItem[property] = false : newItem[property] = true;
        return newData;

    };
    onToggleDone = id => {
        this.setState(({ todoData }) => ({todoData: this.toggleProperty(todoData, id, 'done')}))
    };
    onEdit = id => {
        this.setState(({ todoData }) => ({todoData: this.toggleProperty(todoData, id, 'edit')}))
    };
    deleteItem = index => {
        this.setState(({ todoData }) => {
            const findIndex = todoData.findIndex(({ id }) => id === index);
            const newData = [...todoData];
            newData.splice(findIndex, 1);
            return { todoData: [...newData] }
        })
    };
    state = {
        todoData: [
            this.createTodoItem('Eat'),
            this.createTodoItem('Drink'),
            this.createTodoItem('Relax'),
        ]
    };
    render() {
        const { todoData } = this.state;
        const  { deleteItem, onToggleDone, onEdit } = this;

        return (
            <section className='app'>
                <Header />
                <Main
                    todoData={todoData}
                    deleteItem={deleteItem}
                    toggleDone={onToggleDone}
                    onEdit={onEdit}
                />
            </section>
        )
    }
}