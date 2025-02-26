import { useState, useEffect } from "react";



import SearchBar from "../../components/SearchBar/SearchBar";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import CountryCard from "../../components/CountryCard/CountryCard";

const Home = () => {
//   const [countries, setCountries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [region, setRegion] = useState<string>("");

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);

//   const filteredCountries = countries.filter(
//     (country) =>
//       country &&
//       (region ? country === region : true)
//   );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterDropdown setRegion={setRegion} />
      </div>
      {/* <div className="grid grid-cols-4 gap-6 mt-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country} country={country} />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
