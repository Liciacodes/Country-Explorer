import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import CountryCard from "../../components/CountryCard/CountryCard";
import countriesData from "../../../data.json";

interface Country {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flags: { png: string };
  alpha3Code: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>(countriesData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = countries.filter(
    (country) =>
      (region ? country.region === region : true) &&
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-12">
      <div className="flex justify-between items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterDropdown setRegion={setRegion} />
      </div>
      <div className="grid grid-cols-3 gap-x-12 gap-y-16 mt-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
