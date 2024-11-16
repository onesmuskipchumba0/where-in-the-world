import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white dark:bg-dark-secondary rounded-md shadow-md overflow-hidden">
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.common}`}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h2 className="font-bold text-lg mb-4">{country.name.common}</h2>
          <p className="mb-1">
            <span className="font-semibold">Population:</span>{' '}
            {country.population.toLocaleString()}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Region:</span> {country.region}
          </p>
          <p className="mb-1">
            <span className="font-semibold">Capital:</span> {country.capital?.[0]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;