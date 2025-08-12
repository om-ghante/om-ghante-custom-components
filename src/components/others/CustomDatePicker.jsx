// components/others/CustomDatePicker.jsx
import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";

const CustomDatePicker = ({
  label,
  selectedDate,
  onChange,
  minDate,
  maxDate,
  dateFormat = "dd/MM/yyyy",
  placeholder = "dd/mm/yyyy",
  error,
}) => {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const toggleDatePicker = (e) => {
    e.stopPropagation();
    setDatePickerOpen((prev) => !prev);
  };

  const CustomInput = forwardRef(({ value, onClick, onChange: handleChange }, ref) => (
    <div
      className={`flex items-center w-full px-3 py-2 border rounded-md ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      ref={ref}
    >
      {/* Editable text input */}
      <input
        type="text"
        className="flex-1 text-gray-700 outline-none bg-transparent"
        placeholder={placeholder}
        value={value}
        onClick={(e) => {
          e.stopPropagation();
          onClick(); // open/close via DatePicker internal logic
        }}
        onChange={handleChange} // allow typing
      />

      {/* Icon toggles manually */}
      <FaCalendarAlt className="h-5 w-5 text-gray-400 cursor-pointer" onClick={toggleDatePicker} />
    </div>
  ));

  CustomInput.displayName = "CustomInput";

  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-gray-700 font-medium">{label}</label>}

      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          onChange(date);
          setDatePickerOpen(false);
        }}
        minDate={minDate}
        maxDate={maxDate}
        dateFormat={dateFormat}
        open={isDatePickerOpen}
        onClickOutside={() => setDatePickerOpen(false)}
        shouldCloseOnSelect={true}
        customInput={<CustomInput />}
      />

      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default CustomDatePicker;
