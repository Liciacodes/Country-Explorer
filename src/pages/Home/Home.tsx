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

interface HomeProps {
  darkMode: boolean
}

const Home: React.FC<HomeProps> = ({darkMode}) => {
  const [countries] = useState<Country[]>(countriesData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");

  const filteredCountries = countries.filter(
    (country) =>
      (region ? country.region === region : true) &&
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`p-12 ${darkMode ? "bg-[hsl(207, 26%, 17%)] text-[hsl(0, 0%, 100%)]" : "bg-[hsl(0, 0%, 98%)] text-[hsl(200, 15%, 8%)"}`}>
      <div className="flex justify-between items-center">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} darkMode={darkMode}/>
        <FilterDropdown setRegion={setRegion} darkMode={darkMode}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 mt-6">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
