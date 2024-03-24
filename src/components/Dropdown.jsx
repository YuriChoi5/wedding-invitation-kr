// import React, { useState } from 'react';
// import './Dropdown.css';

// const Dropdown = ({ title, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="dropdown">
//       <div className="dropdown-header" onClick={toggleDropdown}>
//         {title}
//         <span className={`arrow ${isOpen ? 'up' : 'down'}`}>&#9660;</span>
//       </div>
//       {isOpen && <div className="dropdown-content">{children}</div>}
//     </div>
//   );
// };

// export default Dropdown;

import React, { useState } from "react";
import "./Dropdown.css";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { TfiArrowCircleUp } from "react-icons/tfi";


const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span className={`arrow ${isOpen ? "up" : "down"}`}>
          {isOpen ? <TfiArrowCircleUp /> : <TfiArrowCircleDown />}
        </span>
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
