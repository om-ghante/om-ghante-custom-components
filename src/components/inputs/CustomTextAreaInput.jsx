import React from 'react';

const CustomTextAreaInput = ({ label, value, onChange, placeholder, rows = 4, className = '', style = {} }) => {
  return (
    <div className={className} style={{ marginBottom: '1rem', ...style }}>
      {label && <label style={{ display: 'block', color: '#374151', fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.5rem' }}>{label}</label>}
      <textarea
        style={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          appearance: 'none',
          border: '1px solid #d1d5db', 
          borderRadius: '0.25rem',
          width: '100%',
          paddingTop: '0.5rem',
          paddingBottom: '0.5rem',
          paddingLeft: '0.75rem',
          paddingRight: '0.75rem',
          color: '#374151',
          lineHeight: '1.25',
          outline: 'none',
        }}
        className={className}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
      />
    </div>
  );
};

export default CustomTextAreaInput;
