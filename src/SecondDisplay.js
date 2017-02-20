import React from 'react';

const SecondDisplayProps = {
  seconds: React.PropTypes.number.isRequired
}

function SecondDisplay ({seconds}) {
  return (
    <span>{`${seconds < 10 ? '0' : ''}${seconds}`}</span>
  );
}

SecondDisplayProps.propTypes = SecondDisplayProps.minutes;

export default SecondDisplay;
