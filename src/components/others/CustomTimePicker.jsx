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
  className = "",
  style = {},
}) => {
  const [isTimePickerOpen, setTimePickerOpen] = useState(false);

  const toggleTimePicker = (e) => {
    e.stopPropagation();
    setTimePickerOpen((prev) => !prev);
  };

  const CustomInput = forwardRef(({ value, onClick, className, style }, ref) => (
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
    >

      <input
        type="text"
        style={{ flex: '1 1 0%', color: '#374151', outline: 'none', backgroundColor: 'transparent' }}
        placeholder={placeholder}
        value={value}
        ref={ref}
        onClick={(e) => e.stopPropagation()} 
        readOnly 
      />

      <Clock
        style={{ height: '1.25rem', width: '1.25rem', color: '#9ca3af', cursor: 'pointer' }}
        onClick={toggleTimePicker}
      />
    </div>
  ));

  CustomInput.displayName = "CustomTimeInput";

  return (
    <div className={className} style={{ display: 'flex', flexDirection: 'column', width: '100%', ...style }}>
      {label && (
        <label style={{ marginBottom: '0.25rem', color: '#374151', fontWeight: '500' }}>{label}</label>
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

      {error && <span style={{ color: '#ef4444', fontSize: '0.875rem', marginTop: '0.25rem' }}>{error}</span>}
    </div>
  );
};

export default CustomTimePicker;
