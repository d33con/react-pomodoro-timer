import React from 'react';

const MinuteDisplayProps = {
  minutes: React.PropTypes.number.isRequired
}

function MinuteDisplay ({minutes}) {
  return (
    <span>{minutes}</span>
  );
}

MinuteDisplayProps.propTypes = MinuteDisplayProps.minutes;

export default MinuteDisplay;
