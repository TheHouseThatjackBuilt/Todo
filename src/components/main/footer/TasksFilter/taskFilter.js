import React, { Component } from "react";

export default class TaskFilter extends Component {

    button = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' },
    ];
    render() {
        const { button } = this;
        const { filter, filterHandler } = this.props;
        const buttons = button.map(({ name, label }) => {
            const classname = filter === name ? 'selected' : null;
            return (
                <li key={name}>
                    <button type='button'
                            key={name}
                            className={classname}
                            onClick={() => filterHandler(name)}>
                        { label }
                    </button>
                </li>
            )
        });
        return (

            <ul className="filters">
                {buttons}
            </ul>
        )
    }
};
