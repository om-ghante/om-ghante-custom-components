import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const CustomSearchBar = ({
  placeholder = "Search...",
  onSearch,
  className = "",
  showIcon = true,
  buttonType = "text", // 'text' or 'icon'
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex items-center border border-gray-300 rounded-lg overflow-hidden ${className}`}
    >
      {showIcon && (
        <span className="px-3 text-gray-500">
          <FaSearch size={18} />
        </span>
      )}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 outline-none"
      />
      {buttonType === "text" ? (
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition-colors"
        >
          Search
        </button>
      ) : (
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 transition-colors"
        >
          <FaSearch size={18} />
        </button>
      )}
    </form>
  );
};

export default CustomSearchBar;
