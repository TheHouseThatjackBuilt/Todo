import React from "react";
import AppHeader from './app-header';
import NewTaskForm from './new-task-form';
import PropTypes from 'prop-types';

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

Header.propTypes = {
    addItem: PropTypes.func,
    editItemLabel: PropTypes.func
};