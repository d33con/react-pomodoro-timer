import React from 'react';

const EndTimeDisplayProps = {
  time: React.PropTypes.number.isRequired
}

function EndTimeDisplay ({time}) {
  const endTime = new Date(time);
  const hour = endTime.getHours();
  const minute = endTime.getMinutes();
  return (
    <span>{`Session ends at ${hour}:${minute < 10 ? '0' : ''}${minute}`}</span>
  );
}

EndTimeDisplayProps.propTypes = EndTimeDisplayProps.time;

export default EndTimeDisplay;
