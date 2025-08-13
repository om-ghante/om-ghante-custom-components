// CustomAlert.jsx
import React from "react";
import { FaTimesCircle, FaCheckCircle, FaInfoCircle, FaExclamationTriangle } from "react-icons/fa";

const VARIANT_STYLES = {
  success: {
    backgroundColor: "#f0fdf4", // bg-green-50
    color: "#166534", // text-green-800
    borderColor: "#bbf7d0", // border-green-200
    icon: <FaCheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#22c55e' }} /> // text-green-600
  },
  error: {
    backgroundColor: "#fef2f2", // bg-red-50
    color: "#991b1b", // text-red-800
    borderColor: "#fecaca", // border-red-200
    icon: <FaTimesCircle style={{ width: '1.25rem', height: '1.25rem', color: '#ef4444' }} /> // text-red-600
  },
  warning: {
    backgroundColor: "#fffbeb", // bg-yellow-50
    color: "#92400e", // text-yellow-800
    borderColor: "#fde68a", // border-yellow-200
    icon: <FaExclamationTriangle style={{ width: '1.25rem', height: '1.25rem', color: '#eab308' }} /> // text-yellow-600
  },
  info: {
    backgroundColor: "#eff6ff", // bg-blue-50
    color: "#1e40af", // text-blue-800
    borderColor: "#bfdbfe", // border-blue-200
    icon: <FaInfoCircle style={{ width: '1.25rem', height: '1.25rem', color: '#3b82f6' }} /> // text-blue-600
  },
};

const CustomAlert = ({
  variant = "info",
  title,
  message,
  show = true,
  onClose,
  className = "",
  style = {},
}) => {
  if (!show) return null;

  const styles = VARIANT_STYLES[variant] || VARIANT_STYLES.info;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '1rem',
        border: '1px solid',
        borderRadius: '0.5rem',
        backgroundColor: styles.backgroundColor,
        color: styles.color,
        borderColor: styles.borderColor,
        ...style
      }}
    >
      {/* Icon */}
      <div style={{ flexShrink: 0 }}>{styles.icon}</div>

      {/* Text Content */}
      <div style={{ flex: '1 1 0%' }}>
        {title && <h4 style={{ fontWeight: '600' }}>{title}</h4>}
        {message && <p style={{ fontSize: '0.875rem' }}>{message}</p>}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            color: '#9ca3af',
            transition: 'color 0.15s ease-in-out',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default CustomAlert;
