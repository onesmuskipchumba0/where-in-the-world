import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white dark:bg-dark-secondary 
        rounded-lg shadow-md overflow-hidden
        transform transition-all duration-200
        hover:shadow-xl hover:-translate-y-1
        cursor-pointer">
        <div className="overflow-hidden">
          <img
            src={country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-48 object-cover
              transition-transform duration-200
              hover:scale-110"
          />
        </div>
        <div className="p-6 text-black dark:text-white">
          <h2 className="font-bold text-lg mb-4 
            transition-colors duration-200
            group-hover:text-gray-700 dark:group-hover:text-gray-300">
            {country.name.common}
          </h2>
          <div className="space-y-2">
            <p>
              <span className="font-semibold">Population:</span>{' '}
              {country.population.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p>
              <span className="font-semibold">Capital:</span> {country.capital?.[0]}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;