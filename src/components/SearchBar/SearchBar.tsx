import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  darkMode: boolean; 
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, darkMode }) => {
  return (
    <input
      type="text"
      name="search"
      placeholder="Search for a country..."
      className={`p-3 rounded-md border shadow-md focus:outline-none 
        ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-[hsl(0, 0%, 52%)] text-gray-900 border-gray-300"}`}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
