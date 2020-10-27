import React from "react";
import TodoList from "./Todo-list";
import Footer from "./footer";

const Main = ({ todoData, deleteItem, toggleDone, onEdit, editItemLabel,
                counter, filter, filterHandler, clear }) => {
    return (
        <section className="main">
            <TodoList
                todoData={todoData}
                deleteItem={deleteItem}
                toggleDone={toggleDone}
                onEdit={onEdit}
                editItemLabel={editItemLabel}
            />
            <Footer counter={counter}
                    filter={filter}
                    filterHandler={filterHandler}
                    clear={clear}
            />
        </section>
    )
};
export default Main;
