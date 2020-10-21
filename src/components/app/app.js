import React, { Component } from "react";
import './app.css';
import Header from "../header";
import Main from "../main";

export default class App extends Component {
    state = {
        todoData: [
            {label: "Eat", classname: 'completed', id: 1},
            {label: "Drink", classname: null, id: 2},
            {label: "Relax", id: 3},
        ]
    };
    deleteItem = index => {
        this.setState(({ todoData }) => {
            const findIndex = todoData.findIndex(({ id }) => id === index);
            const newData = [...todoData];
            newData.splice(findIndex, 1);
            return { todoData: [...newData] }
        })
    };
    render() {
        const { todoData } = this.state;
        const  { deleteItem } = this;

        return (
            <section className='app'>
                <Header />
                <Main todoData={todoData} deleteItem={deleteItem} />
            </section>
        )
    }
}