import React, { Component } from 'react';
import { formatDistance, subSeconds } from 'date-fns';
import PropTypes from 'prop-types';

export default class Description extends Component {
  state = {
    time: 0,
  };

  static propTypes = {
    label: PropTypes.string.isRequired, // property from todoData item
    dateCreated: PropTypes.number.isRequired, // property from todoData item
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
    const { dateCreated } = this.props;
    this.setState({
      time: (new Date() - dateCreated) / 1000,
    });
  }

  render() {
    const { label } = this.props;
    const { time } = this.state;
    return (
      <label>
        <span className="description">{label}</span>
        <span className="created">
          {formatDistance(subSeconds(new Date(), time), new Date(), {
            includeSeconds: true,
          })}
          {' '}
          ago
        </span>
      </label>
    );
  }
}
