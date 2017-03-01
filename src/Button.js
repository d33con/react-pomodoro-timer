import React from 'react';

import './css/Button.css';

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired
}

function Button ({label, handleClick}) {
  return (
    <span className="button" onClick={handleClick}>{label}</span>
  );
}

export default Button;
