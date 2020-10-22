import React from "react";
import TodoList from "./Todo-list";
import Footer from "./footer";

const Main = ({todoData, deleteItem, toggleDone, onEdit}) => {
    return (
        <section className="main">
            <TodoList
                todoData={todoData}
                deleteItem={deleteItem}
                toggleDone={toggleDone}
                onEdit={onEdit}
            />
            <Footer />
        </section>
    )
};
export default Main;
