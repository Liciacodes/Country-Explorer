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
  return (
    <div className="bg-gray-100 dark:bg-gray-800  rounded-lg shadow-md">
      <img
        src={country.flags.png}
        alt={`${country.name} flag`}
        className="w-full h-80 object-cover rounded-tr-md rounded-tl-md"
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
  );
};

export default CountryCard;
