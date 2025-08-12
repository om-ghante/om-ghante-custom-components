// CustomAlert.jsx
import React from "react";
import { FaTimesCircle, FaCheckCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const VARIANT_STYLES = {
  success: {
    bg: "bg-green-50",
    text: "text-green-800",
    border: "border-green-200",
    icon: <FaCheckCircle className="w-5 h-5 text-green-600" />
  },
  error: {
    bg: "bg-red-50",
    text: "text-red-800",
    border: "border-red-200",
    icon: <FaTimesCircle className="w-5 h-5 text-red-600" />
  },
  warning: {
    bg: "bg-yellow-50",
    text: "text-yellow-800",
    border: "border-yellow-200",
    icon: <FaExclamationTriangle className="w-5 h-5 text-yellow-600" />
  },
  info: {
    bg: "bg-blue-50",
    text: "text-blue-800",
    border: "border-blue-200",
    icon: <FaInfoCircle className="w-5 h-5 text-blue-600" />
  },
};

const CustomAlert = ({
  variant = "info",
  title,
  message,
  show = true,
  onClose,
  className = "",
}) => {
  if (!show) return null;

  const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.info;

  return (
    <div
      className={`flex items-start gap-3 p-4 border rounded-lg ${styles.bg} ${styles.text} ${styles.border} ${className}`}
    >
      {/* Icon */}
      <div className="flex-shrink-0">{styles.icon}</div>

      {/* Text Content */}
      <div className="flex-1">
        {title && <h4 className="font-semibold">{title}</h4>}
        {message && <p className="text-sm">{message}</p>}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default CustomAlert;
