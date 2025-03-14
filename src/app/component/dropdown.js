'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select an option');

  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-full sm:w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 py-2 px-4 rounded-lg inline-flex justify-between items-center focus:ring-green-500 focus:border-green-500"
      >
        <span>{selectedOption}</span>
        <FaChevronDown className="ml-2 h-4 w-4" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full sm:w-64 rounded-md shadow-lg bg-white border border-gray-300">
          <div className="py-1 text-gray-900 text-sm" role="menu">
            {options.map((option, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 hover:bg-gray-100"
                role="menuitem"
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;