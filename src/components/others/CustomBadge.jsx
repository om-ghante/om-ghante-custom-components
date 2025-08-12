// src/components/others/CustomBadge.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * CustomBadge Component
 * @param {string} label - Text to display inside the badge
 * @param {string} color - Background color (Tailwind class)
 * @param {string} textColor - Text color (Tailwind class)
 * @param {string} size - Size of the badge (sm, md, lg)
 * @param {boolean} rounded - Whether the badge has rounded corners
 * @param {string} className - Additional custom classes
 */
const CustomBadge = ({
  label,
  color = "bg-blue-500",
  textColor = "text-white",
  size = "md",
  rounded = true,
  className = "",
}) => {
  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  return (
    <span
      className={`${color} ${textColor} ${sizeClasses[size]} ${
        rounded ? "rounded-full" : "rounded"
      } font-medium inline-block ${className}`}
    >
      {label}
    </span>
  );
};

CustomBadge.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default CustomBadge;
