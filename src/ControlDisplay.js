import React from 'react';

import './css/ControlDisplay.css';

ControlDisplay.propTypes = {
  time: React.PropTypes.number.isRequired
}

function ControlDisplay ({time}) {
  const timeInMins = time / 60;
  return (
    <span className="session-time">{`${timeInMins}`}</span>
  );
}

export default ControlDisplay;
