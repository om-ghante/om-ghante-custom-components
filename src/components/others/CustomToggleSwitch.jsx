import React, { useState } from "react";

const CustomToggleSwitch = ({
  checked = false,
  onToggle,
  label = "",
  className = "",
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onToggle) onToggle(newValue);
  };

  return (
    <label className={`flex items-center cursor-pointer ${className}`}>
      {/* Toggle Switch */}
      <div className="relative">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only"
        />
        <div
          className={`block w-12 h-6 rounded-full transition-colors ${
            isChecked ? "bg-blue-600" : "bg-gray-300"
          }`}
        ></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
            isChecked ? "translate-x-6" : ""
          }`}
        ></div>
      </div>

      {/* Label */}
      {label && <span className="ml-3 text-gray-700">{label}</span>}
    </label>
  );
};

export default CustomToggleSwitch;
