import React, { Component } from "react";
import { formatDistance, subSeconds } from 'date-fns';
import PropTypes from 'prop-types';

export default class Description extends Component {

    state = {
        time: 0
    };
    static propTypes = {
        label: PropTypes.string,        // property from todoData item
        dateCreated: PropTypes.object   // property from todoData item
    };
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({
            time: (new Date() - this.props.dateCreated) / 1000
        })
    }
    render() {
        const { label } = this.props;
        return (
            <label>
                <span className="description">{ label }</span>
                <span className="created">{formatDistance(subSeconds(new Date(), this.state.time), new Date(), { includeSeconds: true })} ago</span>
            </label>
        )
    }
}
