import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:transform hover:scale-105 transition-transform duration-200">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg mb-2 dark:text-white">
            {country.name.common}
          </h2>
          <p className="dark:text-gray-300">
            <span className="font-semibold">Population:</span>{' '}
            {country.population.toLocaleString()}
          </p>
          <p className="dark:text-gray-300">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="dark:text-gray-300">
            <span className="font-semibold">Capital:</span> {country.capital?.[0]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;