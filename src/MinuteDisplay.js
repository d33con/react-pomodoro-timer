import React from 'react';

MinuteDisplay.propTypes = {
  minutes: React.PropTypes.number.isRequired
}

function MinuteDisplay ({minutes}) {
  return (
    <span>{minutes}</span>
  );
}

export default MinuteDisplay;
