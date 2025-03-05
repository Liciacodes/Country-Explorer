import React from "react";
import { useTheme } from "../../context/ThemeContext";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const { darkMode } = useTheme();

  return (
    <input
      type="text"
      name="search"
      placeholder="Search for a country..."
      className={`p-3 w-full sm:w-96 rounded-md border shadow-md transition-all duration-300 focus:outline-none 
         ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
