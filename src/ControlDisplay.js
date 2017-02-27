import React from 'react';
import './css/ControlDisplay.css';

const ControlDisplayProps = {
  label: React.PropTypes.string.isRequired,
  time: React.PropTypes.number.isRequired
}

function ControlDisplay ({label, time}) {
  const timeInMins = time / 60;
  return (
    <span className="session-time">{`${label} Time - ${timeInMins} minutes`}</span>
  );
}

ControlDisplayProps.propTypes = ControlDisplayProps.time;

export default ControlDisplay;
