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

const CustomIconTextButton = ({
  type = 'button',
  text = 'Click Me',
  onClick,
  icon: Icon = null, 
  iconPosition = 'left', 
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        borderRadius: '0.5rem',
        fontWeight: '500',
        transition: 'all 0.15s ease-in-out',
        backgroundColor: '#2563eb', 
        color: '#ffffff', 
        padding: '0.5rem 1rem', 
        fontSize: '1rem', 
        width: fullWidth ? '100%' : 'fit-content',
        opacity: disabled || loading ? 0.5 : 1,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        border: 'none', 
        ...style
      }}
    >
      {loading ? (
        <FaSpinner style={{ animation: 'spin 1s linear infinite', width: '1rem', height: '1rem' }} />
      ) : (
        <>
          {iconPosition === 'left' && Icon && <Icon style={{ width: '1rem', height: '1rem' }} />}
          {text}
          {iconPosition === 'right' && Icon && <Icon style={{ width: '1rem', height: '1rem' }} />}
        </>
      )}
    </button>
  );
};

export default CustomIconTextButton;
