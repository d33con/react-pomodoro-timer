import React from 'react';
import './css/ControlDisplay.css';

const ControlDisplayProps = {
  label: React.PropTypes.string.isRequired
}

function ControlDisplay ({time}) {
  const timeInMins = time / 60;
  return (
    <span className="session-time">{`${timeInMins}`}</span>
  );
}

ControlDisplayProps.propTypes = ControlDisplayProps.time;

export default ControlDisplay;
