import React, { useState, useEffect, useMemo } from 'react';
import { formatDistance, subSeconds } from 'date-fns';
import Timer from 'timer.js';
import { string, number } from 'prop-types';

import { msToMinutesAndSeconds } from '../../../utils';

const Description = ({ label, dateCreated }) => {
  const [time, setTime] = useState(0);
  const [timerSwitcher, setTimerValue] = useState(false);
  const [timerValue, setTimervalue] = useState(600000);

  const theTimer = useMemo(() => new Timer(), [label]);

  const timerStart = () => setTimerValue(true);

  const timerPause = () => setTimerValue(false);

  const creationTick = () => {
    setTime((new Date() - dateCreated) / 1000);
  };

  useEffect(() => {
    theTimer.start(600).pause();
    const timerDate = setInterval(() => creationTick(), 1000);
    return () => clearInterval(timerDate);
  }, []);

  const timerTick = (ms) => {
    setTimervalue(ms);
  };

  useEffect(() => {
    if (timerSwitcher) theTimer.on('ontick', timerTick).start();
    if (!timerSwitcher) theTimer.pause();
    return () => theTimer.pause();
  }, [timerSwitcher, timerValue]);

  return (
    <label>
      <span className="title">{label}</span>
      <span className="description">
        <button onClick={timerStart} type="button" label="icon-play" className="icon icon-play" />
        <button onClick={timerPause} type="button" label="icon-pause" className="icon icon-pause" />
        <time>{msToMinutesAndSeconds(timerValue)}</time>
      </span>
      <span className="description">
        {formatDistance(subSeconds(new Date(), time), new Date(), {
          includeSeconds: true,
        })}
        {' '}
        ago
      </span>
    </label>
  );
};

Description.propTypes = {
  label: string.isRequired, // property from todoData item
  dateCreated: number.isRequired, // property from todoData item
};

export default Description;
