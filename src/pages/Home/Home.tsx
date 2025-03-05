import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown";
import CountryCard from "../../components/CountryCard/CountryCard";
import countriesData from "../../../data.json";
import { useTheme } from "../../context/ThemeContext";

interface Country {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flags: { png: string };
  alpha3Code: string;
}

const Home: React.FC = () => {
  const [countries] = useState<Country[]>(countriesData);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [region, setRegion] = useState<string>("");
  const { darkMode } = useTheme();

  const filteredCountries = countries.filter(
    (country) =>
      (region ? country.region === region : true) &&
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className={`min-h-screen p-12 transition-all duration-300 
        ${darkMode 
          ? "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)]"
          : "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)]"
        }`}
    >
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
        <FilterDropdown setRegion={setRegion} darkMode={darkMode} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mt-16">
        {filteredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
