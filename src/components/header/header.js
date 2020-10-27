import React from "react";
import AppHeader from './app-header';
import NewTaskForm from './new-task-form';

const Header = ({ addItem, editItemLabel }) => {
    return (
        <header className='header'>
            <AppHeader />
            <NewTaskForm
                addItem={addItem}
                editItemLabel={editItemLabel}
            />
        </header>
    )
};
export default Header;