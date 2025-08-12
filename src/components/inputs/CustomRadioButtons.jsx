// src/components/inputs/CustomRadioButtons.jsx
import React from "react";

const CustomRadioButtons = ({
  options = [],
  name = "radio-group",
  selectedValue,
  onChange,
  label = "",
  direction = "row", // row or column
  size = "md", // sm, md, lg
  color = "blue", // Tailwind color name
  disabled = false,
  className = "",
}) => {
  const SIZE_CLASSES = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  // Predefined Tailwind color classes (so they're not purged)
  const COLOR_CLASSES = {
    blue: "checked:bg-blue-600 focus:ring-blue-500",
    red: "checked:bg-red-600 focus:ring-red-500",
    green: "checked:bg-green-600 focus:ring-green-500",
    yellow: "checked:bg-yellow-600 focus:ring-yellow-500",
    purple: "checked:bg-purple-600 focus:ring-purple-500",
    pink: "checked:bg-pink-600 focus:ring-pink-500",
    indigo: "checked:bg-indigo-600 focus:ring-indigo-500",
    gray: "checked:bg-gray-600 focus:ring-gray-500",
  };

  const handleChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <span className="font-medium text-gray-700">
          {label}
        </span>
      )}

      <div
        className={`flex ${
          direction === "column" ? "flex-col gap-2" : "flex-row gap-4"
        }`}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center gap-2 cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => handleChange(option.value)}
              disabled={disabled}
              className={`appearance-none rounded-full border border-gray-300 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 ${COLOR_CLASSES[color]} ${SIZE_CLASSES[size]}`}
            />
            <span className="text-black">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioButtons;
