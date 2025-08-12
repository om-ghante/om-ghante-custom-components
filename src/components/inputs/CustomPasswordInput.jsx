// src/components/inputs/CustomPasswordInput.jsx
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const CustomPasswordInput = ({
  label = 'Password',
  placeholder = 'Enter your password',
  name = 'password',
  error = '',
  fullWidth = false,
  className = '',
  disabled = false,
  onChange
}) => {
  const [value, setValue] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
          type={showPassword ? 'text' : 'password'}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 pr-10 w-full
            ${error ? 'border-red-500' : 'border-gray-300'} 
            ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
          `}
        />
        <button
          type="button"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          onClick={() => setShowPassword(!showPassword)}
          disabled={disabled}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default CustomPasswordInput;