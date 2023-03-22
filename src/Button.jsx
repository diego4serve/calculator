import React from 'react';

const Button = ({ children, onClick, id, className }) => (
  <button className={className} onClick={onClick} id={id}>
    {children}
  </button>
);

export default Button;
