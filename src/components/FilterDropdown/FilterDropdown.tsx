interface FilterDropdownProps {
    setRegion: (region: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({setRegion}) => {
    return(
     <select className="p-3 rounded-md shadow-md border"  onChange={(e) => setRegion(e.target.value)}>
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
     </select>
    )
}

export default FilterDropdown;