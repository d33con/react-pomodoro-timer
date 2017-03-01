import React from 'react';

import './css/CountdownDisplay.css';
import MinuteDisplay from './MinuteDisplay';
import SecondDisplay from './SecondDisplay';

CountdownDisplay.propTypes = {
  seconds: React.PropTypes.number.isRequired,
  isWorkTime: React.PropTypes.bool.isRequired,
  workTime: React.PropTypes.number.isRequired,
  breakTime: React.PropTypes.number.isRequired
}

function CountdownDisplay ({seconds, isWorkTime, workTime, breakTime}) {
  const minutesRemaining = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;
  let bgFillAmount;
  let bgFillColor;
  // calculate the amount of the background to fill according to the amount of 
  // time passed in the current session. 
  //Set the background color according to the session type
  if (isWorkTime) {
    bgFillAmount = ((20 / workTime) * (workTime - seconds) / 2) + 'rem';
    bgFillColor = 'rgba(237, 36, 94, 0.8)'; // red
  } else {
    bgFillAmount = ((20 / breakTime) * (breakTime - seconds) / 2) + 'rem';
    bgFillColor = 'rgba(244, 208, 63, 0.8)'; // yellow
  }
  
  // set the styles for the timer background
  const backgroundStyle = {
    countingDown: {
      fontSize: '5rem',
      border: '5px solid #222829',
      borderRadius: '50%',
      width: '20rem',
      height: '20rem',
      margin: '40px auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `inset 0 0 0.5rem ${bgFillAmount} ${bgFillColor}`,
      transition: 'box-shadow ease 0.5s'
    }
  };

  return (
    <div style={backgroundStyle.countingDown}>
      <div>
        <div className="session-type">{isWorkTime ? `Work` : `Break`}</div>
        <MinuteDisplay minutes={minutesRemaining} />:<SecondDisplay seconds={secondsRemaining} />
      </div>
    </div>
  );
}

export default CountdownDisplay;
