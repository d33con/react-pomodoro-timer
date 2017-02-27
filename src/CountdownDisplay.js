import React from 'react';
import MinuteDisplay from './MinuteDisplay';
import SecondDisplay from './SecondDisplay';

import './css/CountdownDisplay.css';

const CountdownDisplayProps = {
  seconds: React.PropTypes.number.isRequired,
  session: React.PropTypes.bool.isRequired
}

function CountdownDisplay ({seconds, session}) {
  const minutesRemaining = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;

  return (
    <div className="timer-container">
      <div className="timer-display">
        <div className="session-type">{session ? `Work` : `Break`}</div>
        <MinuteDisplay minutes={minutesRemaining} />:<SecondDisplay seconds={secondsRemaining} />
      </div>
    </div>
  );
}

CountdownDisplayProps.propTypes = CountdownDisplayProps.time;

export default CountdownDisplay;
