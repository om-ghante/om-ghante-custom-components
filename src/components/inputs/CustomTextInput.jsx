// src/components/inputs/CustomTextInput.jsx
import React, { useState } from 'react';

const CustomTextInput = ({
  label = 'Text Input',
  placeholder = 'Enter text',
  name = 'text-input',
  error = '',
  fullWidth = false,
  className = '',
  disabled = false,
  type = 'text',
  onChange
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-fit'} ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}

      <div className="relative">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 w-full
            ${error ? 'border-red-500' : 'border-gray-300'}
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          `}
        />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CustomTextInput;
