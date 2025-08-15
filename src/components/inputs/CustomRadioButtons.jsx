import React from "react";

const CustomRadioButtons = ({
  options = [],
  name = "radio-group",
  selectedValue,
  onChange,
  label = "",
  direction = "row", 
  disabled = false,
  className = "",
  style = {},
}) => {
  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        ...style
      }}
    >
      {label && (
        <span style={{ fontWeight: '500', color: '#374151' }}>
          {label}
        </span>
      )}

      <div
        style={{
          display: 'flex',
          flexDirection: direction === 'column' ? 'column' : 'row',
          gap: direction === 'column' ? '0.5rem' : '1rem'
        }}
      >
        {options.map((option) => (
          <label
            key={option.value}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.5 : 1
            }}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled}
              style={{
                appearance: 'none',
                borderRadius: '9999px',
                border: '1px solid',
                borderColor: selectedValue === option.value ? 'transparent' : '#d1d5db',
                outline: 'none',
                width: '1rem', 
                height: '1rem', 
                backgroundColor: selectedValue === option.value ? '#2563eb' : 'transparent',
                position: 'relative',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span style={{ color: '#000000' }}>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioButtons;
