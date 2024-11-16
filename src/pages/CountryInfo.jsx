import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import CountryMap from '../components/CountryMap';

const CountryInfo = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${id}`);
        setCountry(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching country:', error);
        setLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-primary flex items-center justify-center">
      <div className="text-black dark:text-white">Loading...</div>
    </div>
  );

  if (!country) return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-primary flex items-center justify-center">
      <div className="text-black dark:text-white">Country not found</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-dark-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 
            bg-white dark:bg-dark-secondary
            text-black dark:text-white 
            rounded-lg shadow-md
            hover:shadow-lg transition-shadow duration-200"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back
        </Link>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto rounded-lg shadow-md"
          />

          <div className="text-black dark:text-white">
            <h1 className="text-3xl font-bold mb-6">{country.name.common}</h1>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <div>
                <p><span className="font-semibold">Native Name: </span>
                  {Object.values(country.name.nativeName)[0].common}</p>
                <p><span className="font-semibold">Population: </span>
                  {country.population.toLocaleString()}</p>
                <p><span className="font-semibold">Region: </span>
                  {country.region}</p>
                <p><span className="font-semibold">Sub Region: </span>
                  {country.subregion}</p>
                <p><span className="font-semibold">Capital: </span>
                  {country.capital}</p>
              </div>

              <div>
                <p><span className="font-semibold">Top Level Domain: </span>
                  {country.tld?.join(', ')}</p>
                <p><span className="font-semibold">Currencies: </span>
                  {Object.values(country.currencies)
                    .map(currency => currency.name)
                    .join(', ')}
                </p>
                <p><span className="font-semibold">Languages: </span>
                  {Object.values(country.languages).join(', ')}
                </p>
              </div>
            </div>

            {country.borders && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Border Countries:</h2>
                <div className="flex flex-wrap gap-2">
                  {country.borders.map(border => (
                    <Link
                      key={border}
                      to={`/country/${border}`}
                      className="px-4 py-1 bg-white dark:bg-dark-secondary 
                        rounded shadow-sm hover:shadow-md
                        transition-shadow duration-200"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Map Component */}
        <CountryMap country={country} />
      </div>
    </div>
  );
};

export default CountryInfo;