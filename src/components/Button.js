import React from 'react';
import PropTypes from 'prop-types';
 // Optional if you want separate styling

export default function Button({ type = 'button', name, onClick }) {
  return (
    <button type={type} onClick={onClick} className="custom-button">
      {name}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

