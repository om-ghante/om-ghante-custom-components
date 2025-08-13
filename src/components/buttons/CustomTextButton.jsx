import React from 'react';
import { FaSpinner } from 'react-icons/fa'; 

const VARIANT_CLASSES = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border border-gray-500 text-gray-300 hover:bg-gray-700',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
};

const CustomTextButton = ({
  type = 'button',
  text = 'Click me',
  onClick,
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
  style = {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={className}
      style={{
        borderRadius: '0.5rem',
        fontWeight: '500',
        transition: 'all 0.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2563eb', // Default primary color
        color: '#ffffff', // Default text color
        padding: '0.5rem 1rem', // Default md size padding
        fontSize: '1rem', // Default md size font
        width: fullWidth ? '100%' : 'fit-content',
        opacity: disabled || loading ? 0.5 : 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        border: 'none', // Remove default button border
        ...style
      }}
    >
      {loading ? (
        <FaSpinner style={{ animation: 'spin 1s linear infinite', width: '1rem', height: '1rem' }} />
      ) : (
        text
      )}
    </button>
  );
};

export default CustomTextButton;
