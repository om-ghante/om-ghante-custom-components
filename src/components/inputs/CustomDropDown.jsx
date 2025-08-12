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
}) => {
  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : "w-fit"}`}>
      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className={`
            appearance-none px-4 py-2 pr-10 rounded-lg border 
            focus:outline-none focus:ring-2 focus:ring-blue-500 
            text-sm transition-all
            ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"} 
            ${error ? "border-red-500" : "border-gray-300"} 
            ${fullWidth ? "w-full" : "w-fit"} 
            ${className}
          `}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((opt, index) => (
            <option key={index} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <FaChevronDown
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default CustomDropDown;
