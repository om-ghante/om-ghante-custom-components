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
  onChange,
  style = {},
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  }

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
      {label && <label style={{ fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>{label}</label>}

      <div style={{ position: 'relative' }}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          style={{
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            border: '1px solid',
            borderRadius: '0.5rem',
            outline: 'none',
            width: '100%',
            borderColor: error ? '#ef4444' : '#d1d5db',
            backgroundColor: disabled ? '#f3f4f6' : 'transparent',
            cursor: disabled ? 'not-allowed' : 'auto'
          }}
        />
      </div>

      {error && <p style={{ fontSize: '0.75rem', color: '#ef4444' }}>{error}</p>}
    </div>
  );
};

export default CustomTextInput;
