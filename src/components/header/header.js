import React from "react";
import AppHeader from './app-header';
import NewTaskForm from './new-task-form';

const Header = () => {
    return (
        <header className='header'>
            <AppHeader />
            <NewTaskForm />
        </header>
    )
};
export default Header;