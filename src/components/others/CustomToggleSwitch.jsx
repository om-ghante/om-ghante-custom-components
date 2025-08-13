import React, { useState } from "react";

const CustomToggleSwitch = ({
  checked = false,
  onToggle,
  label = "",
  className = "",
  style = {},
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <label className={className} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', ...style }}>
      {/* Toggle Switch */}
      <div style={{ position: 'relative' }}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: 0 }}
        />
        <div
          style={{
            display: 'block',
            width: '3rem',
            height: '1.5rem',
            borderRadius: '9999px',
            transition: 'background-color 0.15s ease-in-out',
            backgroundColor: isChecked ? '#2563eb' : '#d1d5db'
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            left: '0.25rem',
            top: '0.25rem',
            backgroundColor: '#ffffff',
            width: '1rem',
            height: '1rem',
            borderRadius: '9999px',
            transition: 'transform 0.15s ease-in-out',
            transform: isChecked ? 'translateX(1.5rem)' : 'translateX(0)'
          }}
        ></div>
      </div>

      {/* Label */}
      {label && <span style={{ marginLeft: '0.75rem', color: '#374151' }}>{label}</span>}
    </label>
  );
};

export default CustomToggleSwitch;
