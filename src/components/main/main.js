import React from "react";
import TodoList from "./Todo-list";
import Footer from "./footer";

const Main = ({todoData, deleteItem}) => {
    return (
        <section className="main">
            <TodoList todoData={todoData} deleteItem={deleteItem} />
            <Footer />
        </section>
    )
};
export default Main;
