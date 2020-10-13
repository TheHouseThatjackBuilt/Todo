import React from "react";
import './main.css';
import TodoList from "./Todo-list";
import Footer from "./footer";

const Main = () => {
    return (
        <section>
            <TodoList />
            <Footer />
        </section>
    )
};
export default Main;