import React from 'react';
import MinuteDisplay from './MinuteDisplay';
import SecondDisplay from './SecondDisplay';

const CountdownDisplayProps = {
  seconds: React.PropTypes.number.isRequired
}

function CountdownDisplay ({seconds}) {
  const minutesRemaining = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  return (
    <div>
      <MinuteDisplay minutes={minutesRemaining} />:<SecondDisplay seconds={secondsRemaining} />
    </div>
  );
}

CountdownDisplayProps.propTypes = CountdownDisplayProps.time;

export default CountdownDisplay;
