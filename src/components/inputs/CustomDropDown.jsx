// CustomDropDown.jsx
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CustomDropDown = ({
  label = "Select an option",
  options = [],
  value,
  onChange,
  placeholder = "Choose...",
  disabled = false,
  fullWidth = false,
  error = "",
  className = "",
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        width: fullWidth ? '100%' : 'fit-content',
        ...style
      }}
    >
      {label && (
        <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>
          {label}
        </label>
      )}

      <div style={{ position: 'relative' }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={className}
          style={{
            appearance: 'none',
            paddingLeft: '1rem',
            paddingRight: '2.5rem', // pr-10
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            borderRadius: '0.5rem',
            border: '1px solid',
            outline: 'none',
            fontSize: '0.875rem',
            transition: 'all 0.15s ease-in-out',
            backgroundColor: disabled ? '#f3f4f6' : '#ffffff',
            cursor: disabled ? 'not-allowed' : 'pointer',
            borderColor: error ? '#ef4444' : '#d1d5db',
            width: fullWidth ? '100%' : 'fit-content',
          }}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <FaChevronDown
          style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#9ca3af',
            pointerEvents: 'none'
          }}
        />
      </div>

      {error && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</span>}
    </div>
  );
};

export default CustomDropDown;
