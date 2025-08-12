// components/others/CustomTimePicker.jsx
import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Clock } from "lucide-react";

const CustomTimePicker = ({
  label,
  selectedTime,
  onChange,
  placeholder = "hh:mm AM/PM",
  error,
}) => {
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);

  // Toggle time picker only when clicking the icon
  const toggleTimePicker = (e) => {
    e.stopPropagation();
    setTimePickerOpen((prev) => !prev);
  };

  // Custom input for TimePicker
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div
      className={`flex items-center w-full px-3 py-2 border rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      {/* Editable input for keyboard navigation */}
      <input
        type="text"
        className="flex-1 text-gray-700 outline-none bg-transparent"
        placeholder={placeholder}
        value={value}
        ref={ref}
        onClick={(e) => e.stopPropagation()} // prevent click from toggling picker
        readOnly // keep readOnly to avoid invalid manual text input
      />

      {/* Clock icon for toggling */}
      <Clock
        className="h-5 w-5 text-gray-400 cursor-pointer"
        onClick={toggleTimePicker}
      />
    </div>
  ));

  CustomInput.displayName = "CustomTimeInput";

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="mb-1 text-gray-700 font-medium">{label}</label>
      )}

      <DatePicker
        selected={selectedTime}
        onChange={(time) => {
          onChange(time);
          setTimePickerOpen(false);
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={5}
        timeCaption="Time"
        dateFormat="h:mm aa"
        open={isTimePickerOpen}
        onClickOutside={() => setTimePickerOpen(false)}
        shouldCloseOnSelect
        customInput={<CustomInput />}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default CustomTimePicker;
