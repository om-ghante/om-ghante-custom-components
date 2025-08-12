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
  variant = 'primary',     
  size = 'md',             
  loading = false,         
  disabled = false,
  fullWidth = false,
  iconPosition = 'left',   
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ease-in-out
        ${VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary}
        ${SIZE_CLASSES[size] || SIZE_CLASSES.md}
        ${fullWidth ? 'w-full' : 'w-fit'}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {loading ? (
        <FaSpinner className="animate-spin w-4 h-4" />
      ) : (
        <>
          {iconPosition === 'left' && Icon && <Icon className="w-4 h-4" />}
          {text && <span>{text}</span>}
          {iconPosition === 'right' && Icon && <Icon className="w-4 h-4" />}
        </>
      )}
    </button>
  );
};

export default CustomIconButton;
