// src/components/inputs/CustomCheckBoxes.jsx
import React, { useState } from 'react';

const CustomCheckBoxes = ({
  options = [], // Array of { label: 'Option 1', value: 'opt1' }
  onChange,
  direction = 'vertical', // 'vertical' or 'horizontal'
  disabled = false,
  className = '',
  style = {},
}) => {
  const [selectedValues, setSelectedValues] = useState([]);

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
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        gap: direction === 'horizontal' ? '1rem' : '0.5rem',
        ...style
      }}
    >
      {options.map((option, idx) => (
        <label
          key={idx}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.5 : 1
          }}
        >
          <input
            type="checkbox"
            style={{
              height: '1rem',
              width: '1rem',
              borderRadius: '0.25rem',
              border: '1px solid',
              borderColor: '#d1d5db',
              outline: 'none',
              backgroundColor: selectedValues.includes(option.value) ? '#2563eb' : 'transparent',
              cursor: 'pointer',
              // For the checkmark, it's complex with inline styles.
              // A common approach is to use a background image or a pseudo-element.
              // For simplicity, I'll just change the background color.
            }}
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