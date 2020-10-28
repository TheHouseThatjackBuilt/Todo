import React,{ Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {

    state = {
        label: '',
    };
    static propTypes = {
        onLabelChange: PropTypes.func,
        onSubmitLabel: PropTypes.func,
    };
    onLabelChange = e => this.setState({ label: e.target.value });

    onSubmitLabel = e => {
        const { label } = this.state;
        const { addItem } = this.props;
        e.preventDefault();
        if (label.length < 1) return;
        addItem(label);
        return this.setState({
            label: ''
        })
    };
    render() {
        const { onLabelChange, onSubmitLabel } = this;
        const { label } = this.state;

        return (
            <form onSubmit={onSubmitLabel}>
                <input
                    type="text"
                    name='onInput'
                    onChange={onLabelChange}
                    placeholder="What needs to be done?"
                    className="new-todo"
                    value={label}
                    autoFocus
                />
            </form>
        )
    }
}


