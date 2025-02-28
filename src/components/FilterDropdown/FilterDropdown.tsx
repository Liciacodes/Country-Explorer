interface FilterDropdownProps {
    setRegion: (region: string) => void;
    darkMode: boolean; 
  }
  
  const FilterDropdown: React.FC<FilterDropdownProps> = ({ setRegion, darkMode }) => {
    return (
      <select
        className={`p-3 rounded-md shadow-md border focus:outline-none 
          ${darkMode ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    );
  };
  
  export default FilterDropdown;
  