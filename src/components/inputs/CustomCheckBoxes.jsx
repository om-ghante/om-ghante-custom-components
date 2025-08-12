// src/components/inputs/CustomCheckBoxes.jsx
import React, { useState } from 'react';

const CustomCheckBoxes = ({
  options = [], // Array of { label: 'Option 1', value: 'opt1' }
  onChange,
  direction = 'vertical', // 'vertical' or 'horizontal'
  disabled = false,
  variant = 'primary', // 'primary', 'secondary', 'danger', etc.
  className = '',
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

  const VARIANT_CLASSES = {
    primary: 'text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-600 focus:ring-gray-500',
    danger: 'text-red-600 focus:ring-red-500',
  };

  const handleCheckboxChange = (value) => {
    if (disabled) return;

    const updatedValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(updatedValues);
    if (onChange) {
      onChange(updatedValues);
    }
  };

  return (
    <div
      className={`flex ${
        direction === 'horizontal' ? 'flex-row gap-4' : 'flex-col gap-2'
      } ${className}`}
    >
      {options.map((option, idx) => (
        <label
          key={idx}
          className={`flex items-center gap-2 cursor-pointer ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <input
            type="checkbox"
            className={`h-4 w-4 rounded border-gray-300 focus:ring-2 ${
              VARIANT_CLASSES[variant]
            }`}
            checked={selectedValues.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            disabled={disabled}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CustomCheckBoxes;