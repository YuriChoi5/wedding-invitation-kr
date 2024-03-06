import React, { useState } from 'react';
// import './Dropdown.css';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
      </div>
      {isOpen && <div className="dropdown-content">{children}</div>}
    </div>
  );
};

export default Dropdown;
