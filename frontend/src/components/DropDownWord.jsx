import React, { useState } from 'react';
import JapaneseWordCard from './JapaneseWordCard';


const DropDownWord = ({ wordEntry }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  return (
    <div className="dropdown-container">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {wordEntry.word}-{wordEntry.meaning}
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
       <JapaneseWordCard result={[wordEntry]}/>
      )}
    </div>
  );
};

export default DropDownWord;
