import React from 'react';
import { FaSpinner } from 'react-icons/fa'; 

const VARIANT_CLASSES = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  outline: 'border border-gray-500 text-gray-300 hover:bg-gray-700',
};

const SIZE_CLASSES = {
  sm: 'px-2 py-1 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

const CustomIconButton = ({
  type = 'button',
  text = '',              
  icon: Icon = null,       
  onClick,
  loading = false,         
  disabled = false,
  fullWidth = false,
  iconPosition = 'left',   
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
        transition: 'all 0.2s ease-in-out',
        backgroundColor: '#2563eb', // Default primary color
        color: '#ffffff', // Default text color
        padding: '0.5rem 0.75rem', // Default md size padding
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
        <>
          {iconPosition === 'left' && Icon && <Icon style={{ width: '1rem', height: '1rem' }} />}
          {text && <span>{text}</span>}
          {iconPosition === 'right' && Icon && <Icon style={{ width: '1rem', height: '1rem' }} />}
        </>
      )}
    </button>
  );
};

export default CustomIconButton;
