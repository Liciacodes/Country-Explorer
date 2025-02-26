

interface CountryCardProps {
    country: string;
  }

const CountryCard: React.FC<CountryCardProps> = ({country}) => {
    return(
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <img src="https://restcountries.com/data/afg.svg" alt="flag" className="rounded-t-md"/>
            <img src={country} alt={country} className="w-full h-32 object-cover rounded-md" />
      <h2 className="text-lg font-bold mt-2">{country}</h2>
      <p><strong>Population:</strong> {country.toLocaleString()}</p>
      <p><strong>Region:</strong> {country}</p>
      <p><strong>Capital:</strong> {country?.[0] || "N/A"}</p>
        </div>
    )
}
export default CountryCard;