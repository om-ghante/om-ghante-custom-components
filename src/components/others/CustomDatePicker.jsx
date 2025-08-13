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
  className = "",
  style = {},
}) => {
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);

  const toggleDatePicker = (e) => {
    e.stopPropagation();
    setDatePickerOpen((prev) => !prev);
  };

  const CustomInput = forwardRef(({ value, onClick, onChange: handleChange, className, style }, ref) => (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        border: '1px solid',
        borderRadius: '0.375rem',
        borderColor: error ? '#ef4444' : '#d1d5db',
        ...style
      }}
      ref={ref}
    >
      {/* Editable text input */}
      <input
        type="text"
        style={{ flex: '1 1 0%', color: '#374151', outline: 'none', backgroundColor: 'transparent' }}
        placeholder={placeholder}
        value={value}
        onClick={(e) => {
          e.stopPropagation();
          onClick(); // open/close via DatePicker internal logic
        }}
        onChange={handleChange} // allow typing
      />

      {/* Icon toggles manually */}
      <FaCalendarAlt style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af', cursor: 'pointer' }} onClick={toggleDatePicker} />
    </div>
  ));

  CustomInput.displayName = "CustomInput";

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}>
      {label && <label style={{ marginBottom: '0.25rem', color: '#374151', fontWeight: '500' }}>{label}</label>}

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

      {error && <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</span>}
    </div>
  );
};

export default CustomDatePicker;
