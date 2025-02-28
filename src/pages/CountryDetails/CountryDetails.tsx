import { Link, useParams } from "react-router-dom";
import countriesData from "../../../data.json";
 import {FaArrowLeft } from "react-icons/fa"

const CountryDetails: React.FC = () => {
    const { alpha3Code } = useParams();

    const country = countriesData.find(
        (c) => c.alpha3Code.toLowerCase() === alpha3Code?.toLowerCase()
    );

    if (!country) {
        return <p className="text-center text-2xl mt-10">Country Not Found</p>;
    }

    return (
        <div className="p-12">
          <Link to="/" className="inline-flex items-center gap-2 px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded shadow-md">
                <FaArrowLeft size={20} />
                Back to Home
            </Link>

            <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <img
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                    className="w-96 h-60 object-cover rounded-md mx-auto"
                />
                <h1 className="text-3xl font-bold mt-4 text-center">{country.name}</h1>
                <p className="text-center mt-2">
                    <strong>Population:</strong> {country.population.toLocaleString()}
                </p>
                <p className="text-center">
                    <strong>Region:</strong> {country.region}
                </p>
                <p className="text-center">
                    <strong>Capital:</strong> {country.capital || "N/A"}
                </p>
            </div>
        </div>
    );
};

export default CountryDetails;
