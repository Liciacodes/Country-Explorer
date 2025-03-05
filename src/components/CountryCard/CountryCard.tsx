import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

interface Country {
  name: string;
  population: number;
  region: string;
  capital?: string;
  flags: { png: string };
  alpha3Code: string;
}

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  const { darkMode } = useTheme(); // Get dark mode state

  return (
    <Link to={`/country/${country.alpha3Code.toLowerCase()}`} className="cursor-pointer">
      <div
        className={`rounded-lg shadow-md transition-all duration-300
          ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white text-gray-900"}
        `}
      >
        <img
          src={country.flags.png}
          alt={`${country.name} flag`}
          className="w-full h-auto aspect-[16/9] object-cover rounded-tr-md rounded-tl-md"
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mt-2">{country.name}</h2>
          <p>
            <strong>Population:</strong> {country.population.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
