import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './app-header';
import NewTaskForm from './new-task-form';

const Header = ({ addItem }) => (
  <header className="header">
    <AppHeader />
    <NewTaskForm addItem={addItem} />
  </header>
);
export default Header;

Header.propTypes = {
  addItem: PropTypes.func.isRequired,
};
