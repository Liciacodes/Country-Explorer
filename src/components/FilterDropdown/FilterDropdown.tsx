import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface FilterDropdownProps {
  setRegion: (region: string) => void;
  darkMode: boolean;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ setRegion, darkMode }) => {
  return (
    <div className="relative w-full sm:w-[15%]">
      <select
        className={`p-3 pr-10 w-full rounded-md shadow-md border appearance-none focus:outline-none transition-all duration-300
          ${darkMode 
            ? "bg-[hsl(209,23%,22%)] text-white border-gray-600" 
            : "bg-white text-gray-900 border-gray-300"
          }`}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      {/* Custom Dropdown Icon */}
      <FaChevronDown 
        className={`absolute top-1/2 right-3 transform -translate-y-1/2 
          ${darkMode ? "text-white" : "text-gray-700"}
        `}
      />
    </div>
  );
};

export default FilterDropdown;
