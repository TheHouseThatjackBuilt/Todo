import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
  state = {
    label: '',
  };

  static propTypes = {
    addItem: PropTypes.func.isRequired,
  };

  onLabelChange = (event) => this.setState({ label: event.target.value });

  onSubmitLabel = (event) => {
    const { label } = this.state;
    const { addItem } = this.props;
    event.preventDefault();
    if (label.length < 1) return;
    addItem(label);
    this.setState({ label: '' });
  };

  render() {
    const { onLabelChange, onSubmitLabel } = this;
    const { label } = this.state;

    return (
      <form onSubmit={onSubmitLabel}>
        <input
          type="text"
          name="onInput"
          onChange={onLabelChange}
          placeholder="What needs to be done?"
          className="new-todo"
          value={label}
        />
      </form>
    );
  }
}
