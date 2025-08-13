import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CustomSearchBar = ({
  placeholder = "Search...",
  onSearch,
  className = "",
  showIcon = true,
  buttonType = "text", // 'text' or 'icon'
  style = {},
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid',
        borderColor: '#d1d5db',
        borderRadius: '0.5rem',
        overflow: 'hidden',
        ...style
      }}
    >
      {showIcon && (
        <span style={{ paddingLeft: '0.75rem', paddingRight: '0.75rem', color: '#6b7280' }}>
          <FaSearch size={18} />
        </span>
      )}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        style={{ flex: '1 1 0%', paddingLeft: '0.75rem', paddingRight: '0.75rem', paddingTop: '0.5rem', paddingBottom: '0.5rem', outline: 'none' }}
      />
      {buttonType === "text" ? (
        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            transition: 'background-color 0.15s ease-in-out',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Search
        </button>
      ) : (
        <button
          type="submit"
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            paddingLeft: '0.75rem',
            paddingRight: '0.75rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            transition: 'background-color 0.15s ease-in-out',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          <FaSearch size={18} />
        </button>
      )}
    </form>
  );
};

export default CustomSearchBar;
