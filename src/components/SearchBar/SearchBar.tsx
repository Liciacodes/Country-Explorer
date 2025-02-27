import React from "react";


 interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}


const SearchBar: React.FC<SearchBarProps> = ({searchQuery, setSearchQuery}) => {

    return(
        <input type="text" name="search" placeholder="search for a country..."
        className="p-3 rounded-md border shadow-md focus:outline-none "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}/>
    )
}

export default SearchBar;