import React from "react";

const CustomModal = ({ isOpen, onClose, title, children, footer, className = "", style = {} }) => {
  if (!isOpen) return null;

  return (
    <div
      className={className}
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        ...style
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: '#000000',
          opacity: 0.5
        }}
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        style={{
          position: 'relative',
          backgroundColor: '#ffffff',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '32rem',
          width: '100%',
          zIndex: 10,
          padding: '1.5rem'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #e5e7eb', // Using a light gray color
            paddingBottom: '0.5rem'
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: '600' }}>{title}</h2>
          <button
            onClick={onClose}
            style={{
              color: '#6b7280',
              fontSize: '1.25rem',
              fontWeight: '700',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div style={{ marginTop: '1rem' }}>{children}</div>

        {/* Footer */}
        {footer && (
          <div
            style={{
              marginTop: '1.5rem',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '0.75rem'
            }}
          >{footer}</div>
        )}
      </div>
    </div>
  );
};

export default CustomModal;
