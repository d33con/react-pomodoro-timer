import React from 'react';

SecondDisplay.propTypes = {
  seconds: React.PropTypes.number.isRequired
}

function SecondDisplay ({seconds}) {
  return (
    <span>{`${seconds < 10 ? '0' : ''}${seconds}`}</span>
  );
}

export default SecondDisplay;
