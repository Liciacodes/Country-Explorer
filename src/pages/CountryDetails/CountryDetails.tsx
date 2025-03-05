import { Link, useParams } from "react-router-dom";
import countriesData from "../../../data.json";
import { FaArrowLeft } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const CountryDetails: React.FC = () => {
    const { alpha3Code } = useParams();
    const { darkMode } = useTheme();

    const country = countriesData.find(
        (c) => c.alpha3Code.toLowerCase() === alpha3Code?.toLowerCase()
    );

    if (!country) {
        return <p className="text-center text-2xl mt-10">Country Not Found</p>;
    }

    return (
        <div
            className={`p-12 min-h-screen ${
                darkMode ? "bg-[hsl(207,26%,17%)] text-[hsl(0,0%,100%)]" : "bg-[hsl(0,0%,98%)] text-[hsl(200,15%,8%)]"
            }`}
        >
            <Link
                to="/"
                className={`inline-flex items-center gap-4 px-6 py-2 rounded shadow-md 
                    ${
                        darkMode
                            ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)] hover:bg-[hsl(209,23%,30%)]"
                            : "bg-[hsl(0,0%,100%)] text-[hsl(200,15%,8%)] hover:bg-[hsl(0,0%,90%)]"
                    }`}
            >
                <FaArrowLeft size={20} />
                Back
            </Link>

            <div className="rounded-lg mt-20 flex flex-col lg:flex-row items-start gap-y-10 gap-x-36">
                <img
                    src={country.flags.png}
                    alt={`${country.name} flag`}
                    className="w-[500px] h-[300px] object-cover shadow-lg"
                />

               
                <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-6">{country.name}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p><strong>Native Name:</strong> {country.nativeName}</p>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Sub Region:</strong> {country.subregion}</p>
                            <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
                        </div>
                        <div>
                            <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.join(", ")}</p>
                            <p><strong>Currencies:</strong> {country.currencies?.map((c) => c.name).join(", ")}</p>
                            <p><strong>Languages:</strong> {country.languages?.map((l) => l.name).join(", ")}</p>
                        </div>
                    </div>

                    {/* Border Countries */}
                    {country.borders && country.borders.length > 0 && (
                        <div className="mt-8">
                            <h2 className="font-semibold mb-2">Border Countries:</h2>
                            <div className="flex flex-wrap gap-2">
                                {country.borders.map((borderCode) => {
                                    const borderCountry = countriesData.find(
                                        (c) => c.alpha3Code.toLowerCase() === borderCode.toLowerCase()
                                    );

                                    return borderCountry ? (
                                        <Link key={borderCode} to={`/country/${borderCountry.alpha3Code.toLowerCase()}`}>
                                            <button
                                                className={`px-4 py-1 rounded shadow-md text-sm transition 
                                                    ${
                                                        darkMode
                                                            ? "bg-[hsl(209,23%,22%)] hover:bg-[hsl(209,23%,30%)] text-[hsl(0,0%,100%)]"
                                                            : "bg-[hsl(0,0%,100%)] hover:bg-[hsl(0,0%,90%)] text-[hsl(200,15%,8%)]"
                                                    }`}
                                            >
                                                {borderCountry.name}
                                            </button>
                                        </Link>
                                    ) : (
                                        <button
                                            key={borderCode}
                                            className="px-4 py-1 bg-gray-300 dark:bg-gray-700 rounded shadow-md text-sm cursor-not-allowed"
                                            disabled
                                        >
                                            {borderCode}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountryDetails;
