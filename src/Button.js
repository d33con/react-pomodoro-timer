import React from 'react';

import './css/Button.css';

const ButtonProps = {
  label: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

function Button ({label, handleClick}) {
  return (
    <span className="button" onClick={handleClick}>{label}</span>
  );
}

ButtonProps.propTypes = ButtonProps.time;

export default Button;
