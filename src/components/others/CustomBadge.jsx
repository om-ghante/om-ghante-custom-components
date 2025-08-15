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
  className = "",
  style = {},
}) => {
  return (
    <span
      className={className}
      style={{
        backgroundColor: '#3b82f6',
        color: '#ffffff',
        fontSize: '0.875rem',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontWeight: '500',
        display: 'inline-block',
        ...style
      }}
    >
      {label}
    </span>
  );
};

CustomBadge.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default CustomBadge;
