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
  variant = 'primary',     
  size = 'md',             
  loading = false,
  disabled = false,
  fullWidth = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        rounded-lg font-medium transition-all duration-200 ease-in-out
        flex items-center justify-center
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
        text
      )}
    </button>
  );
};

export default CustomTextButton;
