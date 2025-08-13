import React, { useState, useRef } from "react";
import { FiUpload } from "react-icons/fi";

const CustomFileUploader = ({
  label,
  onFileSelect,
  accept = "*",
  maxSize = 5 * 1024 * 1024, // 5MB default
  showPreview = true,
  helperText,
  errorText,
  buttonType = "text", // 'text' or 'icon'
  className = "",
  style = {},
}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    if (selectedFile.size > maxSize) {
      setError(
        `File size should be less than ${Math.round(maxSize / 1024 / 1024)} MB`
      );
      setFile(null);
      return;
    }

    if (accept !== "*" && !selectedFile.type.match(accept.replace("*", ".*"))) {
      setError("Invalid file type");
      setFile(null);
      return;
    }

    setError("");
    setFile(selectedFile);
    if (onFileSelect) onFileSelect(selectedFile);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        padding: '1rem',
        border: '1px solid #e5e7eb',
        borderRadius: '0.75rem',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        backgroundColor: '#ffffff',
        ...style
      }}
    >
      {label && (
        <label style={{ fontSize: '0.875rem', fontWeight: '600', color: '#374151' }}>
          {label}
        </label>
      )}

      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />

      {buttonType === "text" ? (
        <button
          type="button"
          onClick={handleButtonClick}
          style={{
            width: '100%',
            fontSize: '0.875rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            borderRadius: '0.5rem',
            fontWeight: '600',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease-in-out',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Browse File
        </button>
      ) : (
        <button
          type="button"
          onClick={handleButtonClick}
          style={{
            padding: '0.75rem',
            borderRadius: '0.5rem',
            backgroundColor: '#3b82f6',
            color: '#ffffff',
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            transition: 'all 0.2s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <FiUpload size={20} />
        </button>
      )}

      {helperText && (
        <p style={{ fontSize: '0.75rem', color: '#6b7280' }}>
          {helperText}
        </p>
      )}
      {error && (
        <p style={{ fontSize: '0.75rem', color: '#ef4444', fontWeight: '500' }}>
          {errorText || error}
        </p>
      )}

      {showPreview && file && file.type.startsWith("image/") && (
        <div
          style={{
            marginTop: '0.75rem',
            padding: '0.5rem',
            border: '1px solid #e5e7eb', // Using a light gray color
            borderRadius: '0.5rem',
            backgroundColor: '#f9fafb',
            boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
          }}
        >
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            style={{
              width: '8rem',
              height: '8rem',
              objectFit: 'cover',
              borderRadius: '0.375rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'block'
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomFileUploader;
