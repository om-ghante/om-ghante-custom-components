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
    <div className="flex flex-col gap-3 p-4 border border-gray-200 rounded-xl shadow-sm bg-white">
      {label && (
        <label className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}

      <input
        type="file"
        accept={accept}
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
      />

      {buttonType === "text" ? (
        <button
          type="button"
          onClick={handleButtonClick}
          className="w-full text-sm py-2 px-4 rounded-lg 
                     font-semibold bg-blue-500 text-white shadow-sm
                     hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300
                     transition-all duration-200"
        >
          Browse File
        </button>
      ) : (
        <button
          type="button"
          onClick={handleButtonClick}
          className="p-3 rounded-lg bg-blue-500 text-white shadow-sm
                     hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300
                     transition-all duration-200 flex items-center justify-center"
        >
          <FiUpload size={20} />
        </button>
      )}

      {helperText && (
        <p className="text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p className="text-xs text-red-500 font-medium">
          {errorText || error}
        </p>
      )}

      {showPreview && file && file.type.startsWith("image/") && (
        <div className="mt-3 p-2 border rounded-lg bg-gray-50 shadow-inner">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-md mx-auto"
          />
        </div>
      )}
    </div>
  );
};

export default CustomFileUploader;
