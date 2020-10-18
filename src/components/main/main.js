import React, { Component } from "react";
import TodoList from "./Todo-list";
import Footer from "./footer";

export default class Main extends Component {
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
        const { deleteItem } = this;
        return (
            <section className="main">
                <TodoList todoData={todoData} deleteItem={deleteItem} />
                <Footer />
            </section>
        )
    }
};
